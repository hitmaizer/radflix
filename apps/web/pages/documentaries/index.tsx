import React, { useEffect } from 'react';

import Header from '@components/Header';
import ResultsDocs from '@components/ResultsDocs';
import { GetStaticProps } from 'next';
import { useSession } from 'next-auth/react';
import { useSelector, useDispatch } from 'react-redux';
import { setBmxDocs } from 'src/redux/bmxDocs';
import { setDocs } from 'src/redux/docs';
import { setLoading } from 'src/redux/loading';
import { setSkateDocs } from 'src/redux/skateDocs';
import { setSnowDocs } from 'src/redux/snowDocs';
import { RootState } from 'src/redux/store';
import { setSurfDocs } from 'src/redux/surfDocs';

import { Browse, DocBanner, Row } from '@components';
import { Loading, Skeleton, Stack } from '@ui';

const index = ({ allDocs, skateDocs, snowDocs, surfDocs, bmxDocs }: any) => {
  const { data: session } = useSession();
  const docs = useSelector((state: RootState) => state.docsData.docs);
  const filteredData = useSelector(
    (state: RootState) => state.filteredData.filter
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(setDocs(allDocs));
    dispatch(setSkateDocs(skateDocs));
    dispatch(setSnowDocs(snowDocs));
    dispatch(setSurfDocs(surfDocs));
    dispatch(setBmxDocs(bmxDocs));
    dispatch(setLoading(false));
  }, [allDocs]);

  if (typeof window === 'undefined') return null;

  if (session) {
    return (
      <>
        <Browse>
          <Header filteredData={docs} />
          {filteredData.length !== 0 && (
            <ResultsDocs data={filteredData} square path="/docs" />
          )}
          {filteredData.length === 0 && (
            <>
              <DocBanner path="docs" docs={allDocs} />
              <Stack display="flex" vertical gridGap="40px">
                <Row
                  title="Skateboarding Documentaries"
                  store={skateDocs}
                  square
                  path="docs"
                />
                <Row
                  title="Surf Documentaries"
                  store={surfDocs}
                  square
                  path="docs"
                />
                <Row
                  title="BMX Documentaries"
                  store={bmxDocs}
                  square
                  path="docs"
                />
                <Row
                  title="Snowboard Documentaries"
                  store={snowDocs}
                  square
                  path="docs"
                />
              </Stack>
            </>
          )}
        </Browse>
      </>
    );
  }
  return (
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
      </Loading>
    </Browse>
  );
};

export default index;

export const getStaticProps: GetStaticProps = async () => {
  const request1 = await fetch(
    'https://radflix-cms.herokuapp.com/api/all-docs?populate=*'
  );
  const allDocs = await request1.json();
  const request2 = await fetch(
    'https://radflix-cms.herokuapp.com/api/skate-docs?populate=*'
  );
  const skateDocs = await request2.json();
  const request3 = await fetch(
    'https://radflix-cms.herokuapp.com/api/surf-docs?populate=*'
  );
  const surfDocs = await request3.json();
  const request4 = await fetch(
    'https://radflix-cms.herokuapp.com/api/bmx-docs?populate=*'
  );
  const bmxDocs = await request4.json();
  const request5 = await fetch(
    'https://radflix-cms.herokuapp.com/api/snowboard-docs?populate=*'
  );
  const snowDocs = await request5.json();

  return {
    props: {
      allDocs: allDocs.data,
      skateDocs: skateDocs.data,
      surfDocs: surfDocs.data,
      bmxDocs: bmxDocs.data,
      snowDocs: snowDocs.data,
    },
    revalidate: 43200,
  };
};
