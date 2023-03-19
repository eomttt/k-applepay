import Layout from 'components/Layout';
import { AddForm } from 'domains/add';
import Head from 'next/head';

export default function AddPage() {
  return (
    <>
      <Head>
        <script type="text/javascript" src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_KEY}`} />
      </Head>
      <Layout>
        <AddForm />
      </Layout>
    </>
  );
}
