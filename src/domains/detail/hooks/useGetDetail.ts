import { detailItem } from 'mocks/index';

const useGetDetail = (id: string) => ({ data: detailItem(id) });

export default useGetDetail;
