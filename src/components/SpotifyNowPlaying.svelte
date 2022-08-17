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
			<p>
				Now Playing | Powered by <span class="spotify">Spotify</span>
			</p>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				style="background: transparent;"
				width="24px"
				height="24px"
				viewBox="0 0 100 100"
				preserveAspectRatio="xMidYMid"
			>
				<g transform="rotate(180 50 50)">
					<rect
						x="6.111111111111111"
						y="12.5"
						width="10"
						height="40"
						fill="#1ed760"
						ry="4"
					>
						<animate
							attributeName="height"
							calcMode="spline"
							values="50;75;10;50"
							dur="1s"
							keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
							repeatCount="indefinite"
							begin="-0.75s"
						/>
					</rect>
					<rect
						x="17.22222222222222"
						y="12.5"
						width="10"
						height="40"
						fill="#1ed760"
						ry="4"
					>
						<animate
							attributeName="height"
							calcMode="spline"
							values="50;75;10;50"
							dur="1s"
							keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
							repeatCount="indefinite"
							begin="-0.875s"
						/>
					</rect>
					<rect
						x="28.333333333333336"
						y="12.5"
						width="10"
						height="40"
						fill="#1ed760"
						ry="4"
					>
						<animate
							attributeName="height"
							calcMode="spline"
							values="50;75;10;50"
							dur="1s"
							keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
							repeatCount="indefinite"
							begin="-0.25s"
						/>
					</rect>
					<rect
						x="39.44444444444444"
						y="12.5"
						width="10"
						height="40"
						fill="#1ed760"
						ry="4"
					>
						<animate
							attributeName="height"
							calcMode="spline"
							values="50;75;10;50"
							dur="1s"
							keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
							repeatCount="indefinite"
							begin="-0.5s"
						/>
					</rect>
					<rect
						x="50.55555555555556"
						y="12.5"
						width="10"
						height="40"
						fill="#1ed760"
						ry="4"
					>
						<animate
							attributeName="height"
							calcMode="spline"
							values="50;75;10;50"
							dur="1s"
							keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
							repeatCount="indefinite"
							begin="-0.625s"
						/>
					</rect>
					<rect
						x="61.66666666666667"
						y="12.5"
						width="10"
						height="40"
						fill="#1ed760"
						ry="4"
					>
						<animate
							attributeName="height"
							calcMode="spline"
							values="50;75;10;50"
							dur="1s"
							keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
							repeatCount="indefinite"
							begin="0s"
						/>
					</rect>
					<rect
						x="72.77777777777777"
						y="12.5"
						width="10"
						height="40"
						fill="#1ed760"
						ry="4"
					>
						<animate
							attributeName="height"
							calcMode="spline"
							values="50;75;10;50"
							dur="1s"
							keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
							repeatCount="indefinite"
							begin="-0.375s"
						/>
					</rect>
					<rect
						x="83.88888888888889"
						y="12.5"
						width="10"
						height="40"
						fill="#1ed760"
						ry="4"
					>
						<animate
							attributeName="height"
							calcMode="spline"
							values="50;75;10;50"
							dur="1s"
							keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
							repeatCount="indefinite"
							begin="-0.125s"
						/>
					</rect>
				</g>
			</svg>
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

	@media screen and (min-width: 768px) {
		.container {
			padding: 2rem;
		}
		.container .now-playing p {
			font-size: 1.25rem;
		}
	}
</style>
