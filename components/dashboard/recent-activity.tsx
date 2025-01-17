import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity } from 'lucide-react';

const recentActivities = [
  {
    id: 1,
    action: 'Added',
    chemical: 'Sodium Hydroxide',
    quantity: '500g',
    user: 'John Doe',
  },
  {
    id: 2,
    action: 'Updated',
    chemical: 'Hydrochloric Acid',
    quantity: '2L',
    user: 'Jane Smith',
  },
  {
    id: 3,
    action: 'Removed',
    chemical: 'Ethanol',
    quantity: '1L',
    user: 'Bob Johnson',
  },
  {
    id: 4,
    action: 'Added',
    chemical: 'Sulfuric Acid',
    quantity: '1L',
    user: 'Alice Brown',
  },
  {
    id: 5,
    action: 'Updated',
    chemical: 'Acetone',
    quantity: '3L',
    user: 'Charlie Wilson',
  },
];

export function RecentActivity() {
  return (
    <Card className="dark:bg-gray-900 dark:border-none">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-5 ">
        <CardTitle className="">Recent Activity</CardTitle>
        <Activity className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-300">
          <table className="w-full border-collapse border border-gray-300 text-left text-sm">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Action</th>
                <th className="border border-gray-300 px-4 py-2">Chemical</th>
                <th className="border border-gray-300 px-4 py-2">Quantity</th>
                <th className="border border-gray-300 px-4 py-2">User</th>
              </tr>
            </thead>
            <tbody>
              {recentActivities.map((activity) => (
                <tr key={activity.id}>
                  <td className="border border-gray-300 px-4 py-2">
                    {activity.action}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {activity.chemical}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {activity.quantity}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {activity.user}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
