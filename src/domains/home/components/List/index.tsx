import useGetList from '../../hooks/useGetList';
import ListItem from '../ListItem';

const List = () => {
  const { data, isLoading } = useGetList();

  if (isLoading) {
    return null;
  }

  return (
    <ul>
      {
        data.map((it) => (
          <li key={it.id}>
            <ListItem item={it} />
          </li>
        ))
      }
    </ul>
  );
};

export default List;
