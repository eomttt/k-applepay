import Layout from 'components/Layout';
import { Header, List } from 'domains/home';

export default function HomePage() {
  return (
    <Layout headerContent={<Header />}>
      <List />
    </Layout>
  );
}
