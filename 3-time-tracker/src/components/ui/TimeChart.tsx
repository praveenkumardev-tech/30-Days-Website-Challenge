import { Pie } from "react-chartjs-2" 
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js/auto"

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  data: { activity: string; hours: number }[];
}

// Function to generate random hex color
const getRandomColor = () =>
  "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");

const TimeChart = ({ data }: Props) => {
  const chartData = {
    labels: data.map((d) => d.activity),
    datasets: [
      {
        label: "Hours",
        data: data.map((d) => d.hours),
        backgroundColor: data.map(() => getRandomColor()),
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={chartData} />;
};

export default TimeChart;