import { Metadata } from 'next';
import { Studio } from './Studio';

import { metadata as studioMetadata } from 'next-sanity/studio/metadata';

export const metadata: Metadata = {
  ...studioMetadata,
  viewport: `${studioMetadata.viewport}, interactive-widget=resizes-content`,
};

export default function StudioPage() {
  return <Studio />;
}
