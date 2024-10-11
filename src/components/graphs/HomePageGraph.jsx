import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
} from "@/components/ui/chart"

const chartData = [
  { language: "HTML/CSS", desktop: 3 },
  { language: "Java", desktop: 1 },
  { language: "Javascript", desktop: 2 },
  { language: "Lua", desktop: 4 },
  { language: "Python", desktop: 3 },
  { language: "Swift", desktop: 2 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  label: {
    color: "hsl(var(--background))",
  },
};

export default function HomePageGraph() {

  return (
    <Card className="w-[80vw] lg:w-[42.5vw]">
      <CardHeader>
        <CardTitle>Years of Experience</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="w-[70vw] lg:w-[35vw]">
          <BarChart data={chartData} layout="vertical" margin={{ right: 25 }}>
            <CartesianGrid horizontal={false} vertical={false} />
            <YAxis
              dataKey="language"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="desktop" type="number" hide />
            <Bar
              dataKey="desktop"
              layout="vertical"
              fill="var(--color-desktop)"
              radius={4}
            >
              <LabelList
                dataKey="language"
                position="insideLeft"
                offset={8}
                className="fill-[--color-label]"
                fontSize={20}
              />
              <LabelList
                dataKey="desktop"
                position="right"
                offset={8}
                className="fill-background"
                fontSize={20}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
