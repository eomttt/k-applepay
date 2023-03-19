import Header from 'components/Header';
import { ReactNode } from 'react';
import { container, content, headerTitle } from './styles.css';

type Props = {
  headerContent?: ReactNode;
  children: ReactNode;
};

const Layout = ({ headerContent, children }: Props) => (
  <>
    <Header>
      {headerContent ? (typeof headerContent === 'string' ? (<p className={headerTitle}>{headerContent}</p>) : headerContent) : <p className={headerTitle}>K-ApplePay</p>}
    </Header>
    <section className={container}>
      <div className={content}>
        {children}
      </div>
    </section>
  </>
);

export default Layout;
