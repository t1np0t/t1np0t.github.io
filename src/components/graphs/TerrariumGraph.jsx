import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
} from "recharts";
import { ChartContainer } from "@/components/ui/chart";

const serverActivity = [
  { test: "10 NPCs", unoptimized: [0.049, 0.488], optimized: [0, 0.04] },
  { test: "25 NPCs", unoptimized: [0.439, 1.127], optimized: [0, 0.098] },
  { test: "50 NPCs", unoptimized: [0.83, 1.758], optimized: [0.049, 0.146] },
];

const fps = [
  { test: "10 NPCs", unoptimized: 60, optimized: 59 },
  { test: "25 NPCs", unoptimized: 52, optimized: 60 },
  { test: "50 NPCs", unoptimized: 50, optimized: 60 },
];

const chartConfig = {
  test: {
    label: "Test",
    color: "hsl(var(--chart-1))",
  },
  before: {
    color: "hsl(var(--background))",
  },
};

export default function TerrariumGraph() {
  return (
    <div className="flex lg:flex-row flex-col">
      <div className="flex flex-col justify-center items-center space-y-4 h-[75vw] lg:h-[35vw]">
        <h3>Server Activity</h3>
        <ChartContainer
          config={chartConfig}
          className="w-[70vw] h-[90%] lg:w-[35vw]"
        >
          <BarChart
            data={serverActivity}
            margin={{ top: 10, bottom: 10, right: 5, left: 5 }}
          >
            <CartesianGrid strokeDasharray={"5 5"} />
            <XAxis dataKey={"test"} />
            <YAxis />
            <Legend />

            <Bar dataKey={"unoptimized"} fill="tomato" radius={4} />

            <Bar dataKey={"optimized"} fill="dodgerblue" radius={4} />
          </BarChart>
        </ChartContainer>
      </div>

      <div className="flex flex-col justify-center items-center space-y-4 h-[75vw] lg:h-[35vw]">
        <h3>FPS (Frames per Second)</h3>
        <ChartContainer config={chartConfig} className="w-[70vw] h-[90%] lg:w-[35vw]">
          <BarChart
            data={fps}
            margin={{ top: 10, bottom: 10, right: 5, left: 5 }}
          >
            <CartesianGrid strokeDasharray={"5 5"} />
            <XAxis dataKey={"test"} />
            <YAxis />
            <Legend />

            <Bar dataKey={"unoptimized"} fill="tomato" radius={4} />

            <Bar dataKey={"optimized"} fill="dodgerblue" radius={4} />
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
}
