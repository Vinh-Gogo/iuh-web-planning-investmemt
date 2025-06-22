'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { NAV_LINKS } from '@/lib/constants';
import SearchWithAutocomplete from '@/components/layout/search-with-autocomplete';

const IuhLogo = () => (
  <svg width="40" height="40" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.33125 13.5375L22.5 4.1625L40.6687 13.5375V31.4625L22.5 40.8375L4.33125 31.4625V13.5375Z" fill="#A51C30" />
    <path d="M22.5 35.1V9.9L10.35 16.2375V28.7625L22.5 35.1ZM25.875 19.125C25.875 18.0563 26.3156 17.0306 27.0819 16.2644C27.8481 15.4981 28.8737 15.0562 29.9425 15.0562C31.0113 15.0562 32.0369 15.4981 32.8031 16.2644C33.5694 17.0306 34.01 18.0563 34.01 19.125C34.01 20.1937 33.5694 21.2194 32.8031 21.9856C32.0369 22.7519 31.0113 23.1937 29.9425 23.1937C28.8737 23.1937 27.8481 22.7519 27.0819 21.9856C26.3156 21.2194 25.875 20.1937 25.875 19.125ZM28.125 28.7625H31.7625V24.525H28.125V28.7625Z" fill="white" />
  </svg>
);

const VietnameseFlag = () => (
    <svg aria-hidden="true" focusable="false" className="w-5 h-auto rounded-sm" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600">
        <rect fill="#da251d" width="900" height="600"/>
        <polygon fill="#ff0" points="450,110 493,250 643,250 525,345 568,485 450,390 332,485 375,345 257,250 407,250"/>
    </svg>
);

const EnglishFlag = () => (
    <svg aria-hidden="true" focusable="false" className="w-5 h-auto rounded-sm" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
        <clipPath id="uk-flag-clip"><path d="M0 0v30h60V0z"/></clipPath>
        <path d="M0 0v30h60V0z" fill="#012169"/>
        <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6"/>
        <path d="M0 0l60 30m0-30L0 30" clipPath="url(#uk-flag-clip)" stroke="#c8102e" strokeWidth="4"/>
        <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10"/>
        <path d="M30 0v30M0 15h60" stroke="#c8102e" strokeWidth="6"/>
    </svg>
);

const NavigationMenu = () => {
  return (
    <nav className="hidden lg:flex items-center space-x-1">
      {NAV_LINKS.map((link) =>
        link.sublinks ? (
          <DropdownMenu key={link.label}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-white hover:bg-primary/80 hover:text-white font-headline">
                {link.label}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white">
              {link.sublinks.map((sublink) =>
                sublink.sublinks ? (
                  <DropdownMenuSub key={sublink.label}>
                    <DropdownMenuSubTrigger className="font-headline text-primary hover:!bg-background data-[state=open]:!bg-background">
                      <span>{sublink.label}</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuSubContent className="bg-white">
                            {sublink.href && (
                                <DropdownMenuItem asChild>
                                    <Link href={sublink.href} className="font-headline text-primary hover:!bg-background">
                                        {sublink.label}
                                    </Link>
                                </DropdownMenuItem>
                            )}
                            {sublink.sublinks.map((deepSublink) => (
                                <DropdownMenuItem key={deepSublink.label} asChild>
                                    <Link href={deepSublink.href} className="font-headline text-primary hover:!bg-background">
                                        {deepSublink.label}
                                    </Link>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                ) : (
                  <DropdownMenuItem key={sublink.label} asChild>
                    <Link href={sublink.href} className="font-headline text-primary hover:!bg-background">
                      {sublink.label}
                    </Link>
                  </DropdownMenuItem>
                )
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button key={link.label} variant="ghost" asChild className="text-white hover:bg-primary/80 hover:text-white font-headline">
            <Link href={link.href}>{link.label}</Link>
          </Button>
        )
      )}
    </nav>
  );
};

const MobileNavigation = () => {
    const renderMobileLinks = (links: typeof NAV_LINKS, level = 0) => {
        return links.map((link) => (
            <React.Fragment key={link.label}>
                <Button
                    variant="ghost"
                    asChild
                    className="w-full justify-start text-primary font-headline"
                    style={{ paddingLeft: `${1 + level * 1.5}rem` }}
                >
                    <Link href={link.href || '#'}>{link.label}</Link>
                </Button>
                {link.sublinks && (
                    <div className="flex flex-col space-y-1">{renderMobileLinks(link.sublinks, level + 1)}</div>
                )}
            </React.Fragment>
        ));
    };

    return (
        <Sheet>
        <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden text-white hover:text-white/80">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open navigation menu</span>
            </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-white p-0 w-[300px]">
            <div className="p-4 border-b">
            <Link href="/" className="flex items-center gap-2">
                <IuhLogo />
                <span className="font-bold text-primary font-headline">IUH Planning Hub</span>
            </Link>
            </div>
            <nav className="flex flex-col p-4 space-y-1">
                {renderMobileLinks(NAV_LINKS)}
            </nav>
        </SheetContent>
        </Sheet>
    );
};


const LanguageSwitcher = () => {
    const [currentLang, setCurrentLang] = React.useState<'vi' | 'en'>('vi');
  
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="text-white hover:text-white/80 px-2 flex items-center gap-2">
            {currentLang === 'vi' ? <VietnameseFlag /> : <EnglishFlag />}
            <ChevronDown className="h-4 w-4 opacity-70" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-white min-w-[150px]">
          <DropdownMenuItem onClick={() => setCurrentLang('vi')} className="hover:!bg-background cursor-pointer flex items-center gap-2">
            <VietnameseFlag />
            <span className="font-headline">Tiếng Việt</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setCurrentLang('en')} className="hover:!bg-background cursor-pointer flex items-center gap-2">
            <EnglishFlag />
            <span className="font-headline">English</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };


export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-primary shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center">
          <div className="flex items-center">
            <MobileNavigation />
            <Link href="/" className="flex items-center gap-3 ml-2 lg:ml-0">
              <IuhLogo />
              <div className="hidden md:flex flex-col text-white font-headline">
                <span className="text-sm font-bold leading-tight">IUH</span>
                <span className="text-xs leading-tight">Planning Hub</span>
              </div>
            </Link>
          </div>
          
          <div className="flex-1 flex justify-center px-4">
            <div className="bg-gradient-to-r from-primary via-accent/50 to-primary p-1 rounded-full shadow-inner hidden lg:block">
              <div className="bg-primary/50 rounded-full">
                <NavigationMenu />
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-1">
            <SearchWithAutocomplete />
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
