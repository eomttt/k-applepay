import Header from 'components/Header';
import { ReactNode } from 'react';
import { container, content } from './styles.css';

type Props = {
  headerContent?: ReactNode;
  children: ReactNode;
};

const Layout = ({ headerContent, children }: Props) => (
  <>
    <Header>
      {headerContent || 'Header'}
    </Header>
    <section className={container}>
      <div className={content}>
        {children}
      </div>
    </section>
  </>
);

export default Layout;
