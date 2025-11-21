// src/components/shared/mega-menu/QAMenu.tsx
'use client';

import { cn } from '@/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

interface QAMenuProps {
  className?: string;
}

const qaItems = [
  { id: 'manual-testing', label: 'Manual Testing', href: '/services/quality-assurance/manual-testing' },
  { id: 'automation-testing', label: 'Automation Testing', href: '/services/quality-assurance/automation-testing' },
  { id: 'performance-testing', label: 'Performance & Load Testing', href: '/services/quality-assurance/performance-testing' },
];

const QAMenu: FC<QAMenuProps> = ({ className }) => {
  const pathname = usePathname();

  return (
    <div className={cn('pl-4 border-l-2 border-gray-100 dark:border-gray-800 ml-2', className)}>
      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">QUALITY ASSURANCE</h4>
      <ul className="space-y-3">
        {qaItems.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className={cn(
                'block text-sm transition-colors hover:text-primary',
                pathname === item.href ? 'text-primary font-medium' : 'text-gray-600 dark:text-gray-300'
              )}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QAMenu;