import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import WorkGrid from '@/components/WorkGrid'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <WorkGrid />

        <div className="flex justify-center px-5 md:px-10">
          <div className="max-w-page w-full border-t border-border" />
        </div>

        <TestimonialCarousel />
      </main>
      <Footer />
    </>
  )
}
