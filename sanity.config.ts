import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

const config = defineConfig({
  projectId,
  dataset,
  title: 'Portfolio',
  basePath: '/studio',
  plugins: [deskTool()],
});

export default config;
