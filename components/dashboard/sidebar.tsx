'use client';
import {
  Home,
  FlaskConical,
  QrCode,
  FileText,
  Users,
  Bell,
  Settings,
} from 'lucide-react'; // Adjust the import paths as necessary
import Link from 'next/link';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

import { MenuIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

const navItems = [
  { href: '/chemoventry', label: 'Dashboard', icon: Home },
  {
    href: '/chemoventry/inventory',
    label: 'Chemical Inventory',
    icon: FlaskConical,
  },
  { href: '/chemoventry/qr-codes', label: 'QR Code Management', icon: QrCode },
  { href: '/chemoventry/reports', label: 'Reports', icon: FileText },
  { href: '/chemoventry/users', label: 'User Management', icon: Users },
  { href: '/chemoventry/notifications', label: 'Notifications', icon: Bell },
  { href: '/chemoventry/settings', label: 'Settings', icon: Settings },
];

const CustomSidebar = () => {
  const router = useRouter();
  return (
    <>
      <div className="hidden md:block">
        <div className="fixed top-0 left-0 flex flex-col w-64 h-screen bg-gray-100 dark:bg-gray-900 gap-y-7 py-5">
          <div className="flex items-center justify-center h-14">
            <svg
              className="w-8 h-8 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 3V7M17 3V7M3 10H21M5 5H19C20.1046 5 21 5.89543 21 7V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V7C3 5.89543 3.89543 5 5 5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M12 14L9 17H15L12 14Z" fill="currentColor" />
              <path d="M12 14L15 11H9L12 14Z" fill="currentColor" />
            </svg>
            <span className="text-gray-800 dark:text-gray-100  text-2xl font-bold">
              Chemoventry
            </span>
          </div>
          <NavLinks />
        </div>
      </div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger
            className="absolute top-4 left-4 bg-transparent hover:dark:bg-gray-800 border-none"
            asChild
          >
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 left-4 bg-transparent hover:dark:bg-gray-800 border-none"
            >
              <MenuIcon className="text-gray-800 dark:text-gray-200 scale-150" />
            </Button>
          </SheetTrigger>
          <SheetContent className="px-0 dark:bg-gray-900" side={'left'}>
            <SheetHeader className=" dark:text-gray-100">
              <SheetTitle className="flex items-center h-14 px-4">
                <svg
                  className="w-8 h-8 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 3V7M17 3V7M3 10H21M5 5H19C20.1046 5 21 5.89543 21 7V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V7C3 5.89543 3.89543 5 5 5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M12 14L9 17H15L12 14Z" fill="currentColor" />
                  <path d="M12 14L15 11H9L12 14Z" fill="currentColor" />
                </svg>
                <span className=" dark:text-gray-200  text-2xl font-bold">
                  Chemoventry
                </span>
              </SheetTitle>
              <SheetDescription asChild className="">
                <div className="flex flex-col">
                  {navItems.map((item) => (
                    <SheetClose key={item.href} asChild>
                      <div className="w-full">
                        <Button
                          onClick={() => router.push(item.href)}
                          className="flex justify-start w-full no-underline bg-transparent items-center px-5  h-14 text-gray-700 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800"
                        >
                          <item.icon size={24} />
                          <span className="ml-4 font-medium">{item.label}</span>
                        </Button>
                      </div>
                    </SheetClose>
                  ))}
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default CustomSidebar;

const NavLinks = () => {
  return (
    <div className="flex flex-col">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="flex items-center px-5  h-14 text-gray-700 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          <item.icon size={24} />
          <span className="ml-4 font-medium">{item.label}</span>
        </Link>
      ))}
    </div>
  );
};

export { NavLinks };
