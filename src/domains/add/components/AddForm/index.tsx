import useGetLocation from 'domains/add/hooks/useGetLocation';
import { CreateData, RestrauntData } from 'domains/add/models';
import {
  useEffect, useMemo, useRef, useState,
} from 'react';
import * as Styles from './styles.css';

const AddForm = () => {
  const [formData, setFormData] = useState<CreateData>({
    title: '',
    description: '',
  });
  const [mapUrl, setMapUrl] = useState('');

  const mapElement = useRegisterMap(formData.location ? {
    lat: formData.location.y,
    lng: formData.location.x,
  } : undefined);

  const isFilledMap = useMemo(() => !!mapUrl && !!formData.location, [formData.location, mapUrl]);

  const getLocation = useGetLocation({
    onSuccess: (data: RestrauntData) => {
      setFormData((prev) => ({
        ...prev,
        id: data.id,
        title: data.name,
        description: data.address,
        location: {
          x: data.x,
          y: data.y,
        },
      }));
    },
  });

  const handleClearMap = () => {
    setMapUrl('');
    setFormData((prev) => ({
      ...prev,
      location: undefined,
    }));

    if (mapElement.current) {
      mapElement.current.style.height = '0px';
    }
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      console.log('submit', formData);
    }}
    >
      <h5 className={Styles.headTitle}>
        * 지도 url 을 입력하면 기본적인 정보가 자동으로 채워집니다.
      </h5>
      <div className={Styles.section}>
        <span className={Styles.label}>
          제목
        </span>
        <input
          className={Styles.input}
          value={formData.title}
          placeholder="제목을 입력해주세요"
          onChange={(e) => setFormData((prev) => ({
            ...prev,
            title: e.target.value,
          }))}
        />
      </div>
      <div className={Styles.section}>
        <span className={Styles.label}>
          설명
        </span>
        <textarea
          className={Styles.textarea}
          value={formData.description}
          placeholder="설명을 입력해주세요"
          onChange={(e) => setFormData((prev) => ({
            ...prev,
            description: e.target.value,
          }))}
        />
      </div>
      <div className={Styles.section}>
        <span className={Styles.label}>
          지도 URL
        </span>
        <input
          disabled={isFilledMap}
          className={Styles.mapUrlInput}
          value={mapUrl}
          placeholder="지도 URL을 입력해주세요. (네이버 지도만 지원)"
          onChange={(e) => {
            setMapUrl(e.target.value);
          }}
        />
        <button
          type="button"
          className={Styles.mapUploadButton[mapUrl ? 'show' : 'hide']}
          onClick={(e) => {
            e.preventDefault();
            if (isFilledMap) {
              handleClearMap();
            } else {
              getLocation(mapUrl);
            }
          }}
        >
          {isFilledMap ? '다시 업로드' : '업로드'}
        </button>
        <div
          ref={mapElement}
          className={Styles.mapContainer}
        />
      </div>
      <div className={Styles.buttonSection}>
        <button type="submit" className={Styles.submitButton}>
          등록하기
        </button>
      </div>

    </form>
  );
};

const useRegisterMap = (params?: {
  lat: number;
  lng: number;
}) => {
  const mapElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver || !params) {
      return;
    }

    mapElement.current.style.height = '400px';

    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
    const location = new naver.maps.LatLng(params.lat, params.lng);
    const map = new naver.maps.Map(mapElement.current, {
      center: location,
      zoom: 17,
      zoomControl: true,
    });
    // eslint-disable-next-line no-new
    new naver.maps.Marker({
      position: location,
      map,
    });
  }, [params]);

  return mapElement;
};

export default AddForm;
