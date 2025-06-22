import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Workflow, ArrowRight } from 'lucide-react';

export default function CoCauToChucPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Cơ cấu tổ chức</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Sơ đồ tổ chức và thông tin nhân sự của phòng Kế hoạch – Đầu tư.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline text-2xl text-primary">
                <Workflow className="h-6 w-6" />
                Sơ đồ tổ chức
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Xem sơ đồ tổ chức chi tiết của phòng Kế hoạch - Đầu tư.</p>
              <Button asChild className="bg-accent hover:bg-accent/90">
                <Link href="/gioi-thieu/co-cau-to-chuc/so-do">
                  Xem chi tiết <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline text-2xl text-primary">
                <Users className="h-6 w-6" />
                Nhân sự
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Thông tin về đội ngũ cán bộ, nhân viên của phòng.</p>
               <Button asChild className="bg-accent hover:bg-accent/90">
                <Link href="/gioi-thieu/co-cau-to-chuc/nhan-su">
                  Xem chi tiết <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
