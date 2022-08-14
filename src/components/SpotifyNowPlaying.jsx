export const SpotifyNowPlaying = ({ data }) => {
	return (
		<div>
		<p>Now Playing in Spotify:</p>
		<div>
			<img src={data.albumImageURL} width="100" height="100" />
		</div>
		<div>
			<a href={data.songURL}
				>{data.title} by {data.artist} from the album
				{data.album}</a
			>
		</div>
	</div>
	)
}
