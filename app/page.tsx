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
        <TestimonialCarousel />
      </main>
      <Footer />
    </>
  )
}
