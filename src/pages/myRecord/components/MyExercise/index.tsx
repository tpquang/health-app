import styles from "./style.module.scss";

const MyExercise = (props: { data: any }) => {
  console.log(props.data);
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
        {props.data.map((item: any) => (
          <div className={`${styles.exerciseItem} col-6`} key={item.id}>
            <div>
              <p className="fs-12">{item.activity}</p>
              <p className="fs-12">{item.energyConsumption}</p>
            </div>
            <div className={styles.exerciseItemTime}>
              <p className="fs-12">{item.activityTime}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyExercise;
