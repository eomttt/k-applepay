import Header from 'components/Header';
import { ReactNode } from 'react';
import { container, content } from './styles.css';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <Header>
      Header
    </Header>
    <section className={container}>
      <div className={content}>
        {children}
      </div>
    </section>
  </>
);

export default Layout;
