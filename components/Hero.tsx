export default function Hero() {
  return (
    <section className="flex justify-center px-10 py-20">
      <div className="max-w-page w-full">
        <p className="text-sm text-text-tertiary mb-4">Based in New York City</p>

        <h1 className="font-medium text-text-primary mb-4 text-3xl sm:text-[44px] lg:text-[56px]">
          UX Strategist & Product Designer solving complex problems with{' '}
          <span className="text-accent">human-centered design</span> and{' '}
          <span className="text-accent">systems thinking.</span>
        </h1>

        <p className="text-lg text-text-secondary">
          Currently designing claims experiences @{' '}
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
      </div>
    </section>
  )
}
