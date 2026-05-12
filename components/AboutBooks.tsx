'use client'

import { useState, type ReactNode } from 'react'
import { ImageBlock } from './case-study'
import InlineLink from './InlineLink'

type Book = {
  title: string
  cover?: { src: string; alt: string }
  description?: ReactNode
  buyUrl?: string
}

const books: Book[] = [
  {
    title: 'Designing Your Life',
    cover: { src: '/images/books/book-designing-your-life.webp', alt: 'Designing Your Life cover' },
    description: (
      <>
        Written by the founders of{' '}
        <InlineLink href="https://lifedesignlab.stanford.edu/" external>
          Stanford&rsquo;s Life Design Lab
        </InlineLink>
        , this book introduced me to design thinking. Applying design thinking
        principles to my life showed me how powerful and effective it can be,
        and is one of the reasons I became a designer.
      </>
    ),
    buyUrl: 'https://bookshop.org/p/books/designing-your-life-how-to-build-a-well-lived-joyful-life-bill-burnett/c6fb1f0599e47319?ean=9781101875322&next=t',
  },
  {
    title: 'Bird by Bird',
    cover: { src: '/images/books/book-bird-by-bird.webp', alt: 'Bird by Bird cover' },
    description:
      'The newest addition to this list, this book is a hilarious, neurotic and deeply relatable storytelling of exceptional advice that came at the exact time I needed it. For those who recognize themself in the pages, reading this book feels like a long hug.',
    buyUrl: 'https://bookshop.org/p/books/bird-by-bird-some-instructions-on-writing-and-life-anne-lamott/8649952',
  },
  {
    title: 'Your Survival Instinct is Killing You',
    cover: { src: '/images/books/book-your-survival-instinct-is-killing-you.webp', alt: 'Your Survival Instinct is Killing You cover' },
    description:
      'This book transformed the way I view discomfort, teaching me to use it as a tool for growth. Ultimately, it played a pivotal role in shaping my resilience—now a defining part of who I am.',
    buyUrl: 'https://bookshop.org/p/books/your-survival-instinct-is-killing-you-retrain-your-brain-to-conquer-fear-and-build-resilience-marc-schoen/16629515',
  },
  {
    title: 'Letters to a Young Poet',
    cover: { src: '/images/books/letters-to-a-young-poet.webp', alt: 'Letters to a Young Poet cover' },
    description:
      'This book resets my nervous system and is one I re-read every few years. Apparently it\u2019s popular in the architect community, though I really couldn\u2019t tell you why.',
    buyUrl: 'https://bookshop.org/p/books/letters-to-a-young-poet-rainer-maria-rilke/c68a68aa622d7cb2?ean=9780393310399',
  },
]

export default function AboutBooks() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const active = activeIndex !== null ? books[activeIndex] : null

  return (
    <section className="flex justify-center px-5 md:px-10 py-12 md:py-20">
      <div className="max-w-page w-full">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 lg:items-start lg:min-h-[648px]">
          {/* Left — prose */}
          <div className="lg:flex-1 lg:min-w-0">
            <p className="text-body-small md:text-body-big text-text-secondary">
              Outside of design you can find me at the yoga studio, seeing the
              latest campy horror movie, and eating through the pastry cases of
              Brooklyn cafés.
            </p>
            <p className="text-body-small md:text-body-big text-text-secondary mt-6">
              I also read on occasion, and have four books that I consider to
              have changed my life.
            </p>
          </div>

          {/* Center — book cover (empty until a book is selected). Mobile slots it last (order-4) so the description sits directly above it; desktop reverts to source order. */}
          <div className="order-4 lg:order-none lg:w-96 lg:shrink-0">
            {active && (
              <div key={activeIndex} className="animate-fade-in">
                {active.buyUrl ? (
                  <a
                    href={active.buyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Buy ${active.title} on Bookshop.org`}
                    className="block transition-transform duration-200 hover:-translate-y-2.5"
                  >
                    {active.cover ? (
                      <ImageBlock src={active.cover.src} alt={active.cover.alt} />
                    ) : (
                      <ImageBlock label="Cover image" />
                    )}
                  </a>
                ) : active.cover ? (
                  <ImageBlock src={active.cover.src} alt={active.cover.alt} />
                ) : (
                  <ImageBlock label="Cover image" />
                )}
              </div>
            )}
          </div>

          {/* Mobile-only — active book's description, sits between list and cover */}
          {active?.description && (
            <div
              key={`desc-${activeIndex}`}
              className="order-3 lg:hidden animate-fade-in"
            >
              <div className="bg-bg-secondary border border-border rounded-sm p-5 text-body-small text-text-secondary">
                {active.description}
                {active.buyUrl && (
                  <div className="mt-4">
                    <InlineLink href={active.buyUrl} external variant="icon-emphasis">
                      Read {active.title}
                    </InlineLink>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Right — book list (accordion: click to reveal description). Mobile orders this just after the prose; desktop reverts to source order. */}
          <div className="order-2 lg:order-none lg:w-[400px] lg:shrink-0">
            <p className="text-small font-medium uppercase tracking-widest text-text-tertiary mb-4">
              Books
            </p>
            <ul className="flex flex-col gap-0.5">
              {books.map((book, i) => {
                const isActive = activeIndex === i
                return (
                  <li key={book.title}>
                    <button
                      type="button"
                      onClick={() => setActiveIndex(isActive ? null : i)}
                      aria-expanded={isActive}
                      aria-controls={`book-desc-${i}`}
                      className={`block w-full text-left text-body-small px-2.5 py-1.5 rounded-sm transition-colors lg:whitespace-nowrap ${
                        isActive
                          ? 'bg-bg-tertiary text-text-primary font-medium'
                          : 'text-text-secondary hover:bg-bg-tertiary hover:text-text-primary hover:font-medium'
                      }`}
                    >
                      {book.title}
                    </button>
                    {book.description && (
                      <div
                        id={`book-desc-${i}`}
                        role="region"
                        aria-label={`${book.title} description`}
                        className={`hidden lg:grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
                          isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                        }`}
                      >
                        <div className="min-h-0">
                          <div
                            className={`pt-2 pb-2 transition-opacity duration-300 ease-out ${
                              isActive ? 'opacity-100' : 'opacity-0'
                            }`}
                          >
                            <div className="bg-bg-secondary border border-border rounded-sm p-5 text-body-small text-text-secondary">
                              {book.description}
                              {book.buyUrl && (
                                <div className="mt-4">
                                  <InlineLink href={book.buyUrl} external variant="icon-emphasis">
                                    Read {book.title}
                                  </InlineLink>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
