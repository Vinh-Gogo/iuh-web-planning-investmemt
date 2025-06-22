'use client';

import * as React from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';

export default function CalendarWidget() {
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    // Set initial date only on the client
    setDate(new Date());
    setIsClient(true);
  }, []);

  const events: Record<string, string> = {
    '2024-07-25': 'Họp giao ban tháng 7',
    '2024-08-01': 'Bắt đầu triển khai dự án mới',
    '2024-08-05': 'Tập huấn PCCC',
  };

  const EventBadge = ({ day }: { day: Date }) => {
    const dateString = day.toISOString().split('T')[0];
    const eventTitle = events[dateString];
    if (eventTitle) {
      return <Badge className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 p-0 bg-accent"></Badge>
    }
    return null;
  };
  
  const selectedDay = date ? date.toISOString().split('T')[0] : '';
  const selectedEvent = events[selectedDay];

  return (
    <Card className="shadow-lg">
      <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
        <CardTitle className="font-headline text-xl">Lịch công tác</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {isClient ? (
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="p-3"
              components={{
                DayContent: (props) => (
                  <div className="relative">
                    {props.date.getDate()}
                    <EventBadge day={props.date} />
                  </div>
                )
              }}
              modifiers={{
                event: (day) => Object.keys(events).includes(day.toISOString().split('T')[0]),
              }}
              modifiersStyles={{
                event: { fontWeight: 'bold' }
              }}
            />
        ) : (
            <div className="p-3">
                <Skeleton className="h-[298px] w-full" />
            </div>
        )}
        <div className="p-4 border-t">
          <h4 className="font-headline font-semibold text-primary mb-2">Sự kiện đã chọn:</h4>
          {isClient && selectedEvent && date ? (
             <div className="bg-background p-3 rounded-md">
                <p className="font-bold text-accent">{date.toLocaleDateString('vi-VN')}</p>
                <p className="text-sm text-foreground">{selectedEvent}</p>
             </div>
          ) : (
            <p className="text-sm text-muted-foreground">Chưa có sự kiện nào được chọn.</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
