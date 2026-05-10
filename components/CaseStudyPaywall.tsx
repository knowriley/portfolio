'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
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
  const [state, formAction] = useActionState(unlockCaseStudy, initialState)

  return (
    <div className="relative">
      {/* Gradient fade into the paywall — pulls the eye down from the last Overview line */}
      <div
        aria-hidden
        className="absolute -top-40 left-0 right-0 h-40 pointer-events-none bg-gradient-to-b from-transparent to-bg"
      />

      <div className="relative flex justify-center pt-8 pb-4">
        <div className="w-full max-w-[480px] bg-bg-tertiary border border-border-strong rounded-sm shadow-md px-8 py-12 text-center">
          <div className="flex justify-center mb-5 text-gradient-pink">
            <Lock size={48} strokeWidth={1.5} />
          </div>

          <h2 className="text-h4 md:text-h3 font-normal text-text-primary mb-3">
            Password please
          </h2>

          <p className="text-body-small text-text-secondary mb-6">
            Don&apos;t have it? Send me an email at{' '}
            <InlineLink href="mailto:knowles.riley@gmail.com">
              knowles.riley@gmail.com
            </InlineLink>
            , I&apos;d be happy to share.
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
              className="w-full text-body-small text-text-primary placeholder:text-text-tertiary bg-bg-secondary border border-border rounded-sm p-3 focus:border-border-focus transition-colors"
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
