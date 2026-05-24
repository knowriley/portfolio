'use client'

import { useState } from 'react'
import SegmentedControl from './SegmentedControl'
import { ImageBlock } from './case-study'

type View = 'internal' | 'client'

const VIEWS = {
  internal: {
    src: '/images/service-design-blueprint-internal.webp',
    alt: 'FigJam working blueprint mapping the DX Center service in detail across five stages: Outreach, Contact, Review & Evaluation, Additional Intake, and Client Secured',
  },
  client: {
    src: '/images/service-design-blueprint-client.webp',
    alt: 'Polished client-facing service blueprint summarizing the five stages of the DX Center matching service',
  },
} as const

export default function ServiceBlueprintToggle() {
  const [view, setView] = useState<View>('internal')
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end">
        <SegmentedControl<View>
          ariaLabel="Service blueprint view"
          value={view}
          onChange={setView}
          options={[
            { label: 'Internal', value: 'internal' },
            { label: 'Client-facing', value: 'client' },
          ]}
        />
      </div>
      <ImageBlock
        src={VIEWS[view].src}
        alt={VIEWS[view].alt}
        caption="Simplified service blueprint visualization"
      />
    </div>
  )
}
