import { MealHistoryType } from "../../types/meal.type";
import styles from "./style.module.scss";

interface MealHistoryCardProps {
  item: MealHistoryType;
}

const MealHistoryCard = ({ item }: MealHistoryCardProps) => {
  return (
    <div className="col-md-3 col-6">
      <div className={styles.imageWrapper}>
        <img src={item.image} alt={item.type} />
        <div className={styles.dateWrapper}>
          <span className={`${styles.date} mr-2`}>{item.datedOn}</span>
          <span className={styles.type}>{item.type}</span>
        </div>
      </div>
    </div>
  );
};

export default MealHistoryCard; 