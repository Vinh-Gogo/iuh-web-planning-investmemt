'use client';

import * as React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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

export default function LanguageSwitcher() {
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
