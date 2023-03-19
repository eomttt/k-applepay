import { ListItemData } from 'domains/home/models';
import { useCallback } from 'react';
import { CreateData } from '../models';

const useAddItem = () => {
  // TODO: API call
  const addItem = useCallback((newItem: CreateData) => {
    const items = localStorage.getItem('kapplepay-items');
    const data = (items ? JSON.parse(items) : []) as ListItemData[];
    const id = data.length ? data[data.length - 1].id + 1 : 1;
    const item = {
      ...newItem,
      id,
    };
    localStorage.setItem('kapplepay-items', JSON.stringify([...data, item]));
  }, []);

  return addItem;
};

export default useAddItem;
