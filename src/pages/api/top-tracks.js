import { getTopTracks } from '../../lib/spotify';

export default async (_, res) => {
  const response = await getTopTracks();
  const { items } = await response.json();

  // console.log('itemsは？', items[2].album.name);

  const tracks = items.slice(0, 10).map((track) => ({
    artist: track.artists.map((_artist) => _artist.name).join(', '),
    songUrl: track.external_urls.spotify,
    albumTitle: track.album.name,
    title: track.name,
    images: track.album.images[0].url,
  }));

  return res.status(200).json({ tracks });
};
