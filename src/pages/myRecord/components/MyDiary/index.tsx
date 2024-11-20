import styles from "./style.module.scss";

const MyDiary = (props: { data: any }) => {
  return (
    <div className={styles.diaryWrapper}>
      <h2 className="fs-22 fw-400 color-dark-500">MY DIARY</h2>
      <div className={`${styles.diaryList} row`}>
        {props.data.map((item: any) => (
          <div className="col-3">
            <div className={styles.diaryItem}>
              <p className="fs-16 fw-400 color-dark-500">{item.createdOn}</p>
              <p className="fs-16 fw-400 color-dark-500">{item.createdOn}</p>
              <p className="fs-16 fw-400 color-dark-500">{item.title}</p>
              <p className="fs-16 fw-400 color-dark-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyDiary;
