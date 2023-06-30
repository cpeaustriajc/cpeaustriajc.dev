import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { codeInput } from '@sanity/code-input'
import schemas from './sanity/schemas'
import { media } from 'sanity-plugin-media'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

const config = defineConfig({
  projectId,
  dataset,
  title: 'Portfolio',
  basePath: '/studio',
  useCdn: false,
  schema: { types: schemas },
  plugins: [
    deskTool(),
    visionTool(),
    media(),
    codeInput({
      codeModes: [
        {
          name: 'cpp',
          loader: () => import('@codemirror/lang-cpp').then(({ cpp }) => cpp()),
        },
      ],
    }),
  ],
})

export default config
