import { useState } from "react";
import Button from "../../../../components/Button/Button";
import ButtonHexagon from "../../../../components/ButtonHexagon/ButtonHexagon";
import styles from "./style.module.scss";
interface MealHistoryProps {
  initialData: any[];
}

const MealHistory = (props: MealHistoryProps) => {
  console.log("props.initialData", props.initialData);
  return (
    <section className={`${styles.mealHistory} pb-16`}>
      <div className="container">
        <div className="flex justify-center items-center gap-16 w-full py-6">
          <ButtonHexagon iconUrl={`images/icons/icon_knife.svg`}>
            Morning
          </ButtonHexagon>
          <ButtonHexagon iconUrl={`images/icons/icon_knife.svg`}>
            Morning
          </ButtonHexagon>
          <ButtonHexagon iconUrl={`images/icons/icon_knife.svg`}>
            Morning
          </ButtonHexagon>
          <ButtonHexagon iconUrl={`images/icons/icon_knife.svg`}>
            Morning
          </ButtonHexagon>
        </div>
        <div className={`${styles.mHCustom} row mb-6`}>
          {props.initialData.map((item) => (
            <div key={item.id} className="col-md-3">
              <div className={styles.imageWrapper}>
                <img src={item.image} alt={item.type} />
                <div className={styles.dateWrapper}>
                  <span className={styles.date}>{item.datedOn}</span>
                  <span className={styles.type}>{item.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center ">
          <Button variant="gradient" size="large" className="mt-4">
            記録をもっと見る
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MealHistory;
