// src/components/shared/mega-menu/UIUXDesignMenu.tsx
'use client';

import { cn } from '@/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

interface UIUXDesignMenuProps {
  className?: string;
}

const uiuxDesignItems = [
  { id: 'web-app-design', label: 'Web & App UI Design', href: '/services/web-app-ui-design' },
  { id: 'prototyping', label: 'Prototyping', href: '/services/prototyping' },
  { id: 'wireframing', label: 'Wireframing', href: '/services/wireframing' },
  { id: 'design-systems', label: 'Design Systems', href: '/services/design-systems' },
];

const UIUXDesignMenu: FC<UIUXDesignMenuProps> = ({ className }) => {
  const pathname = usePathname();

  return (
    <div className={cn('pl-4 border-l-2 border-gray-100 dark:border-gray-800 ml-2', className)}>
      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">UI/UX DESIGN</h4>
      <ul className="space-y-3">
        {uiuxDesignItems.map((item) => (
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

export default UIUXDesignMenu;