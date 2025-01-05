import React, { ReactNode } from 'react';
import CustomSidebar from '@/components/dashboard/sidebar';
import { ModeToggle } from '@/components/toggle-mode';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="md:flex overflow-x-hidden">
      <CustomSidebar />
      <div className="md:hidden flex justify-end items-center  dark:bg-gray-900 bg-gray-100 w-full h-16">
        <ModeToggle className="mr-5 dark:bg-gray-900" />
      </div>
      <div className="md:ml-64 p-4 md:p-10 w-full dark:bg-gray-800 min-h-screen">
        <ModeToggle className="mr-5 dark:bg-gray-900 hidden md:flex md:absolute md:top-10 md:right-5" />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
