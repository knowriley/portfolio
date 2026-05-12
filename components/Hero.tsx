'use client'

import { Fragment, useEffect, useLayoutEffect, useState } from 'react'
import InlineLink from './InlineLink'

// Each phrase animates in together; words inside a phrase share the same delay.
// Splitting into per-word `inline-block` spans is what lets `transform: translateY` (from
// `animate-fade-in-up`) actually move the text — `transform` is a no-op on inline elements.
const PHRASES = [
  { words: ['Hey,'], delay: 0 },
  { words: ["I'm", 'Riley'], delay: 1.0 },
  // Phrase 3 follows phrase 2 with a shorter beat (0.6s) than phrase 2 follows phrase 1 (1.0s).
  { words: ['and', "I'm", 'really', 'glad', "you're", 'here.'], delay: 1.6 },
]
const FLAT_WORDS = PHRASES.flatMap(({ words, delay }) => words.map((word) => ({ word, delay })))
const PHRASE_ANIM_S = 0.8 // per-phrase fade-in-up duration; overrides the class's 0.55s default
const PHRASE_ANIM_MS = PHRASE_ANIM_S * 1000
const GREETING_REVEAL_MS = Math.round(PHRASES[PHRASES.length - 1].delay * 1000) + PHRASE_ANIM_MS // last phrase fully visible
const HOLD_MS = 1300
const FADE_OUT_MS = 250
const SESSION_FLAG = 'hero-greeting-shown'

type Phase = 'final' | 'greeting' | 'holding' | 'fading-out'

// useLayoutEffect on the server logs a warning; this isomorphic alias avoids it.
const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

export default function Hero() {
  // Initial state = final so SSR + JS-disabled + returning visitors see the real copy immediately.
  const [phase, setPhase] = useState<Phase>('final')
  // True only when 'final' is reached by transitioning out of the greeting (not on initial mount).
  const [enteredFinalFromGreeting, setEnteredFinalFromGreeting] = useState(false)

  // Decide whether to play the greeting before paint, to avoid a flash of the final hero.
  useIsoLayoutEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const alreadyShown = sessionStorage.getItem(SESSION_FLAG) === '1'
    if (!reducedMotion && !alreadyShown) {
      setPhase('greeting')
    }
  }, [])

  // Greeting → holding → fading-out → final.
  useEffect(() => {
    if (phase === 'greeting') {
      const t = setTimeout(() => setPhase('holding'), GREETING_REVEAL_MS)
      return () => clearTimeout(t)
    }
    if (phase === 'holding') {
      const t = setTimeout(() => setPhase('fading-out'), HOLD_MS)
      return () => clearTimeout(t)
    }
    if (phase === 'fading-out') {
      const t = setTimeout(() => {
        sessionStorage.setItem(SESSION_FLAG, '1')
        setEnteredFinalFromGreeting(true)
        setPhase('final')
      }, FADE_OUT_MS)
      return () => clearTimeout(t)
    }
  }, [phase])

  const isGreeting = phase === 'greeting' || phase === 'holding' || phase === 'fading-out'
  const greetingFading = phase === 'fading-out'

  return (
    <section className="flex justify-center px-5 md:px-10 md:h-[calc(100dvh-64px)] md:pb-16">
      <div className="max-w-page w-full flex flex-col">
        {/* Spacer — fills remaining space on desktop, pushes content to bottom */}
        <div className="pt-12 md:pt-0 md:flex-1" />

        {isGreeting && (
          <h1
            className={`font-normal text-text-primary text-h3 md:text-h2 lg:text-display pb-12 md:pb-16 transition-opacity duration-[250ms] ${
              greetingFading ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {FLAT_WORDS.map(({ word, delay }, i) => (
              <Fragment key={i}>
                <span
                  className="inline-block animate-fade-in-up"
                  style={{ animationDelay: `${delay}s`, animationDuration: `${PHRASE_ANIM_S}s` }}
                >
                  {word}
                </span>
                {i < FLAT_WORDS.length - 1 && ' '}
              </Fragment>
            ))}
          </h1>
        )}

        {phase === 'final' && (
          <>
            {/*
              Gradient is applied to the h1 itself (bg-clip:text + text-transparent), so the
              red→pink wash spans the full headline as one continuous image. Non-highlighted
              segments override `color` with `text-text-primary` to render solid; the three
              highlighted phrases inherit the parent's transparent fill, revealing the slice of
              gradient at their position.
            */}
            <h1
              className={`font-normal mb-4 text-h3 md:text-h2 lg:text-display bg-clip-text text-transparent bg-gradient-to-r from-gradient-red to-gradient-pink [&_a]:text-inherit ${
                enteredFinalFromGreeting ? 'animate-fade-in-up' : ''
              }`}
            >
              <span className="text-text-primary">Riley is an </span>
              experience strategist,{' '}
              interaction designer
              <span className="text-text-primary"> and </span>
              designer engineer
              <span className="text-text-primary"> based in Brooklyn, NY.</span>
            </h1>
            <p
              className={`text-body-small md:text-body-big text-text-secondary pb-12 md:pb-16 ${
                enteredFinalFromGreeting ? 'animate-fade-in-left' : ''
              }`}
              style={enteredFinalFromGreeting ? { animationDelay: '0.2s' } : undefined}
            >
              Currently designing claims experiences @{' '}
              <InlineLink href="https://chubb.com" external variant="subtle">Chubb</InlineLink>{' '}
              and completing a MS in Information Experience Design @{' '}
              <InlineLink href="https://pratt.edu" external variant="subtle">Pratt</InlineLink>.
            </p>
          </>
        )}

        {/* Bottom-of-viewport rule on desktop (md:h-[calc(100dvh-64px)] on the section
            pins this to the viewport bottom); flows naturally below the bio on mobile. */}
        <div className="border-t border-border" />
      </div>
    </section>
  )
}
