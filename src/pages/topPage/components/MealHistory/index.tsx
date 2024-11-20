import Button from "../../../../components/Button/Button";
import ButtonHexagon from "../../../../components/ButtonHexagon/ButtonHexagon";
import MealHistoryCard from "../../../../components/MealHistoryCard";
import { CONFIG } from "../../../../config";
import { MealHistoryType } from "../../../../types/meal.type";
import styles from "./style.module.scss";
import { useState } from "react";

interface MealHistoryProps {
  data: MealHistoryType[];
  onLoadMore: (page: number, type: string) => void;
  onTypeChange: (type: string) => void;
  hasMore: boolean;
}

const MealHistory = ({ data, onLoadMore, onTypeChange, hasMore }: MealHistoryProps) => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleTypeClick = (type: string) => {
    setSelectedType(type);
    setCurrentPage(1); 
    onTypeChange(type);
  };

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    onLoadMore(nextPage, selectedType);
  };

  return (
    <section className={`${styles.mealHistory} pb-16`}>
      <div className="container">
        <div className="flex flex-wrap justify-center items-center gap-16 w-full py-6">
          <ButtonHexagon 
            iconUrl={`images/icons/icon_knife.svg`}
            onClick={() => handleTypeClick('Morning')}
          >
            Morning
          </ButtonHexagon>
          <ButtonHexagon 
            iconUrl={`images/icons/icon_knife.svg`}
            onClick={() => handleTypeClick('Lunch')}
          >
            Lunch
          </ButtonHexagon>
          <ButtonHexagon 
            iconUrl={`images/icons/icon_knife.svg`}
            onClick={() => handleTypeClick('Dinner')}
          >
            Dinner
          </ButtonHexagon>
          <ButtonHexagon 
            iconUrl={`images/icons/icon_cup.svg`}
            onClick={() => handleTypeClick('Snack')}
          >
            Snack
          </ButtonHexagon>
        </div>
        <div className={`${styles.mHCustom} row mb-6`}>
          {data && data.map((item: MealHistoryType) => (
            <MealHistoryCard item={item} key={item.id} />
          ))}
        </div>
        {hasMore && data.length >= CONFIG.PAGE_LIMIT && (
          <div className="flex justify-center">
            <Button 
              variant="gradient" 
              size="large" 
              className="mt-4"
              onClick={handleLoadMore}
            >
              記録をもっと見る
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MealHistory;
