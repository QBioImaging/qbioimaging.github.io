import { useEffect, useRef } from 'react'
import '../styles/aether-ribbon-mesh.css'

class Particle {
  constructor(x, y, color) {
    this.x = x
    this.y = y
    this.vx = (Math.random() - 0.5) * 2
    this.vy = (Math.random() - 0.5) * 2
    this.maxLife = 80 + Math.random() * 60
    this.life = this.maxLife
    this.size = 1 + Math.random() * 2
    this.color = color
  }

  update() {
    this.x += this.vx
    this.y += this.vy
    this.life -= 1
    this.vx *= 0.98
    this.vy *= 0.98
  }

  draw(ctx) {
    if (this.life <= 0) return
    ctx.globalAlpha = this.life / this.maxLife
    ctx.fillStyle = this.color
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill()
    ctx.globalAlpha = 1
  }
}

/** QBI teal palette — lab-soft intensity (atmosphere, not hero). */
const COLORS = {
  bg: '#ffffff',
  particle: 'rgba(30, 182, 187, 0.45)',
  node: 'rgba(0, 140, 149, 0.14)',
  primaryStops: [
    [0, 'rgba(30, 182, 187, 0.06)'],
    [0.5, 'rgba(0, 140, 149, 0.38)'],
    [1, 'rgba(11, 81, 88, 0.06)'],
  ],
  secondaryStops: [
    [0, 'rgba(112, 215, 222, 0.015)'],
    [0.5, 'rgba(30, 182, 187, 0.12)'],
    [1, 'rgba(0, 140, 149, 0.015)'],
  ],
}

function AetherRibbonMesh() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: false })
    if (!ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let animationFrameId = 0
    let width = 0
    let height = 0
    let dpr = 1

    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0, active: false }
    const particles = []
    const clickRipple = { x: 0, y: 0, radius: 0, maxRadius: 400, speed: 14 }

    const handleResize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const handlePointerMove = (e) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY
      mouse.targetX = clientX - width / 2
      mouse.targetY = clientY - height / 2
      mouse.active = true
    }

    const handlePointerLeave = () => {
      mouse.targetX = 0
      mouse.targetY = 0
      mouse.active = false
    }

    const handlePointerDown = (e) => {
      if (reduceMotion) return
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY

      clickRipple.x = clientX
      clickRipple.y = clientY
      clickRipple.radius = 0

      for (let i = 0; i < 12; i++) {
        particles.push(new Particle(clickRipple.x, clickRipple.y, COLORS.particle))
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handlePointerMove)
    window.addEventListener('touchmove', handlePointerMove, { passive: true })
    window.addEventListener('mouseleave', handlePointerLeave)
    window.addEventListener('mousedown', handlePointerDown)
    window.addEventListener('touchstart', handlePointerDown, { passive: true })

    let lastTime = performance.now()
    let time = 0

    const noise = (x, t, o) =>
      (Math.sin(x * 0.0012 + t * 0.25 + o) + Math.cos(x * 0.0028 - t * 0.4 + o * 2)) / 2

    const layers = [
      {
        ribbonCount: 10,
        step: 5,
        offsetMod: 0,
        freqScale: 0.0035,
        ampScale: 28,
        speedScale: 0.95,
        primary: true,
      },
      {
        ribbonCount: 6,
        step: 7,
        offsetMod: 1.2,
        freqScale: 0.0075,
        ampScale: 16,
        speedScale: 0.6,
        primary: false,
      },
    ]

    const drawFrame = (dt) => {
      if (!reduceMotion) {
        time += dt * 0.85
        const lerpFactor = 1 - Math.exp(-9 * dt)
        mouse.x += (mouse.targetX - mouse.x) * lerpFactor
        mouse.y += (mouse.targetY - mouse.y) * lerpFactor
      }

      ctx.fillStyle = COLORS.bg
      ctx.fillRect(0, 0, width, height)

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.update()
        p.draw(ctx)
        if (p.life <= 0) particles.splice(i, 1)
      }

      if (clickRipple.radius < clickRipple.maxRadius) {
        clickRipple.radius += clickRipple.speed
      }

      layers.forEach((layer) => {
        ctx.globalCompositeOperation = layer.primary ? 'source-over' : 'multiply'

        const gradient = ctx.createLinearGradient(0, 0, width, 0)
        const stops = layer.primary ? COLORS.primaryStops : COLORS.secondaryStops
        stops.forEach(([stop, color]) => gradient.addColorStop(stop, color))

        for (let r = 0; r < layer.ribbonCount; r++) {
          const ribbonProgress = r / layer.ribbonCount
          const yOffset = height * 0.28 + r * (height * 0.028) + layer.offsetMod * 28
          const baseAlpha = (1 - ribbonProgress * 0.75) * 0.4

          const rippleDistort =
            clickRipple.radius < clickRipple.maxRadius
              ? Math.sin((time * 2 + ribbonProgress * Math.PI) * 2) *
                ((clickRipple.maxRadius / Math.max(clickRipple.radius, 1)) * 1.4)
              : 0

          ctx.beginPath()

          for (let x = 0; x <= width + layer.step; x += layer.step) {
            const edgeEnvelope = Math.sin((x / width) * Math.PI)

            const nFreq = 1 + noise(x, time, ribbonProgress) * 0.18
            const nAmp = 1 + noise(x * 2, -time, ribbonProgress * 0.5) * 0.15

            const wave1 =
              Math.sin(x * (layer.freqScale * nFreq) + time * layer.speedScale + r * 0.18) *
              (layer.ampScale * edgeEnvelope * nAmp)
            const wave2 = Math.cos(x * 0.008 - time * 0.7 + r * 0.1) * (12 * edgeEnvelope)
            const wave3 = Math.sin(x * 0.018 + time * 1.4) * (5 * edgeEnvelope)

            const cursorXWorld = width / 2 + mouse.x
            const distToMouseX = Math.abs(x - cursorXWorld)
            const mouseRadius = layer.primary ? 320 : 180
            const mouseFactor = Math.exp(-((distToMouseX / mouseRadius) ** 2))
            const mouseDisplacement =
              Math.sin(x * 0.015 + time * 2.6) *
              (mouseFactor * (layer.primary ? 22 : 12) * edgeEnvelope)

            const rippleFactor = Math.exp(
              -((Math.abs(distToMouseX - clickRipple.radius) / (25 + rippleDistort)) ** 2),
            )
            const rippleDisplacement = rippleFactor * rippleDistort * (1.2 - ribbonProgress * 0.5)

            const y =
              yOffset +
              wave1 +
              wave2 +
              wave3 +
              mouseDisplacement +
              rippleDisplacement +
              mouse.y * (ribbonProgress * 0.06)

            if (x === 0) ctx.moveTo(x, y)
            else ctx.lineTo(x, y)

            if (layer.primary && x % 64 === 0) {
              ctx.fillStyle = COLORS.node
              ctx.fillRect(x - 1, y - 1, 2, 2)
            }
          }

          ctx.globalAlpha = baseAlpha
          ctx.strokeStyle = gradient
          ctx.lineWidth = (layer.primary ? 1.05 : 0.65) + (1 - ribbonProgress) * 0.35
          ctx.stroke()
        }
      })

      ctx.globalAlpha = 1
      ctx.globalCompositeOperation = 'source-over'
    }

    if (reduceMotion) {
      drawFrame(0)
      return () => {
        window.removeEventListener('resize', handleResize)
        window.removeEventListener('mousemove', handlePointerMove)
        window.removeEventListener('touchmove', handlePointerMove)
        window.removeEventListener('mouseleave', handlePointerLeave)
        window.removeEventListener('mousedown', handlePointerDown)
        window.removeEventListener('touchstart', handlePointerDown)
      }
    }

    const render = (now) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1)
      lastTime = now
      drawFrame(dt)
      animationFrameId = requestAnimationFrame(render)
    }

    animationFrameId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handlePointerMove)
      window.removeEventListener('touchmove', handlePointerMove)
      window.removeEventListener('mouseleave', handlePointerLeave)
      window.removeEventListener('mousedown', handlePointerDown)
      window.removeEventListener('touchstart', handlePointerDown)
    }
  }, [])

  return (
    <div className="aether-ribbon-mesh" aria-hidden="true">
      <canvas ref={canvasRef} className="aether-ribbon-mesh__canvas" />
    </div>
  )
}

export default AetherRibbonMesh
