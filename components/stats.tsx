"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis,Cell} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { category: "Cost of living", score: 186, mobile: 80 },
  { category: "Salary", score: 305, mobile: 200 },
  { category: "English", score: 237, mobile: 120 },
  { category: "Weather", score: 73, mobile: 190 },
  { category: "Life", score: 209, mobile: 130 },
  { category: "Safety", score: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--primary))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--destructive))",
  },
  label: {
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig

export default function Stats() {
  return (
    <Card className="mt-12 max-h-[500px]">
      <CardHeader>
        <CardTitle>Stats</CardTitle>
        <CardDescription>Canada</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="category"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="score" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel hideIndicator formatter={(value, name, item, index)=>(
               <>
                <div className="flex basis-full justify-center">
                 {item.payload.score > 200 ? "Good": (item.payload.score > 100)?"normal":"bad" }
                </div>
               </>
              )}
            />}
            />
            <Bar
              dataKey="score"
              radius={5}
            >
              <LabelList
                dataKey="category"
                position="insideLeft"
                offset={8}
                className="fill-[--color-label]"
                fontSize={12}
              />
              <LabelList
                dataKey="score"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
              {chartData.map((item) => (
                <Cell
                  key={item.category}
                  fill={
                    item.score > 200
                      ? "hsl(var(--chart-1))"
                      : (item.score > 100 ? "hsl(var(--chart-3))":"hsl(var(--chart-2))")
                  }
                  />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
