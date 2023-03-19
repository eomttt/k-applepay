import { ListItemData } from 'domains/home/models';
import { useState, useEffect } from 'react';
import { DetailData } from '../models';

const useGetDetail = (id: string) => {
  // TODO: API call
  const [result, setResult] = useState<{
    isLoading: true;
    data: undefined;
  } | {
    isLoading: false;
    data: DetailData;
  }>({
    isLoading: true,
    data: undefined,
  });

  useEffect(() => {
    const items = localStorage.getItem('kapplepay-items');

    if (items) {
      const data = JSON.parse(items) as ListItemData[];
      const item = data.find((it) => Number(it.id) === Number(id));
      if (item) {
        setResult({
          isLoading: false,
          data: item as unknown as DetailData,
        });
      }
    }
  }, [id]);

  return result;
};

export default useGetDetail;
