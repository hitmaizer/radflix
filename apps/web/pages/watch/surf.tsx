import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from 'src/redux/loading';
import { RootState } from 'src/redux/store';

import { BackBtn, Browse } from '@components';
import { Loading, Player, Skeleton, Stack } from '@ui';

const YOUTUBE_PLAYLIST_ITEMS_API =
  'https://www.googleapis.com/youtube/v3/playlistItems';

const skate = ({ data }) => {
  const [randomVideo, setRandomVideo] = useState();
  const loading = useSelector((state: RootState) => state.loading.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    const random = Math.floor(Math.random() * data.items.length);
    setRandomVideo(data.items[random].snippet.resourceId.videoId);
    dispatch(setLoading(false));
  }, []);

  return (
    <>
      {loading && (
        <>
          <Browse>
            <Loading
              display="flex"
              flexDirection="column"
              alignItems="center"
              ml={10}
            >
              <Skeleton heading />
              <Stack display="flex" gridGap="16px">
                <Skeleton card />
                <Skeleton card />
                <Skeleton card />
                <Skeleton card />
                <Skeleton card />
                <Skeleton card />
              </Stack>
              <Skeleton heading />
              <Stack display="flex" gridGap="16px">
                <Skeleton card />
                <Skeleton card />
                <Skeleton card />
                <Skeleton card />
                <Skeleton card />
                <Skeleton card />
              </Stack>
            </Loading>
          </Browse>
        </>
      )}
      <Stack>
        <Player vidSrc={randomVideo} />
        <BackBtn />
      </Stack>
    </>
  );
};

export default skate;

export async function getServerSideProps() {
  const rest = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?key=${process.env.YOUTUBE_API_KEY}&part=snippet&playlistId=PLoBDj3gE6uCCIFsbEZRHcQThTQp9iTkvB&maxResults=50`
  );
  const data = await rest.json();
  return {
    props: {
      data,
    },
  };
}
