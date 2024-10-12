import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"
import { ChartContainer } from "@/components/ui/chart"

const chartData = [
  { test: "A", before: 3, after: 4 },
  { test: "B", before: 6, after: 2 },
  { test: "C", before: 4, after: 5 },
]

const chartConfig = {
  desktop: {
    label: "Test",
    color: "hsl(var(--chart-1))",
  },
  label: {
    color: "hsl(var(--background))",
  },
};

export default function HomePageGraph() {
  return (
    <ChartContainer config={chartConfig} className="w-[70vw] lg:w-[35vw]">
      <BarChart data={chartData} layout="vertical" margin={{ right: 25 }}>
        <CartesianGrid strokeDasharray={'5 5'} />
        <YAxis
          dataKey="test"
          type="category"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
          hide
        />
        <XAxis dataKey="before" type="number" hide />
        <Bar
          dataKey="before"
          layout="vertical"
          fill="var(--color-desktop)"
          radius={4}
        >
          <LabelList
            dataKey="test"
            position="insideLeft"
            offset={8}
            className="fill-[--color-label]"
            fontSize={20}
          />
          <LabelList
            dataKey="before"
            position="right"
            offset={8}
            className="fill-background"
            fontSize={20}
          />
        </Bar>
        <Bar 
          dataKey='after'
          fill='var(--color-desktop)'
          layout='vertical'
          radius={4}
        />
      </BarChart>
    </ChartContainer>
  );
}
