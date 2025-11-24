'use client';

import { cn } from '@/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

interface CloudDevOpsMenuProps {
  className?: string;
}

const cloudDevOpsItems = [
  { id: 'aws-management', label: 'AWS Management', href: '/services/aws-management' },
  { id: 'ci-cd-setup', label: 'CI/CD Setup', href: '/services/ci-cd-setup' },
  { id: 'server-deployment', label: 'Server Deployment', href: '/services/server-deployment' },
];

const CloudDevOpsMenu: FC<CloudDevOpsMenuProps> = ({ className }) => {
  const pathname = usePathname();

  return (
    <div className={cn('pl-4 border-l-2 border-gray-100 dark:border-gray-800 ml-2', className)}>
      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">CLOUD & DEVOPS</h4>
      <ul className="space-y-3">
        {cloudDevOpsItems.map((item) => (
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

export default CloudDevOpsMenu;
