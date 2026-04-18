import { cookies } from 'next/headers'
import { createHash, timingSafeEqual } from 'crypto'

export const UNLOCK_COOKIE = 'portfolio_unlock'

export function tokenFor(password: string): string {
  return createHash('sha256').update(password).digest('hex')
}

function expectedToken(): string | null {
  const pw = process.env.CASE_STUDY_PASSWORD
  if (!pw) return null
  return tokenFor(pw)
}

export async function isUnlocked(): Promise<boolean> {
  const expected = expectedToken()
  if (!expected) return false
  const got = (await cookies()).get(UNLOCK_COOKIE)?.value
  if (!got || got.length !== expected.length) return false
  return timingSafeEqual(Buffer.from(got), Buffer.from(expected))
}
