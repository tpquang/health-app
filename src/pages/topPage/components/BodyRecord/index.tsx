import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import styles from "./style.module.scss";
import { bodyRecordsData } from "../../../../mocks/topPage/data/bodyRecordsData";
interface BodyRecordProps {
  data: any;
}

const BodyRecord = ({ data }: BodyRecordProps) => {
  if (!data) return null;
  const dataChart = bodyRecordsData.month;
  console.log(dataChart);
  return (
    <div className={styles.chartWrapper}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart 
          data={dataChart}
          margin={{ left: 16, right: 16 }}
        >
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
            tick={{ fill: '#FFFFFF' }}
            padding={{ left: 0, right: 0 }}
            interval="preserveStartEnd"
          />
          <YAxis 
            hide={true}
          />
          <Line
            type="linear"
            dataKey="weight"
            stroke="#FFCC21"
            strokeWidth={2}
            dot={{ 
              r: 4,
              fill: '#FFCC21',
              strokeWidth: 0
            }}
          />
          <Line
            type="linear"
            dataKey="fat"
            stroke="#8FE9D0"
            strokeWidth={2}
            dot={{ 
              r: 4,
              fill: '#8FE9D0',
              strokeWidth: 0
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BodyRecord;
