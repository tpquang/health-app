import { useEffect, useState } from "react";
import { topPageService } from "../../services/api/topPage.service";
import styles from "./style.module.scss";
import { BodyRecord as BodyRecordType } from "../../types/bodyRecord.type";
import { Meal } from "../../types/meal.type";
import { Achievement } from "../../types/achievement.type";

const TopPage = () => {
  const [historyData, setHistoryData] = useState<Meal[]>([]);
  const [achievement, setAchievement] = useState<Achievement>({date: new Date().toISOString(), achievement: 0});
  const [bodyRecord, setBodyRecord] = useState<BodyRecordType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetchInitialData();
    setLoading(false);
  }, []);

  const fetchInitialData = async () => {
    try {
      setLoading(true);
      const [historyData, achievementData, bodyData] = await Promise.all([
        topPageService.getMeal({ page: 1 }),
        topPageService.getAchievement(),
        topPageService.getBodyRecord({ timeType: "month" }),
      ]);

      setHistoryData(historyData);
      setAchievement(achievementData.data);
      setBodyRecord(bodyData.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles.topPage}>
      {/* <div className={`${styles.chartComponent} row`}>
        <div className={`${styles.achievement} col-5`}>
          <Achievement data={achievement} />
        </div>
        <div className={`${styles.bodyRecord} col-7`}>
          <BodyRecord data={bodyRecord} />
        </div>
      </div> */}
      {/* <MealHistory
        initialData={meal}
        onLoadMore={(newData) => setMeal((prev) => [...prev, ...newData])}
      /> */}
    </div>
  );
};

export default TopPage;
