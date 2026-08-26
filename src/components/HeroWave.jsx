function HeroWave() {
  return (
    <div className="hero__wave" aria-hidden="true">
      <div className="hero__wave-field" />
      <div className="hero__wave-motion">
        <svg
          className="hero__wave-svg"
          viewBox="0 0 2880 180"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="hero__wave-path hero__wave-path--back"
            d="M0 92 C180 132 360 42 540 92 C720 142 900 52 1080 92 C1260 132 1380 72 1440 88 C1620 132 1800 42 1980 92 C2160 142 2340 52 2520 92 C2700 132 2820 72 2880 88 L2880 180 L0 180 Z"
          />
          <path
            className="hero__wave-path hero__wave-path--mid"
            d="M0 108 C160 148 340 68 520 108 C700 148 880 78 1060 108 C1240 138 1360 98 1440 112 C1600 148 1780 68 1960 108 C2140 148 2320 78 2500 108 C2680 138 2800 98 2880 112 L2880 180 L0 180 Z"
          />
          <path
            className="hero__wave-path hero__wave-path--front"
            d="M0 128 C140 158 300 108 460 128 C620 148 780 118 940 132 C1100 146 1280 124 1440 136 C1580 158 1740 108 1900 128 C2060 148 2220 118 2380 132 C2540 146 2720 124 2880 136 L2880 180 L0 180 Z"
          />
        </svg>
      </div>
    </div>
  )
}

export default HeroWave
