import Link from 'next/link';
import { ListItemData } from '../../models';
import * as Styles from './styles.css';

type Props = {
  item: ListItemData;
};

const ListItem = ({ item }: Props) => (
  <Link href={`/details/${item.id}`}>
    <div className={Styles.container}>
      <p>
        {item.title}
      </p>
    </div>
  </Link>
);

export default ListItem;
