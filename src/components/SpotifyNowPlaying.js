import { css, html, LitElement } from "lit";

/**
 * @typedef SpotifyAttribute
 * @property {string} album
 * @property {string} albumImageURL
 * @property {string} artist
 * @property {boolean} isPlaying
 * @property {string} songURL
 * @property {string} title
 */

export class SpotifyNowPlaying extends LitElement {
	static properties = {
		spotify: { type: Object },
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
		/**
		 * @type {SpotifyAttribute}
		 */
		this.spotify = {};
	}
	connectedCallback() {
		super.connectedCallback();
	}

	render() {
		if (this.spotify.isPlaying) {
			return html`
				<div>
					<p>Now Playing in Spotify:</p>
					<div>
						<img src="${this.spotify.albumImageURL}" width="100" height="100" />
					</div>
					<div>
						<a .href="${this.spotify.songURL}"
							>${this.spotify.title} by ${this.nowPlaying.artist} from the album
							${this.spotify.album}</a
						>
					</div>
				</div>
			`;
		} else {
			return html` <div>
				<p>There aren't any song that are being played at spotify as of this moment!</p>
			</div>`;
		}
	}
}

customElements.define("spotify-now-playing", SpotifyNowPlaying);
