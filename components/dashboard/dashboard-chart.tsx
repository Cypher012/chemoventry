'use client';

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const usageData = [
  { name: 'Jan', total: 167 },
  { name: 'Feb', total: 145 },
  { name: 'Mar', total: 189 },
  { name: 'Apr', total: 213 },
  { name: 'May', total: 252 },
  { name: 'Jun', total: 276 },
];

const chartConfig = {
  month: {
    label: 'Month',
    color: '#727D73',
  },
} satisfies ChartConfig;

export function DashboardCharts() {
  return (
    <Card className="w-full dark:bg-gray-900 dark:border-none">
      <CardHeader>
        <CardTitle>Chemical Usage Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[20rem] w-full">
          <BarChart data={usageData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="name"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Bar dataKey="total" fill="var(--color-month)" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
