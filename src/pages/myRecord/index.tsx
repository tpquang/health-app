import { myDiaryData } from "../../mocks/myRecords/data/myDiaryData";
import { myExerciseData } from "../../mocks/myRecords/data/myExerciseData";
import { bodyRecordsData } from "../../mocks/myRecords/data/bodyRecordsData";
import { useRef } from "react";
import BodyRecord from "./components/BodyRecord";
import MyExercise from "./components/MyExercise";
import MyDiary from "./components/MyDiary";
import styles from "./style.module.scss";
const MyRecord = () => {
  const bodyRecordRef = useRef<HTMLDivElement>(null);
  const myExerciseRef = useRef<HTMLDivElement>(null);
  const myDiaryRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className={`${styles.buttonWrapper} mb-14`}>
        <div onClick={() => scrollToSection(bodyRecordRef)}>BODY RECORD</div>
        <div onClick={() => scrollToSection(myExerciseRef)}>MY EXERCISE</div>
        <div onClick={() => scrollToSection(myDiaryRef)}>MY DIARY</div>
      </section>

      <section ref={bodyRecordRef} className="mb-14">
        <div className="container">
          <div className={`${styles.bodyRecordWrapper} bg-dark-500 px-6 py-4`}>
            <BodyRecord data={bodyRecordsData} />
          </div>
        </div>
      </section>

      <section ref={myExerciseRef} className="mb-14">
        <div className="container">
          <div className={`${styles.exerciseWrapper} bg-dark-500 px-6 py-4`}>
            <MyExercise data={myExerciseData} />
          </div>
        </div>
      </section>

      <section ref={myDiaryRef} className="mb-14">
        <div className="container">
          <MyDiary data={myDiaryData} />
        </div>
      </section>
    </>
  );
};

export default MyRecord;
