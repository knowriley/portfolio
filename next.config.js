/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/work/ai-claims-portal',
        destination: '/work/insurance-claims-portal',
        permanent: true,
      },
      {
        source: '/work/evidence-of-insurability',
        destination: '/work/insurance-product-selection',
        permanent: true,
      },
      {
        source: '/work/conductor-website-redesign',
        destination: '/work/ai-gtm-website-launch',
        permanent: true,
      },
      {
        source: '/work/design-system-documentation',
        destination: '/work/design-system-source-of-truth',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
