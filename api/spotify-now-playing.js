import { getNowPlaying } from "../lib/spotify.js";

/**
 * credits: https://github.com/leerob/leerob.io/blob/main/pages/api/now-playing.ts
 *
 */
export default async function handler(req, res) {
	const response = await getNowPlaying();

	if (response.status === 204 || response.status > 400) {
		return new res.status(200).json({ isPlaying: false });
	}

	const song = await response.json();

	const isPlaying = song.is_playing;
	const title = song.item.name;
	const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
	const album = song.item.album.name;
	const albumImageURL = song.item.album.images[0].url;
	const songURL = song.item.external_urls.spotify;

	return res.status(200).json({
		album,
		albumImageURL,
		artist,
		isPlaying,
		songURL,
		title,
	});
}
