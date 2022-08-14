/// <reference types="@astrojs/image/client" />
interface ImportMetaEnv {
	MODE: "production" | "development";
	PROD: boolean;
	DEV: boolean;
	PUBLIC_SPOTIFY_API_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
