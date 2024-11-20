import { useEffect, useState } from "react";
import { topPageService } from "../../services/api/topPage.service";
import styles from "./style.module.scss";
import { BodyRecord as BodyRecordType } from "../../types/bodyRecord.type";
import { MealHistoryType } from "../../types/meal.type";
import { AchievementType } from "../../types/achievement.type";
import AchievementChart from "./components/Achievement";
import BodyRecord from "./components/BodyRecord";
import MealHistory from "./components/MealHistory";

const TopPage = () => {
  const [historyData, setHistoryData] = useState<MealHistoryType[]>([]);
  const [achievement, setAchievement] = useState<AchievementType>({
    date: new Date().toISOString(),
    achievement: 0,
  });
  const [bodyRecord, setBodyRecord] = useState<BodyRecordType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    fetchInitialData();
    setLoading(false);
  }, []);

  const fetchInitialData = async () => {
    try {
      setLoading(true);
      const [historyData, achievementData, bodyData] = await Promise.all([
        topPageService.getMeal({ page: 1, type: "all" }),
        topPageService.getAchievement(),
        topPageService.getBodyRecord({ timeType: "month" }),
      ]);
      setHistoryData(historyData.data);
      setAchievement(achievementData.data);
      setBodyRecord(bodyData.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleTypeChange = async (type: string) => {
    const newData = await topPageService.getMeal({ page: 1, type });
    setHistoryData(newData.data);
  };

  const handleLoadMore = async (page: number, type: string) => {
    const moreData = await topPageService.getMeal({ page, type });
    setHistoryData([...historyData, ...moreData.data]);
    setHasMore(moreData.currentPage < moreData.totalPages);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles.topPage}>
      <div className={`${styles.chartComponent} row`}>
        <div className={`${styles.achievement} col-md-5 col-12`}>
          <AchievementChart data={achievement} />
        </div>
        <div className={`${styles.bodyRecord} col-md-7 col-12`}>
          <BodyRecord data={bodyRecord} />
        </div>
      </div>
      <div>
        <MealHistory data={historyData} onLoadMore={handleLoadMore} onTypeChange={handleTypeChange} hasMore={hasMore} />
      </div>
    </div>
  );
};

export default TopPage;
