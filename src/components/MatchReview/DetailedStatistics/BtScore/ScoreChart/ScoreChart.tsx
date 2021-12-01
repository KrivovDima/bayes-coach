import React from "react";

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import styles from "./ScoreChart.module.scss";

type ScoreChartPropsType = {
  labels: string[];
  metricValues: number[];
};

export const ScoreChart: React.FC<ScoreChartPropsType> = (props) => {
  const { labels, metricValues } = props;

  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

  const options = {
    indexAxis: "y" as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
  };

  const zeroValue = 0;

  const data = {
    labels,
    datasets: [
      {
        label: "Value",
        data: metricValues,
        backgroundColor: metricValues.map((value) =>
          value >= zeroValue ? "#F0556F" : "#AAD0F3"
        ),
      },
    ],
  };

  return (
    <div className={styles.chart}>
      <Bar options={options} data={data} />
    </div>
  );
};
