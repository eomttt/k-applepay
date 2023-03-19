import Layout from 'components/Layout';
import { Detail, useGetDetail } from 'domains/detail';

import { useRouter } from 'next/router';

export default function DetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useGetDetail(id as string);

  if (isLoading) {
    return (
      <Layout headerContent="Loading...">
        <div />
      </Layout>
    );
  }

  return (
    <Layout headerContent={data.title}>
      <Detail data={data} />
    </Layout>
  );
}
