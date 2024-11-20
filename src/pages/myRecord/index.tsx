import { useRef, useState, useEffect } from "react";
import BodyRecordChart from "./components/BodyRecord";
import MyExercise from "./components/MyExercise";
import MyDiary from "./components/MyDiary";
import styles from "./style.module.scss";
import Button from "../../components/Button/Button";
import { myRecordService } from "../../services/api/myRecord.service";
import { BodyRecord as BodyRecordType } from "../../types/bodyRecord.type";
import { ExerciseType } from "../../types/exercise.type";
import { DiaryType } from "../../types/diary.type";
import { TimeTypeParams } from "../../types/common";

const MyRecord = () => {
  const bodyRecordRef = useRef<HTMLDivElement>(null);
  const myExerciseRef = useRef<HTMLDivElement>(null);
  const myDiaryRef = useRef<HTMLDivElement>(null);

  const [bodyRecords, setBodyRecords] = useState<BodyRecordType[]>([]);
  const [exercises, setExercises] = useState<ExerciseType[]>([]);
  const [diaries, setDiaries] = useState<DiaryType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [activeFilter, setActiveFilter] = useState<TimeTypeParams>({ timeType: "month" });

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setLoading(true);
        const [bodyData, exerciseData, diaryData] = await Promise.all([
          myRecordService.getBodyRecord({ timeType: "month" }),
          myRecordService.getExercise(),
          myRecordService.getDiary({ page: currentPage })
        ]);

        setBodyRecords(bodyData.data);
        setExercises(exerciseData.data);
        setDiaries(diaryData.data);
        setHasMore(true);
      } catch (error) {
        console.error('Error fetching initial data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  const handleLoadMore = async () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    const moreData = await myRecordService.getDiary({ page: nextPage });
    setDiaries([...diaries, ...moreData.data]);
    setHasMore(moreData.currentPage < moreData.totalPages);
  };

  const handleFilterChange = (filter: TimeTypeParams) => {
    setActiveFilter(filter);
    myRecordService.getBodyRecord({ timeType: filter.timeType }).then(data => {
      setBodyRecords(data.data);
    });
  };

  return (
    <>
      <section className={`${styles.buttonWrapper} py-14`}>
        <div className="container">
          <div className="flex gap-12 flex-wrap">
            <div
              className={styles.buttonScroll}
              onClick={() => scrollToSection(bodyRecordRef)}
            >
              <div className={styles.buttonScrollImage}>
                <img
                  className={styles.imageBackground}
                  src="/images/myrecord/MyRecommend-1.jpg"
                  alt="BodyRecord"
                />
                <div className={styles.overlay}></div>
                <h2 className="fs-25 color-primary-300 fw-400 uppercase">
                  BODY RECORD
                </h2>
                <div className={styles.bodyRecordDescription}>
                  <p className="fs-14 color-light">自分のカラダの記録</p>
                </div>
              </div>
            </div>
            <div
              className={styles.buttonScroll}
              onClick={() => scrollToSection(myExerciseRef)}
            >
              <div className={styles.buttonScrollImage}>
                <img
                  className={styles.imageBackground}
                  src="/images/myrecord/MyRecommend-2.jpg"
                  alt="MyExercise"
                />
                <div className={styles.overlay}></div>
                <h2 className="fs-25 color-primary-300 fw-400 uppercase">
                  MY EXERCISE
                </h2>
                <div className={styles.bodyRecordDescription}>
                  <p className="fs-14 color-light">自分のカラダの記録</p>
                </div>
              </div>
            </div>
            <div
              className={styles.buttonScroll}
              onClick={() => scrollToSection(myDiaryRef)}
            >
              <div className={styles.buttonScrollImage}>
                <img
                  className={styles.imageBackground}
                  src="/images/myrecord/MyRecommend-3.jpg"
                  alt="MyDiary"
                />
                <div className={styles.overlay}></div>
                <h2 className="fs-25 color-primary-300 fw-400 uppercase">MY DIARY</h2>
                <div className={styles.bodyRecordDescription}>
                  <p className="fs-14 color-light">自分のカラダの記録</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={bodyRecordRef} className="mb-14">
        <div className="container">
          <div className={`${styles.bodyRecordWrapper} bg-dark-500 px-6 py-4`}>
            <BodyRecordChart data={bodyRecords} onFilterChange={handleFilterChange} activeFilterDefault={activeFilter} />
          </div>
        </div>
      </section>

      <section ref={myExerciseRef} className="mb-14">
        <div className="container">
          <div className={`${styles.exerciseWrapper} bg-dark-500 px-6 py-4`}>
            <MyExercise data={exercises} />
          </div>
        </div>
      </section>

      <section ref={myDiaryRef} className="mb-14">
        <div className="container">
          <MyDiary 
            data={diaries} 
            onLoadMore={handleLoadMore}
            hasMore={hasMore} 
          />
        </div>
      </section>
    </>
  );
};
export default MyRecord;
 