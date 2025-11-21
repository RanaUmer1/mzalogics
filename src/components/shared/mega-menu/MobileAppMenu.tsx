'use client';

import { cn } from '@/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

interface MobileAppMenuProps {
  className?: string;
}

const mobileAppItems = [
  { id: 'ios-dev', label: 'iOS App Development', href: '/services/ios-app-development' },
  { id: 'android-dev', label: 'Android App Development', href: '/services/android-app-development' },
  { id: 'cross-platform', label: 'Cross-Platform Solutions', href: '/services/cross-platform-mobile' },
  { id: 'mobile-ui-ux', label: 'UI/UX Design for Mobile', href: '/services/mobile-ui-ux-design' },
  { id: 'app-maintenance', label: 'App Maintenance', href: '/services/app-maintenance' },
];

const MobileAppMenu: FC<MobileAppMenuProps> = ({ className }) => {
  const pathname = usePathname();

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

export default MobileAppMenu;