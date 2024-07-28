"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

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
  { category: "house", price: 275, fill: "var(--color-house)" },
  { category: "food", price: 200, fill: "var(--color-food)" },
  { category: "supplies", price: 287, fill: "var(--color-supplies)" },
  { category: "medication", price: 173, fill: "var(--color-medication)" },
  { category: "transportation", price: 190, fill: "var(--color-transportation)" },
]

const chartConfig = {
  won: {
    label: "Won",
  },
  house: {
    label: "House",
    color: "hsl(var(--chart-1))",
  },
  food: {
    label: "Food",
    color: "hsl(var(--chart-2))",
  },
  supplies: {
    label: "Supplies",
    color: "hsl(var(--chart-3))",
  },
  medication: {
    label: "Medication",
    color: "hsl(var(--chart-4))",
  },
  transportation: {
    label: "Transportation",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

const DonutChart = () => {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.price, 0)
  }, [])

  return (
    <Card className="flex flex-col mt-12 max-h-[500px]">
      <CardHeader className="items-center pb-0">
        <CardTitle>Cost of Living - Month</CardTitle>
        <CardDescription>Average of 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[370px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="price"
              nameKey="category"
              innerRadius={90}
              strokeWidth={3}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Won
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Average cost of living by category
        </div>
      </CardFooter>
    </Card>
  )
}
export default DonutChart;