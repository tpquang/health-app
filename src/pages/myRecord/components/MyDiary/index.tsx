import styles from "./style.module.scss";
import { DiaryType } from "../../../../types/diary.type";
import Button from "../../../../components/Button/Button";
import DiaryItem from "../../../../components/DiaryItem";

interface MyDiaryProps {
  data: DiaryType[];
  onLoadMore: () => void;
  hasMore: boolean;
}

const MyDiary = ({ data, onLoadMore, hasMore }: MyDiaryProps) => {
  return (
    <div className={styles.diaryWrapper}>
      <h2 className="fs-22 fw-400 color-dark-500">MY DIARY</h2>
      <div className={`row mb-8`}>
        {data.map((item: DiaryType) => (
          <DiaryItem key={item.id} item={item} />
        ))}
      </div>
      {hasMore && data.length >= 8 && (
        <div className="flex justify-center">
          <Button variant="gradient" size="large" onClick={onLoadMore}>
            記録をもっと見る
          </Button>
        </div>
      )}
    </div>
  );
};

export default MyDiary;
