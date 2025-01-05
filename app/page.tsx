import PageTitle from '@/components/pageTitle';
import React from 'react';
import { AlertTriangle, Beaker, PackageOpen, TrendingUp } from 'lucide-react';
import DashboardHeader from '@/components/dashboard/dashboard-header';
import { DashboardCharts } from '@/components/dashboard/dashboard-chart';
import { RecentActivity } from '@/components/dashboard/recent-activity';
import { QuickActions } from '@/components/dashboard/quick-actions';

const cardData = [
  {
    title: 'Total Chemicals',
    icon: <Beaker className="h-4 w-4 text-muted-foreground" />,
    value: '1,234',
    description: '+20 from last month',
  },
  {
    title: 'Expired Chemicals',
    icon: <AlertTriangle className="h-4 w-4 text-muted-foreground" />,
    value: '23',
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
];
const Dashboard = () => {
  return (
    <>
      <PageTitle title="Dashboard" classname="dark:text-gray-100" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {cardData.map((card, index) => (
          <DashboardHeader
            key={index}
            title={card.title}
            icon={card.icon}
            value={card.value}
            description={card.description}
          />
        ))}
      </div>
      <div className="mt-16 grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        <DashboardCharts />
        <RecentActivity />
        <QuickActions />
      </div>
    </>
  );
};

export default Dashboard;
