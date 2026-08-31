import '../styles/section-wave.css'

function SectionWaveDivider() {
  return (
    <div className="section-wave" aria-hidden="true">
      <div className="section-wave__motion">
        <svg
          className="section-wave__svg"
          viewBox="0 0 2880 72"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="section-wave__path section-wave__path--back"
            d="M0 40 C240 52 480 28 720 40 C960 52 1200 28 1440 40 C1680 52 1920 28 2160 40 C2400 52 2640 28 2880 40"
          />
          <path
            className="section-wave__path section-wave__path--mid"
            d="M0 36 C240 24 480 48 720 36 C960 24 1200 48 1440 36 C1680 24 1920 48 2160 36 C2400 24 2640 48 2880 36"
          />
          <path
            className="section-wave__path section-wave__path--front"
            d="M0 32 C240 44 480 20 720 32 C960 44 1200 20 1440 32 C1680 44 1920 20 2160 32 C2400 44 2640 20 2880 32"
          />
        </svg>
      </div>
    </div>
  )
}

export default SectionWaveDivider
