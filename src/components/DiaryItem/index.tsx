import { DiaryType } from "../../types/diary.type";
import styles from "./style.module.scss";

interface DiaryItemProps {
  item: DiaryType;
}

const DiaryItem = ({ item }: DiaryItemProps) => {
  return (
    <div className={`col-md-3 col-6 ${styles.diaryWrapper}`}>
      <div className={styles.diaryItem}>
        <div className="mb-2">
          <p className="fs-18 fw-400 color-dark-500">{item.date}</p>
          <p className="fs-18 fw-400 color-dark-500">{item.time}</p>
        </div>
        <div className="mb-3">
          <p className="fs-12 fw-400 color-dark-500">{item.title}</p>
          <p className={`fs-12 fw-400 color-dark-500 ${styles.diaryItemDescription}`}>{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DiaryItem;
