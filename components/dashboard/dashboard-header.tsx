import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface DashboardHeaderProps {
  title: string;
  icon: React.ReactElement;
  value: string;
  description: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  title,
  icon,
  value,
  description,
}) => {
  return (
    <Card className="dark:bg-gray-900 dark:border-none">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default DashboardHeader;
