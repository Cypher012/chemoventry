'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { DatePickerWithRange } from '@/components/ui/date-range-picker';
import { FileDown } from 'lucide-react';

interface DateRange {
  from?: Date;
  to?: Date;
}

export function ReportGenerator() {
  const [reportType, setReportType] = useState('');
  const [dateRange, setDateRange] = useState<DateRange>({
    from: new Date(),
    to: new Date(),
  });

  const handleGenerateReport = () => {
    console.log('Generating report:', { reportType, dateRange });
  };

  const handleExport = (format: 'pdf' | 'excel') => {
    console.log(`Exporting report as ${format}`);
  };

  return (
    <Card className="p-4  dark:bg-gray-900/60">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">Generate Report</CardTitle>
        <CardDescription className="text-sm md:text-base">
          Select report type and date range to generate a report.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Filters Section */}
        <div className="flex flex-col gap-4 md:flex-row">
          <Select onValueChange={setReportType}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Select report type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="inventory">Inventory Summary</SelectItem>
              <SelectItem value="usage">Chemical Usage</SelectItem>
              <SelectItem value="expiration">Expiration</SelectItem>
              <SelectItem value="cost">Cost Analysis</SelectItem>
            </SelectContent>
          </Select>
          <div className="w-full">
            <DatePickerWithRange
              onDateRangeChange={(range: DateRange) => setDateRange(range)}
            />
          </div>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <Button onClick={handleGenerateReport} className="w-full md:w-auto">
            Generate Report
          </Button>
          <Button
            variant="outline"
            onClick={() => handleExport('pdf')}
            className="w-full md:w-auto"
          >
            <FileDown className="mr-2 h-4 w-4" /> Export as PDF
          </Button>
          <Button
            variant="outline"
            onClick={() => handleExport('excel')}
            className="w-full md:w-auto"
          >
            <FileDown className="mr-2 h-4 w-4" /> Export as Excel
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
