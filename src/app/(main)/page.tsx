import Banner from '@/components/home/banner';
import NewsSlider from '@/components/home/news-slider';
import CalendarWidget from '@/components/shared/calendar-widget';

export default function HomePage() {
  return (
    <div className="bg-background">
      <Banner />
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2">
            <NewsSlider />
          </div>
          <div className="mt-8 lg:mt-0">
            <CalendarWidget />
          </div>
        </div>
      </div>
    </div>
  );
}
