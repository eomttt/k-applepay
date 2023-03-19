import { DetailData } from 'domains/detail/models';
import { ListItemData } from 'domains/home/models';

export const listItems: ListItemData[] = [
  {
    id: '1',
    title: '스타벅스 강남R점',
  },
  {
    id: '2',
    title: '아웃백 - 강남역 2번출구',
  },
];

export const detailItem = (id: string): DetailData => {
  const listItem = listItems.find((item) => item.id === id);

  return {
    id: listItem?.id || '',
    title: listItem?.title || '',
    description: 'Description 1',
    location: {
      x: 37.497723, y: 127.0283855,
    },
  };
};
