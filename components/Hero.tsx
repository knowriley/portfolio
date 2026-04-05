export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 pt-20 pb-16">
      <p className="text-sm text-text-tertiary mb-5">Based in New York City</p>

      <h1
        className="font-bold text-text-primary leading-tight mb-8"
        style={{ fontSize: 'clamp(36px, 4.5vw, 60px)' }}
      >
        UX Strategist & Product Designer solving complex problems with{' '}
        <span className="text-secondary">human-centered design</span> and{' '}
        <span className="text-secondary">systems thinking.</span>
      </h1>

      <p className="text-md text-text-secondary max-w-2xl leading-relaxed">
        Currently designing agent experiences @{' '}
        <a
          href="https://chubb.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-text-primary"
        >
          Chubb
        </a>{' '}
        and pursuing a MS in Information Experience Design @{' '}
        <a
          href="https://pratt.edu"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-text-primary"
        >
          Pratt
        </a>
      </p>
    </section>
  )
}
