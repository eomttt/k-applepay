import Link from 'next/link';
import * as Styles from './styles.css';

const Header = () => (
  <div className={Styles.container}>
    <p className={Styles.title}>K-ApplePay</p>
    <button type="button" className={Styles.addButton}>
      <Link href="/add">
        추가하기
      </Link>
    </button>
  </div>
);

export default Header;
