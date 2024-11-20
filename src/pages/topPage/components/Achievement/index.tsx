import styles from "./style.module.scss";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";
import { AchievementType } from "../../../../types/achievement.type";

const AchievementChart = ({ data }: { data: AchievementType }) => {
  if (!data) return null;
  const dataChart = [
    { name: "Achievement", value: data.achievement, color: "#ffffff" },
    { name: "", value: 100 - data.achievement, color: "transparent" },
  ];
  return (
    <div className={styles.achievement}>
      <ResponsiveContainer width={188} height={188}>
        <PieChart>
          <defs>
            <filter
              id="drop-shadow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="3"
                floodColor="#FC7400"
                floodOpacity="1"
              />
            </filter>
            <filter
              id="text-shadow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="2"
                floodColor="#FC7400"
                floodOpacity="1"
              />
            </filter>
          </defs>
          <Pie
            data={dataChart}
            cx={90}
            cy={90}
            innerRadius={87}
            outerRadius={90}
            startAngle={90}
            endAngle={-270}
            strokeWidth={0}
            dataKey="value"
            style={{ filter: "url(#drop-shadow)" }}
          >
            {dataChart.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
            <Label
              position="center"
              content={({ viewBox }) => {
                const { cx = 0, cy = 0 } =
                  (viewBox as { cx?: number; cy?: number }) || {};
                return (
                  <text
                    x={cx}
                    y={cy}
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    style={{ filter: "url(#text-shadow)" }}
                  >
                    <tspan fontSize="18px" alignmentBaseline="middle">
                      {data.date}
                    </tspan>
                    <tspan fontSize="25px" dx="8" alignmentBaseline="middle">
                      {dataChart[0].value}%
                    </tspan>
                  </text>
                );
              }}
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AchievementChart;
