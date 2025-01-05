'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import clsx from 'clsx';

export function ModeToggle({ className }: { className?: React.ReactNode }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Ensure the component is only rendered after it has mounted
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevent rendering until the client-side has mounted
  }

  const handleThemeChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button
      className={clsx(className)}
      variant="outline"
      size="icon"
      onClick={handleThemeChange}
    >
      {theme === 'dark' ? (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-transform" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-transform" />
      )}
    </Button>
  );
}
