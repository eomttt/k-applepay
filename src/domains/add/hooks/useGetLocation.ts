import { useCallback } from 'react';
import { useMutation } from 'react-query';
import { request } from '../../../utils/request';
import { RestrauntData } from '../models';

const useGetLocation = ({ onSuccess }: {
  onSuccess?: (data: RestrauntData) => void;
}) => {
  const { mutate: mutateRestrauntId } = useMutation((url: string) => request.get <{ id: string }>(`/api/restraunt-id?url=${url}`));
  const { mutate: mutateRestrauntLocation } = useMutation((id: string) => request.get<RestrauntData>(`/api/restraunt-location?id=${id}`));

  const getLocation = useCallback(async (url: string) => {
    mutateRestrauntId(url, {
      onSuccess: ({ data }) => {
        mutateRestrauntLocation(data.id, {
          onSuccess: (result) => {
            onSuccess?.(result.data);
          },
        });
      },
    });
  }, [mutateRestrauntId, mutateRestrauntLocation, onSuccess]);

  return getLocation;
};

export default useGetLocation;
