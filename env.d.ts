/// <reference types="@astrojs/image/client" />
interface ImportMetaEnv {
	MODE: "production" | "development";
	PROD: boolean;
	DEV: boolean;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
