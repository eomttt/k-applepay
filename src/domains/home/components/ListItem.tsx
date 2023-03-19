import Link from 'next/link';
import { ListItemData } from '../models';

type Props = {
  item: ListItemData;
};

const ListItem = ({ item }: Props) => (
  <Link href={`/details/${item.id}`}>
    {item.title}
  </Link>
);

export default ListItem;
