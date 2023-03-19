import Layout from 'components/Layout';
import { Detail, useGetDetail } from 'domains/detail';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function DetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useGetDetail(id as string);

  return (
    <>
      <Head>
        <script type="text/javascript" src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_KEY}`} />
      </Head>
      <Layout headerContent={data.title}>
        <Detail data={data} />
      </Layout>
    </>
  );
}
