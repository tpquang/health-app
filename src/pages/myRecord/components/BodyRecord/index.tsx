import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import styles from "./style.module.scss";
import { BodyRecord as BodyRecordType } from "../../../../types/bodyRecord.type";
import { useState } from "react";
import { TimeTypeParams } from "../../../../types/common";

const BodyRecordChart = ({ data, onFilterChange, activeFilterDefault }: { data: BodyRecordType[], onFilterChange: (timeType: TimeTypeParams) => void, activeFilterDefault: TimeTypeParams }) => {
  const [activeFilter, setActiveFilter] = useState(activeFilterDefault);

  const handleFilterClick = (timeType: TimeTypeParams) => {
    if (timeType.timeType) {
      setActiveFilter(timeType);
      onFilterChange(timeType);
    }
  };

  if (!data) return null;
  const dataChart = data;
  return (
    <div className={styles.chartWrapper}>
      <div className={`${styles.chartTitle} flex color-light`}>
        <div className={styles.chartTitleTextWrapper}>
          <h2 className={`${styles.chartTitleText} fs-15 fw-400`}>
            BODY <br /> RECORD
          </h2>
        </div>
        <p className="fs-22">2021.05.21</p>
      </div>
      <div className={styles.chart}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={dataChart}>
            <CartesianGrid
              vertical={true}
              horizontal={false}
              stroke="#777777"
              strokeOpacity={1}
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#FFFFFF", fontSize: 12 }}
              interval="preserveStartEnd"
            />
            <YAxis hide={true} />
            <Line
              type="linear"
              dataKey="weight"
              stroke="#FFCC21"
              strokeWidth={2}
              dot={{
                r: 4,
                fill: "#FFCC21",
                strokeWidth: 0,
              }}
            />
            <Line
              type="linear"
              dataKey="bodyFat"
              stroke="#8FE9D0"
              strokeWidth={2}
              dot={{
                r: 4,
                fill: "#8FE9D0",
                strokeWidth: 0,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className={`${styles.chartFilter} flex gap-4`}>
        <div 
          className={`${styles.chartFilterItem} ${activeFilter.timeType === 'day' ? styles.active : ''}`}
          onClick={() => handleFilterClick({ timeType: 'day' })}
        >
          <p className="font-noto">日</p>
        </div>
        <div 
          className={`${styles.chartFilterItem} ${activeFilter.timeType === 'week' ? styles.active : ''}`}
          onClick={() => handleFilterClick({ timeType: 'week' })}
        >
          <p className="font-noto">週</p>
        </div>
        <div 
          className={`${styles.chartFilterItem} ${activeFilter.timeType === 'month' ? styles.active : ''}`}
          onClick={() => handleFilterClick({ timeType: 'month' })}
        >
          <p className="font-noto">月</p>
        </div>
        <div 
          className={`${styles.chartFilterItem} ${activeFilter.timeType === 'year' ? styles.active : ''}`}
          onClick={() => handleFilterClick({ timeType: 'year' })}
        >
          <p className="font-noto">年</p>
        </div>
      </div>
    </div>
  );
};
export default BodyRecordChart;
