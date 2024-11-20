import { ExerciseType } from "../../types/exercise.type";
import styles from "./style.module.scss";

interface ExerciseItemProps {
  item: ExerciseType;
}

const ExerciseItem = ({ item }: ExerciseItemProps) => {
  return (
    <div className={`${styles.exerciseItem} col-md-6 col-12`} key={item.id}>
      <div className={styles.exerciseItemWrapper}>
        <div className={styles.exerciseItemInfo}>
          <p className="fs-15 font-noto color-light">{item.activity}</p>
          <p className="fs-15 color-primary-300">{item.energyConsumption}</p>
        </div>
        <div className={styles.exerciseItemTime}>
          <p className="fs-18 color-primary-300">{item.activityTime}</p>
        </div>
      </div>
    </div>
  );
};

export default ExerciseItem;
