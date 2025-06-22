'use client';
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import Autoplay from "embla-carousel-autoplay"

const newsItems = [
  {
    title: 'Thông báo về việc triển khai kế hoạch năm học 2024-2025',
    category: 'Thông báo',
    date: '15/07/2024',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'meeting presentation',
    link: '/news/1'
  },
  {
    title: 'Hội thảo khoa học: Đổi mới sáng tạo trong quản lý dự án',
    category: 'Tin tức',
    date: '12/07/2024',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'conference workshop',
    link: '/news/2'
  },
  {
    title: 'Kế hoạch đầu tư cơ sở vật chất giai đoạn mới',
    category: 'Kế hoạch',
    date: '10/07/2024',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'construction blueprint',
    link: '/news/3'
  },
    {
    title: 'Ra mắt hệ thống quản lý văn bản điện tử mới',
    category: 'Dự án',
    date: '08/07/2024',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'digital document',
    link: '/news/4'
  },
];

export default function NewsSlider() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <div>
       <h2 className="text-3xl font-bold font-headline text-primary mb-4 pb-2 border-b-2 border-primary/20">
        Tin tức – Thông báo
      </h2>
      <Carousel 
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="w-full"
      >
        <CarouselContent>
          {newsItems.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2">
              <div className="p-1">
                <Card className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="flex flex-col h-full p-0">
                    <div className="relative h-48 w-full">
                       <Image
                        src={item.image}
                        alt={item.title}
                        layout="fill"
                        objectFit="cover"
                        className="group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={item.dataAiHint}
                      />
                      <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <Badge variant="secondary" className="w-fit mb-2 bg-accent/20 text-accent">{item.category}</Badge>
                      <h3 className="font-headline font-semibold text-lg text-primary flex-grow">
                        <Link href={item.link} className="hover:underline">{item.title}</Link>
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2">{item.date}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
      </Carousel>
    </div>
  );
}
