'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { Lock } from 'lucide-react'
import InlineLink from '@/components/InlineLink'
import Button from '@/components/Button'
import {
  unlockCaseStudy,
  type UnlockState,
} from '@/app/actions/unlock-case-study'

const initialState: UnlockState = {}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending} fullWidth noIcon>
      {pending ? 'Checking…' : 'Continue reading'}
    </Button>
  )
}

export default function CaseStudyPaywall({ pathname }: { pathname: string }) {
  const [state, formAction] = useFormState(unlockCaseStudy, initialState)

  return (
    <div className="relative">
      {/* Gradient fade into the paywall — pulls the eye down from the last Overview line */}
      <div
        aria-hidden
        className="absolute -top-40 left-0 right-0 h-40 pointer-events-none bg-gradient-to-b from-transparent to-bg"
      />

      <div className="relative flex justify-center pt-8 pb-4">
        <div className="w-full max-w-[480px] bg-bg border border-border rounded-sm shadow-md px-8 py-10 text-center">
          <div className="flex justify-center mb-5 text-text-primary">
            <Lock size={32} strokeWidth={1.5} />
          </div>

          <h2 className="text-body-biggest text-text-primary mb-3">
            This case study is password-protected
          </h2>

          <p className="text-body-small text-text-secondary mb-6">
            Done under NDA. Drop me a line at{' '}
            <InlineLink href="mailto:knowles.riley@gmail.com">
              knowles.riley@gmail.com
            </InlineLink>{' '}
            if you&apos;d like access.
          </p>

          <form action={formAction} className="flex flex-col gap-3">
            <input type="hidden" name="pathname" value={pathname} />
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              required
              placeholder="Password"
              aria-label="Password"
              className="w-full text-body-small text-text-primary placeholder:text-text-tertiary bg-bg-secondary border border-border rounded-sm px-3 py-2.5 focus:border-border-strong focus:bg-bg outline-none transition-colors"
            />
            <SubmitButton />
          </form>

          {state?.error && (
            <p className="text-body-small text-text-secondary mt-4" role="alert">
              {state.error}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
