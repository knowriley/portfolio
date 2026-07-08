'use client'

import { useState } from 'react'
import SegmentedControl from './SegmentedControl'
import { ImageBlock } from './case-study'

type View = 'before' | 'after'

type Img = { src: string; alt: string }

export default function BeforeAfterToggle({
  before,
  after,
  caption,
  defaultView = 'before',
}: {
  before: Img
  after: Img
  caption?: string
  defaultView?: View
}) {
  const [view, setView] = useState<View>(defaultView)
  const current = view === 'before' ? before : after
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end">
        <SegmentedControl<View>
          ariaLabel="Before / after view"
          value={view}
          onChange={setView}
          options={[
            { label: 'Before', value: 'before' },
            { label: 'After', value: 'after' },
          ]}
        />
      </div>
      <ImageBlock src={current.src} alt={current.alt} caption={caption} />
    </div>
  )
}
