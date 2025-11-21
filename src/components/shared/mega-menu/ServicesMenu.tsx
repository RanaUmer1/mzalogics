// src/components/shared/mega-menu/ServicesMenu.tsx
'use client';

import { servicesMenuItems } from '@/data/header';
import { cn } from '@/utils/cn';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FC, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import MobileAppMenu from './MobileAppMenu';
import WebDevMenu from './WebDevMenu';
import UIUXDesignMenu from './UIUXDesignMenu';
import QAMenu from './QAMenu';
import DigitalMarketingMenu from './DigitalMarketingMenu';
import CloudDevOpsMenu from './CloudDevOpsMenu';
import MaintenanceSupportMenu from './MaintenanceSupportMenu';


interface ServicesMenuProps {
  className?: string;
}

const ServicesMenu: FC<ServicesMenuProps> = ({ className }) => {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [hoveredWebDev, setHoveredWebDev] = useState<boolean>(false);
  const [hoveredUIUX, setHoveredUIUX] = useState<boolean>(false);
  const [hoveredQA, setHoveredQA] = useState<boolean>(false);
  const [hoveredDigitalMarketing, setHoveredDigitalMarketing] = useState<boolean>(false);
  const [hoveredCloudDevOps, setHoveredCloudDevOps] = useState<boolean>(false);
  const [hoveredMaintenanceSupport, setHoveredMaintenanceSupport] = useState<boolean>(false);

  return (
    <div>
      <div className="fixed top-full left-1/2 z-50 hidden w-full max-w-[1290px] -translate-x-1/2 overflow-hidden rounded-[20px] bg-transparent py-6 transition-all duration-200 group-focus-within/nav:flex group-hover/nav:flex dark:bg-transparent"></div>
      <div
        className={cn(
          'dark:bg-background-6 border-stroke-1 dark:border-stroke-6 pointer-events-auto absolute top-full left-1/2 z-50 mt-2 w-full min-w-[600px] -translate-x-1/2 translate-y-5 overflow-hidden rounded-[20px] border bg-white p-6 opacity-0 transition-all duration-300 group-hover/nav:translate-y-0 group-hover/nav:opacity-100',
          className
        )}>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Our Services</h3>
            <ul className="space-y-1">
              {servicesMenuItems.map((item) => (
                <li 
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => {
                    if (item.id === 'mobile-app-dev') {
                      setHoveredItem('mobile-app');
                      setHoveredWebDev(false);
                      setHoveredUIUX(false);
                    } else if (item.id === 'web-dev') {
                      setHoveredItem('web-dev');
                      setHoveredWebDev(true);
                      setHoveredUIUX(false);
                    } else if (item.id === 'ui-ux-design') {
                      setHoveredItem('ui-ux-design');
                      setHoveredUIUX(true);
                      setHoveredWebDev(false);
                      setHoveredQA(false);
                      setHoveredDigitalMarketing(false);
                    } else if (item.id === 'qa') {
                      setHoveredItem('qa');
                      setHoveredQA(true);
                      setHoveredWebDev(false);
                      setHoveredUIUX(false);
                      setHoveredDigitalMarketing(false);
                    } else if (item.id === 'digital-marketing') {
                      setHoveredItem('digital-marketing');
                      setHoveredDigitalMarketing(true);
                      setHoveredWebDev(false);
                      setHoveredUIUX(false);
                      setHoveredQA(false);
                      setHoveredCloudDevOps(false);
                    } else if (item.id === 'cloud-devops') {
                      setHoveredItem('cloud-devops');
                      setHoveredCloudDevOps(true);
                      setHoveredWebDev(false);
                      setHoveredUIUX(false);
                      setHoveredQA(false);
                      setHoveredDigitalMarketing(false);
                      setHoveredMaintenanceSupport(false);
                    } else if (item.id === 'maintenance-support') {
                      setHoveredItem('maintenance-support');
                      setHoveredMaintenanceSupport(true);
                      setHoveredWebDev(false);
                      setHoveredUIUX(false);
                      setHoveredQA(false);
                      setHoveredDigitalMarketing(false);
                      setHoveredCloudDevOps(false);
                    }
                     else {
                      setHoveredItem(null);
                      setHoveredWebDev(false);
                      setHoveredUIUX(false);
                    }
                  }}
                  onMouseLeave={() => {
                    if (hoveredItem !== 'mobile-app' && 
                        hoveredItem !== 'web-dev' && 
                        hoveredItem !== 'ui-ux-design' && 
                        hoveredItem !== 'qa' &&
                        hoveredItem !== 'digital-marketing' &&
                        hoveredItem !== 'cloud-devops' &&
                        hoveredItem !== 'maintenance-support') {
                      setHoveredItem(null);
                      setHoveredWebDev(false);
                      setHoveredUIUX(false);
                      setHoveredQA(false);
                      setHoveredDigitalMarketing(false);
                      setHoveredCloudDevOps(false);
                      setHoveredMaintenanceSupport(false);
                    }
                  }}
                >
                  {item.id === 'mobile-app-dev' || item.id === 'web-dev' || item.id === 'ui-ux-design' || item.id === 'qa' || item.id === 'digital-marketing' || item.id === 'cloud-devops' || item.id === 'maintenance-support' ? (
                    <div className="group/menu-item">
                      <div className={cn(
                        'flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors',
                        (item.id === 'mobile-app-dev' && pathname.startsWith('/services/mobile-app')) ||
                        (item.id === 'web-dev' && pathname.startsWith('/services/web-dev')) ||
                        (item.id === 'ui-ux-design' && pathname.startsWith('/services/ui-ux')) ||
                        (item.id === 'qa' && pathname.startsWith('/services/qa')) ||
                        (item.id === 'digital-marketing' && pathname.startsWith('/services/digital-marketing')) ||
                        (item.id === 'cloud-devops' && pathname.startsWith('/services/cloud-devops')) ||
                        (item.id === 'maintenance-support' && pathname.startsWith('/services/maintenance-support'))
                          ? 'bg-gray-50 text-primary dark:bg-gray-800' 
                          : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'
                      )}>
                        <span>{item.label}</span>
                        <ChevronRight className={cn(
                          'h-4 w-4 transition-transform',
                          hoveredItem === item.id && 'transform translate-x-1'
                        )} />
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        'block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-50 dark:hover:bg-gray-800',
                        pathname === item.href
                          ? 'bg-gray-50 text-primary dark:bg-gray-800'
                          : 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                      )}>
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Submenu Panel */}
          <div 
            className="pl-6 border-l border-gray-200 dark:border-gray-800"
            onMouseEnter={() => {
              if (hoveredItem === 'web-dev') setHoveredWebDev(true);
              if (hoveredItem === 'ui-ux-design') setHoveredUIUX(true);
              if (hoveredItem === 'qa') setHoveredQA(true);
              if (hoveredItem === 'digital-marketing') setHoveredDigitalMarketing(true);
              if (hoveredItem === 'cloud-devops') setHoveredCloudDevOps(true);
              if (hoveredItem === 'maintenance-support') setHoveredMaintenanceSupport(true);
            }}
            onMouseLeave={() => {
              setHoveredWebDev(false);
              setHoveredUIUX(false);
              setHoveredQA(false);
              setHoveredDigitalMarketing(false);
              setHoveredCloudDevOps(false);
              setHoveredMaintenanceSupport(false);
            }}
          >
            {hoveredItem === 'mobile-app' && <MobileAppMenu />}
            {hoveredItem === 'web-dev' && hoveredWebDev && <WebDevMenu />}
            {hoveredItem === 'ui-ux-design' && hoveredUIUX && <UIUXDesignMenu />}
            {hoveredItem === 'qa' && hoveredQA && <QAMenu />}
            {hoveredItem === 'digital-marketing' && hoveredDigitalMarketing && <DigitalMarketingMenu />}
            {hoveredItem === 'cloud-devops' && hoveredCloudDevOps && <CloudDevOpsMenu />}
            {hoveredItem === 'maintenance-support' && hoveredMaintenanceSupport && <MaintenanceSupportMenu />}
          </div>
        </div>
      </div>
    </div>
  );
};

ServicesMenu.displayName = 'ServicesMenu';

export default ServicesMenu;