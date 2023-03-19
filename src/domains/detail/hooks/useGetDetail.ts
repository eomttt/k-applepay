import { DetailData } from '../models';

const useGetDetail = (id: string) => ({ data: mockDetailData });

const mockDetailData: DetailData = {
  id: '1',
  title: 'Item 1',
};

export default useGetDetail;
