import { CreateData } from 'domains/add/models';
import { useState } from 'react';
import * as Styles from './styles.css';

const AddForm = () => {
  const [formData, setFormData] = useState<CreateData>({
    title: '',
    description: '',
    mapUrl: '',
  });

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      console.log('submit', formData);
    }}
    >
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
          지도 URL
        </span>
        <input
          className={Styles.input}
          value={formData.mapUrl}
          placeholder="지도 URL을 입력해주세요"
          onChange={(e) => setFormData((prev) => ({
            ...prev,
            mapUrl: e.target.value,
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
      <div className={Styles.buttonSection}>
        <button type="submit" className={Styles.submitButton}>
          등록하기
        </button>
      </div>

    </form>
  );
};

export default AddForm;
