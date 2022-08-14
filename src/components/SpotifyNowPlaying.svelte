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

<div>
	<p>Now Playing in Spotify:</p>
	{#if data.isPlaying}
		<div>
			<img src={data.albumImageURL} width="100" height="100" alt={data.album} />
		</div>
		<div>
			<a href={data.songURL}>
				{data.title} by {data.artist} from the album {data.album}
			</a>
		</div>
	{:else}
		<p>None</p>
	{/if}
</div>
