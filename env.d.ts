/// <reference types="astro/client" />

interface ImportMetaEnv {
	PUBLIC_SPOTIFY_API_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
