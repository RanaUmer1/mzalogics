'use client';

import { cn } from '@/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

interface DigitalMarketingMenuProps {
  className?: string;
}

const digitalMarketingItems = [
  { id: 'seo', label: 'SEO', href: '/services/digital-marketing/seo' },
  { id: 'social-media', label: 'Social Media Marketing', href: '/services/digital-marketing/social-media' },
  { id: 'content-writing', label: 'Content Writing', href: '/services/digital-marketing/content-writing' },
  { id: 'ppc', label: 'PPC / Google Ads', href: '/services/digital-marketing/ppc' },
];

const DigitalMarketingMenu: FC<DigitalMarketingMenuProps> = ({ className }) => {
  const pathname = usePathname();

  return (
    <div className={cn('pl-4 border-l-2 border-gray-100 dark:border-gray-800 ml-2', className)}>
      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">DIGITAL MARKETING</h4>
      <ul className="space-y-3">
        {digitalMarketingItems.map((item) => (
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

export default DigitalMarketingMenu;
