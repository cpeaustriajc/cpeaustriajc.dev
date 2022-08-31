/// <reference types="@astrojs/image/client" />

interface ImportMetaEnv {
	PUBLIC_SPOTIFY_API_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
