'use client';

import { cn } from '@/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

interface IndustriesMenuProps {
  className?: string;
}

const industriesItems = [
  { id: 'ecommerce', label: 'E-commerce', href: '/industries/ecommerce' },
  { id: 'healthcare', label: 'Healthcare', href: '/industries/healthcare' },
  { id: 'fintech', label: 'FinTech', href: '/industries/fintech' },
  { id: 'real-estate', label: 'Real Estate', href: '/industries/real-estate' },
  { id: 'logistics', label: 'Logistics', href: '/industries/logistics' },
  { id: 'education', label: 'Education', href: '/industries/education' },
  { 
    id: 'travel-hospitality', 
    label: 'Travel & Hospitality', 
    href: '/industries/travel-hospitality' 
  },
  { 
    id: 'saas-products', 
    label: 'SaaS Products', 
    href: '/industries/saas-products' 
  },
];

const IndustriesMenu: FC<IndustriesMenuProps> = ({ className }) => {
  const pathname = usePathname();

  return (
    <div className={cn('pl-4 border-l-2 border-gray-100 dark:border-gray-800 ml-2', className)}>
      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">INDUSTRIES</h4>
      <ul className="space-y-3">
        {industriesItems.map((item) => (
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

export default IndustriesMenu;
