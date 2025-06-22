import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Workflow } from 'lucide-react';

export default function SoDoToChucPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-headline text-primary">Sơ đồ tổ chức</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Cấu trúc tổ chức của phòng Kế hoạch – Đầu tư.
          </p>
        </div>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline text-2xl text-primary">
                <Workflow className="h-6 w-6" />
                Sơ đồ
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center items-center">
            <Image
              src="https://placehold.co/800x600.png"
              alt="Sơ đồ tổ chức phòng Kế hoạch - Đầu tư"
              width={800}
              height={600}
              className="rounded-md max-w-full h-auto"
              data-ai-hint="organization chart"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
