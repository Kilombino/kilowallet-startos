import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'kilowallet',
  title: 'Kilowallet',
  license: 'Apache-2.0',
  packageRepo: 'https://github.com/Kilombino/kilowallet-startos',
  upstreamRepo: 'https://github.com/Kilombino/kilowallet-server',
  marketingUrl: 'https://kilombino.com/kilowallet/',
  donationUrl: null,
  description: { short, long },
  volumes: ['main'],
  images: {
    kilowallet: {
      source: {
        dockerBuild: {
          dockerfile: 'kilowallet-server/Dockerfile',
          workdir: 'kilowallet-server',
        },
      },
      arch: ['x86_64', 'aarch64'],
    },
  },
})
