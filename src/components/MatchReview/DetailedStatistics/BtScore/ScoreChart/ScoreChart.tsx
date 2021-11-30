import React from "react";

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

type ScoreChartPropsType = {
  labels: string[];
  metricValues: number[];
};

export const ScoreChart: React.FC<ScoreChartPropsType> = (props) => {
  const { labels, metricValues } = props;

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    indexAxis: "y" as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right" as const,
      },
      title: {
        display: true,
        text: "Chart.js Horizontal Bar Chart",
      },
    },
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
    <div>
      <Bar options={options} data={data} />
    </div>
  );
};
