import Layout from 'components/Layout';
import Detail from 'domains/detail/components/Detail';
import { useRouter } from 'next/router';

export default function DetailPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <Detail id={id as string} />
    </Layout>
  );
}
