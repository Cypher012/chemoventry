import PageTitle from '@/components/pageTitle';
import { DashboardCharts } from '@/components/dashboard/dashboard-chart';
import { RecentActivity } from '@/components/dashboard/recent-activity';
import { QuickActions } from '@/components/dashboard/quick-actions';
import DashboardHeader from '@/components/dashboard/dashboard-header';

const Dashboard = () => {
  return (
    <>
      <PageTitle title="Dashboard" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardHeader />
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
