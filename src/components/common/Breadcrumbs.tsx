
'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { NAV_LINKS, type NavLink } from '@/lib/constants';

const pathLabels: { [key: string]: string } = {};

const buildPathLabels = (links: NavLink[]) => {
  for (const link of links) {
    if (link.href) {
      pathLabels[link.href] = link.label;
    }
    if (link.sublinks) {
      buildPathLabels(link.sublinks);
    }
  }
};

buildPathLabels(NAV_LINKS);

const Breadcrumbs = () => {
  const pathname = usePathname();

  if (pathname === '/') {
    return null;
  }

  const pathSegments = pathname.split('/').filter((segment) => segment);

  const breadcrumbItems = pathSegments.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
    const label = pathLabels[href] || segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
    return { href, label };
  });
  
  // Don't show breadcrumbs if it's a sub-page not in NAV_LINKS, e.g. /news/1
  if (breadcrumbItems.length > 0 && !pathLabels[breadcrumbItems[breadcrumbItems.length - 1].href]) {
      const parentPath = `/${pathSegments.slice(0, pathSegments.length -1).join('/')}`;
      if(!pathLabels[parentPath]) return null;
  }


  return (
    <div className="bg-secondary/50 border-b">
      <div className="container mx-auto px-4">
        <nav aria-label="breadcrumb" className="py-3">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <Home className="h-4 w-4" />
                Trang chủ
              </Link>
            </li>
            {breadcrumbItems.map((crumb, index) => (
              <React.Fragment key={crumb.href}>
                <li>
                  <ChevronRight className="h-4 w-4 text-muted-foreground/70" />
                </li>
                <li>
                  {index === breadcrumbItems.length - 1 ? (
                    <span className="font-medium text-primary">{crumb.label}</span>
                  ) : (
                    <Link href={crumb.href} className="hover:text-primary transition-colors">
                      {crumb.label}
                    </Link>
                  )}
                </li>
              </React.Fragment>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumbs;
