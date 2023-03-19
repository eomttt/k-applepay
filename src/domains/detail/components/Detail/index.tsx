import { useEffect, useRef } from 'react';
import { DetailData } from '../../models';
import * as Styles from './styles.css';

const mapOptions: naver.maps.MapOptions = {
  zoom: 17,
  zoomControl: true,
};

type Props = {
  data: DetailData;
};

const Detail = ({ data }: Props) => {
  const { x: lat, y: lng } = data.location;
  const mapElement = useRegisterMap({
    lat,
    lng,
  });

  return (
    <div>
      <div
        ref={mapElement}
        className={Styles.mapContainer}
      />
    </div>
  );
};

const useRegisterMap = ({ lat, lng }: {
  lat: number;
  lng: number;
}) => {
  const mapElement = useRef(null);

  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) {
      return;
    }

    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
    const location = new naver.maps.LatLng(lat, lng);
    const map = new naver.maps.Map(mapElement.current, {
      center: location,
      ...mapOptions,
    });
    // eslint-disable-next-line no-new
    new naver.maps.Marker({
      position: location,
      map,
    });
  }, [lat, lng]);

  return mapElement;
};

export default Detail;
