import { useEffect, useState } from "react";
import { topPageService } from "../../services/api/topPage.service";
import Achievement from "./components/Achievement";
import BodyRecord from "./components/BodyRecord";
import MealHistory from "./components/MealHistory";
import styles from "./style.module.scss";
import Button from "../../components/Button/Button";
import { mealData } from "../../mocks/topPage/data/mealData";
import { bodyRecordsData } from "../../mocks/topPage/data/bodyRecordsData";
import { achiverData } from "../../mocks/topPage/data/achiverData";

const TopPage = () => {
  const [meal, setMeal] = useState<any[]>([]);
  const [achievement, setAchievement] = useState<any>(null);
  const [bodyRecord, setBodyRecord] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetchInitialData();
    setLoading(false);
    setAchievement(achiverData);
    setBodyRecord(bodyRecordsData);
    setMeal(mealData);
  }, []);

  const fetchInitialData = async () => {
    try {
      setLoading(true);
      const [historyData, achievementData, bodyData] = await Promise.all([
        topPageService.getMeal({ page: 1 }),
        topPageService.getAchievement(),
        topPageService.getBodyRecord(),
      ]);

      setMeal(mealData.data);
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
      <div className={`${styles.chartComponent} row`}>
        <div className={`${styles.achievement} col-5`}>
          <Achievement data={achievement} />
        </div>
        <div className={`${styles.bodyRecord} col-7`}>
          <BodyRecord data={bodyRecord} />
        </div>
      </div>
      <MealHistory
        initialData={meal}
        onLoadMore={(newData) => setMeal((prev) => [...prev, ...newData])}
      />
      
    </div>
  );
};

export default TopPage;
