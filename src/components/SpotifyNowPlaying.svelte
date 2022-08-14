<script lang="ts">
	interface Data {
		albumImageURL: string;
		songURL: string;
		title: string;
		artist: string;
		album: string;
		isPlaying: boolean;
	}

	export let data: Data;
</script>

{#if data.isPlaying}
	<a href={data.songURL} class="container">
		<div class="now-playing">
			<p class="text-sm">
				Now Playing | Powered by <span class="spotify">Spotify</span>
			</p>
			<span class="music-bars">
				<span class="music-bar" />
				<span class="music-bar" />
				<span class="music-bar" />
			</span>
		</div>
		<div class="album-title">
			<div>
				<img src={data.albumImageURL} width="100" height="100" alt={data.album} />
			</div>
			<div>
				<p>{data.title}</p>
				<p>{data.artist}</p>
			</div>
		</div>
	</a>
{:else}
	<div class="container">
		<div class="now-playing">
			<p>
				Now Playing | Powered by <span class="spotify">Spotify<sup>&reg;</sup></span>
			</p>
		</div>
		<p>None</p>
	</div>
{/if}

<style>
	@keyframes bounce {
		10% {
			transform: scaleY(0.3); /* start by scaling to 30% */
		}

		30% {
			transform: scaleY(1); /* scale up to 100% */
		}

		60% {
			transform: scaleY(0.5); /* scale down to 50% */
		}

		80% {
			transform: scaleY(0.75); /* scale up to 75% */
		}

		100% {
			transform: scaleY(0.6); /* scale down to 60% */
		}
	}
	.container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		background-color: black;
		border-radius: 0.25rem;
		padding: 1rem;
		width: fit-content;
	}

	.container .album-title {
		display: flex;
		align-items: center;
		gap: 2rem;
	}
	.container .now-playing {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		flex-grow: 1;
	}

	.container .now-playing p {
		font-size: 0.8rem;
	}

	.spotify {
		color: #1ed760;
		font-weight: bold;
	}

	.music-bars {
		position: relative;
		display: flex;
		justify-content: space-evenly;
		width: 26px;
		height: 26px;
	}

	.music-bar {
		width: 4px;
		height: 100%;
		background-color: #1ed760;
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
		transform-origin: bottom;
		animation: bounce 2.2s ease infinite alternate;
		content: "";
	}

	.music-bar:nth-of-type(2) {
		animation-delay: -2.2s; /* Start at the end of animation */
	}

	.music-bar:nth-of-type(3) {
		animation-delay: -3.7s; /* Start mid-way of return of animation */
	}

	@media screen and (min-width: 768px) {
		.container {
			padding: 2rem;
		}
		.container .now-playing p {
			font-size: 1.25rem;
		}
	}
</style>
