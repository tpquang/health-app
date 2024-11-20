import styles from "./style.module.scss";
import { ExerciseType } from "../../../../types/exercise.type";
import ExerciseItem from "../../../../components/ExerciseItem";

const MyExercise = (props: { data: ExerciseType[] }) => {
  return (
    <div className={styles.exerciseWrapper}>
      <div className={`${styles.exerciseTitle} flex color-light`}>
        <div className={styles.exerciseTitleTextWrapper}>
          <h2 className={`${styles.exerciseTitleText} fs-15 fw-400`}>
            MY <br /> EXERCISE
          </h2>
        </div>
        <p className="fs-22">2021.05.21</p>
      </div>
      <div className={`${styles.exerciseList} row`}>
        {props.data.map((item: ExerciseType) => (
          <ExerciseItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MyExercise;
