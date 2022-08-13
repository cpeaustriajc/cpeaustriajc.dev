import { css, html, LitElement } from "lit";

export class SpotifyNowPlaying extends LitElement {
	static properties = {
		nowPlaying: { type: Object },
	};

	static styles = css`
		:host a {
			color: rgb(30 64 175);
			text-decoration: underline;
		}

		:host a:visited {
			color: rgb(107 33 168);
		}

		@media screen and (prefers-color-scheme: dark) {
			:host a {
				color: rgb(147 197 253);
			}

			:host a:visited {
				color: rgb(216 180 254);
			}
		}
	`;

	constructor() {
		super();
		this.nowPlaying = {};
	}
	connectedCallback() {
		super.connectedCallback();
	}

	render() {
		return html`
			<div>
				<p>Now Playing in Spotify:</p>
				<div>
					<img src="${this.nowPlaying.albumImageURL}" width="100" height="100" />
				</div>
				<div>
					<a .href="${this.nowPlaying.songURL}"
						>${this.nowPlaying.title} by ${this.nowPlaying.artist} from the album
						${this.nowPlaying.album}</a
					>
				</div>
			</div>
		`;
	}
}

customElements.define("spotify-now-playing", SpotifyNowPlaying);
