import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Target, CheckCircle } from 'lucide-react';

const chucNangItems = [
    'Tham mưu cho Hiệu trưởng về chiến lược, quy hoạch, kế hoạch phát triển dài hạn, trung hạn và hàng năm của Trường.',
    'Tổ chức, quản lý và giám sát công tác đầu tư, mua sắm tài sản, trang thiết bị, sửa chữa, xây dựng cơ bản.',
    'Quản lý và theo dõi việc sử dụng tài sản, cơ sở vật chất của toàn trường.',
    'Thực hiện công tác thống kê, báo cáo theo quy định của pháp luật và của Trường.',
];

const nhiemVuItems = [
    'Xây dựng các kế hoạch ngắn hạn, trung hạn và dài hạn.',
    'Lập kế hoạch và tổ chức thực hiện công tác đấu thầu, mua sắm trang thiết bị.',
    'Quản lý, khai thác và sử dụng hiệu quả cơ sở vật chất, trang thiết bị.',
    'Phối hợp với các đơn vị liên quan để triển khai các dự án đầu tư xây dựng.',
    'Tổng hợp, phân tích số liệu và lập các báo cáo thống kê định kỳ và đột xuất.',
];

export default function ChucNangNhiemVuPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-headline text-primary">Chức năng - Nhiệm vụ</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Chi tiết về chức năng và các nhiệm vụ chính của phòng Kế hoạch – Đầu tư.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 font-headline text-2xl text-primary">
                        <Briefcase className="h-7 w-7" />
                        Chức năng
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        {chucNangItems.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-accent mt-1 shrink-0" />
                                <span className="text-foreground/80">{item}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 font-headline text-2xl text-primary">
                        <Target className="h-7 w-7" />
                        Nhiệm vụ
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        {nhiemVuItems.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-accent mt-1 shrink-0" />
                                <span className="text-foreground/80">{item}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
