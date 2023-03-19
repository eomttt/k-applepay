import useGetDetail from '../hooks/useGetDetail';

type Props = {
  id: string;
};

const Detail = ({ id }: Props) => {
  const { data } = useGetDetail(id);

  return (
    <div>
      {data.title}
    </div>
  );
};

export default Detail;
