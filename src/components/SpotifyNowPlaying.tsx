import type { FunctionComponent } from "react";

interface Data {
	data: {
		albumImageURL: string;
		songURL: string;
		title: string;
		artist: string;
		album: string;
		isPlaying: boolean;
	};
}

export const SpotifyNowPlaying: FunctionComponent<Data> = ({ data }) => {
	return (
		<div>
			<p>Now Playing in Spotify:</p>
			{data.isPlaying ? (
				<>
					<div>
						<img src={data.albumImageURL} width="100" height="100" />
					</div>
					<div>
						<a href={data.songURL}>
							{data.title} by {data.artist} from the album {data.album}
						</a>
					</div>
				</>
			) : (
				<p>None</p>
			)}
		</div>
	);
};
