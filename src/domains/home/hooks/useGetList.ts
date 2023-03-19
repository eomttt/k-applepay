import { ListItemData } from '../models';

const useGetList = () => ({
  data: mockListItemData,
});

const mockListItemData: ListItemData[] = [
  {
    id: '1',
    title: 'Item 1',
  },
  {
    id: '2',
    title: 'Item 2',
  },
];

export default useGetList;
