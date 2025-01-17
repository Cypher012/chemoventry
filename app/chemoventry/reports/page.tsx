import PageTitle from '@/components/pageTitle';
import { ReportGenerator } from '@/components/reports/report-generator';
import { ReportTable } from '@/components/reports/report-table';

export default function ReportsPage() {
  return (
    <div className="space-y-8">
      <PageTitle title="Reports" />
      <ReportGenerator />
      <ReportTable />
    </div>
  );
}
