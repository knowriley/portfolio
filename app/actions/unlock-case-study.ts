'use server'

import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { tokenFor, UNLOCK_COOKIE } from '@/lib/case-study-lock'

export type UnlockState = { error?: string; ok?: boolean }

export async function unlockCaseStudy(
  _prev: UnlockState,
  formData: FormData,
): Promise<UnlockState> {
  const submitted = String(formData.get('password') ?? '')
  const expected = process.env.CASE_STUDY_PASSWORD
  if (!expected) return { error: 'Password check is not configured.' }
  if (submitted !== expected) return { error: 'Incorrect password.' }

  const jar = await cookies()
  jar.set(UNLOCK_COOKIE, tokenFor(expected), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
  })

  // Revalidate the page the user just unlocked from, so it re-renders with the
  // gated content visible. Restricted to /work/* to avoid arbitrary revalidation.
  const pathname = String(formData.get('pathname') ?? '')
  if (/^\/work\/[a-z0-9-]+\/?$/i.test(pathname)) {
    revalidatePath(pathname)
  }

  return { ok: true }
}
