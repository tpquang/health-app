import { useEffect, useState } from 'react';
import { topPageService } from '../../services/api/topPage.service';
import Achievement from './components/Achievement';
import BodyRecord from './components/BodyRecord';
import MealHistory from './components/MealHistory';
import styles from './style.module.scss';

const TopPage = () => {
  const [history, setHistory] = useState<any[]>([]);
  const [achievement, setAchievement] = useState<any>(null);
  const [bodyRecord, setBodyRecord] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    try {
      setLoading(true);
      const [historyData, achievementData, bodyData] = await Promise.all([
        topPageService.getMeal({ page: 1 }),
        topPageService.getAchievement(),
        topPageService.getBodyRecord()
      ]);

      setHistory(historyData.data);
      setAchievement(achievementData.data);
      setBodyRecord(bodyData.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles.topPage}>
      <Achievement data={achievement} />
      <BodyRecord data={bodyRecord} />
      <MealHistory 
        initialData={history} 
        onLoadMore={(newData) => setHistory(prev => [...prev, ...newData])} 
      />
    </div>
  );
};

export default TopPage;
