'use client';

import { servicesMenuItems } from '@/data/header';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

interface MobileAppMenuProps {
  className?: string;
}

const MobileAppMenu: FC<MobileAppMenuProps> = ({ className }) => {
  const pathname = usePathname();
  
  // Filter only child items under Mobile App Development (exclude the parent entry itself)
  const mobileAppItems = servicesMenuItems.filter((item) => item.parentId === 'mobile-app-dev');

  return (
    <div className={cn('pl-4 border-l-2 border-gray-100 dark:border-gray-800 ml-2', className)}>
      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">MOBILE APPS</h4>
      <ul className="space-y-3">
        {mobileAppItems.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className={cn(
                'block text-sm transition-colors hover:text-primary',
                pathname === item.href || pathname.startsWith(item.href + '/') ? 'text-primary font-medium' : 'text-gray-600 dark:text-gray-300'
              )}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileAppMenu;