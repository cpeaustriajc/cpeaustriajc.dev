import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import schemas from './sanity/schemas';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

const config = defineConfig({
  projectId,
  dataset,
  title: 'Portfolio',
  basePath: '/studio',
  useCdn: true,
  schema: { types: schemas },
  plugins: [deskTool(), visionTool()],
});

export default config;
