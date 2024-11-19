import { useState } from "react";
import { topPageService } from "../../../../services/api/topPage.service";

interface MealHistoryProps {
  initialData: any[];
  onLoadMore: (newData: any[]) => void;
}

const MealHistory = ({ initialData, onLoadMore }: MealHistoryProps) => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [history, setHistory] = useState(initialData);

  const handleLoadMore = async () => {
    try {
      setLoading(true);
      const nextPage = page + 1;
      
      const response = await topPageService.getMeal({
        page: nextPage,
      });

      const newData = response.data;
      setHistory(prev => [...prev, ...newData]);
      onLoadMore(newData);
      setPage(nextPage);

      if (newData.length < 8) {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error loading more:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section >
      <div className="container">
        <div className="row">
          {history.map((item) => (
            <div className="col-md-3" key={item.id}>
              {/* Meal history item */}
            </div>
          ))}
        </div>
        
        {hasMore && (
          <div className="text-center mt-4">
            <button 
              onClick={handleLoadMore}
              disabled={loading}
              className="btn-primary"
            >
              {loading ? '読み込み中...' : '記録をもっと見る'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MealHistory; 