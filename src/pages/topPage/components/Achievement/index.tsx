import styles from "./style.module.scss";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';

interface AchievementProps {
  data: {
    achievementRate: number;
  };
}

const COLORS = ['transparent', '#00C49F'];

const Achievement = ({ data }: AchievementProps) => {
  const dataChart = [
    { name: "", value: 60 },
    { name: "Achievement", value: 40 },
  ];

  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={dataChart}
            cx={200}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            startAngle={90}
            endAngle={-270}
            dataKey="value"
          >
            {dataChart.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={COLORS[index]} 
              />
            ))}
            <Label
              value={`${dataChart[1].value}%`}
              position="center"
              fill="#000000"
              style={{ fontSize: '24px' }}
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Achievement; 