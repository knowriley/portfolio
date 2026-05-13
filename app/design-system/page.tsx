import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import DesignSystemTabs from '@/components/DesignSystemTabs'

export const metadata = {
  title: 'Design System',
}

export default function DesignSystemPage() {
  return (
    <>
      <Nav variant="white" />
      <main id="main-content" tabIndex={-1}>

        {/* ── Hero ── */}
        <section className="flex justify-center px-5 md:px-10 pt-10 md:pt-16 pb-8 md:pb-12 bg-bg-secondary">
          <div className="max-w-page w-full flex flex-col md:flex-row gap-8 items-start">
            <h1 className="text-h1 md:text-display font-normal text-text-primary md:whitespace-nowrap">
              Building this website
            </h1>
            <div className="flex-1 min-w-0 flex flex-col gap-2">
              <p className="text-body-small md:text-body-big text-text-secondary">
                A small subset of the system and design choices that support this website. The
                true source of truth is maintained in CLAUDE.md — setting context and
                mitigating drift.
              </p>
              <div className="flex gap-2 flex-wrap pt-2">
                <Button
                  href="https://github.com/knowriley/portfolio/blob/main/CLAUDE.md"
                  variant="primary"
                  external
                >
                  See CLAUDE.md
                </Button>
                <Button
                  href="https://github.com/knowriley/portfolio"
                  variant="outline"
                  external
                >
                  Visit Github
                </Button>
              </div>
            </div>
          </div>
        </section>
        <DesignSystemTabs />

      </main>
      <Footer />
    </>
  )
}
