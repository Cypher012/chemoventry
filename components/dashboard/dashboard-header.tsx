'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Beaker, PackageOpen, TrendingUp } from 'lucide-react';
import { useGetChemicals } from '@/api/chemicals/useChemicals';
import { useMemo } from 'react';
import { Chemical } from '@/api/chemicals/chemicals';
const DashboardHeader = () => {
  const { data } = useGetChemicals();
  const countExpiredChemicals = (chemicals: Chemical[]) => {
    const currentDate = new Date();

    return chemicals.filter((chemical: Chemical) => {
      const expirationDate = new Date(chemical.expires);
      return expirationDate < currentDate;
    }).length;
  };
  const cardData = useMemo(
    () => [
      {
        title: 'Total Chemicals',
        icon: <Beaker className="h-4 w-4 text-muted-foreground" />,
        value: data?.count,
        description: '+20 from last month',
      },
      {
        title: 'Expired Chemicals',
        icon: <AlertTriangle className="h-4 w-4 text-muted-foreground" />,
        value: data?.chemicals && countExpiredChemicals(data?.chemicals),
        description: '+4 from last month',
      },
      {
        title: 'Low Stock Alerts',
        icon: <PackageOpen className="h-4 w-4 text-muted-foreground" />,
        value: '7',
        description: '-2 from last month',
      },
      {
        title: 'Monthly Usage',
        icon: <TrendingUp className="h-4 w-4 text-muted-foreground" />,
        value: '+12.5%',
        description: 'Compared to last month',
      },
    ],
    [data]
  );

  return (
    <>
      {cardData.map((data) => (
        <Card key={data.title} className="dark:bg-gray-900 dark:border-none">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{data.title}</CardTitle>
            {data.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.value}</div>
            <p className="text-xs text-muted-foreground">{data.description}</p>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default DashboardHeader;
