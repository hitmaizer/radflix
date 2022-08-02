import React, { useEffect, useState } from 'react';

import { BackBtn } from '@components';
import { Player, Stack } from '@ui';

const YOUTUBE_PLAYLIST_ITEMS_API =
  'https://www.googleapis.com/youtube/v3/playlistItems';

const skate = ({ data }) => {
  const [randomVideo, setRandomVideo] = useState();

  useEffect(() => {
    const random = Math.floor(Math.random() * data.items.length);
    setRandomVideo(data.items[random].snippet.resourceId.videoId);
  }, []);

  return (
    <Stack>
      <Player vidSrc={randomVideo} />
      <BackBtn />
    </Stack>
  );
};

export default skate;

export async function getServerSideProps() {
  const rest = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?key=${process.env.YOUTUBE_API_KEY}&part=snippet&playlistId=PLoBDj3gE6uCCsUTLKCqPBmqHdBM4ebjUP&maxResults=50`
  );
  const data = await rest.json();
  return {
    props: {
      data,
    },
  };
}
