import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import DesignSystemTabs from '@/components/DesignSystemTabs'

export const metadata = {
  title: 'Design System — Riley Knowles',
}

export default function DesignSystemPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ── Hero ── */}
        <section className="flex justify-center px-5 md:px-10 pt-10 md:pt-16 pb-8 md:pb-12">
          <div className="max-w-page w-full">
            <div className="h-8" />
            <h1 className="text-h1 md:text-display font-normal text-text-primary">Design System</h1>
            <p className="text-body-small md:text-body-big text-text-secondary mt-4">
              Semantic tokens, type scale, and spacing for this portfolio — mirrored 1:1 in Figma.
            </p>
          </div>
        </section>
        <DesignSystemTabs />

      </main>
      <Footer />
    </>
  )
}
