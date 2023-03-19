import { ReactNode } from 'react';
import * as Styles from './styles.css';

type Props = {
  children: ReactNode;
};

const Header = ({ children }: Props) => (
  <header className={Styles.header}>
    {children}
  </header>
);

export default Header;
