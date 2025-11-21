'use client';

import { cn } from '@/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

interface MaintenanceSupportMenuProps {
  className?: string;
}

const maintenanceSupportItems = [
  { id: 'app-maintenance', label: 'App Maintenance', href: '/services/maintenance-support/app-maintenance' },
  { id: 'website-maintenance', label: 'Website Maintenance', href: '/services/maintenance-support/website-maintenance' },
  { id: 'bug-fixing', label: 'Bug Fixing & Updates', href: '/services/maintenance-support/bug-fixing-updates' },
];

const MaintenanceSupportMenu: FC<MaintenanceSupportMenuProps> = ({ className }) => {
  const pathname = usePathname();

  return (
    <div className={cn('pl-4 border-l-2 border-gray-100 dark:border-gray-800 ml-2', className)}>
      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">MAINTENANCE & SUPPORT</h4>
      <ul className="space-y-3">
        {maintenanceSupportItems.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className={cn(
                'block text-sm transition-colors hover:text-primary',
                pathname === item.href ? 'text-primary font-medium' : 'text-gray-600 dark:text-gray-300'
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

export default MaintenanceSupportMenu;
