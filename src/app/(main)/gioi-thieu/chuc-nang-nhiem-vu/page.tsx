import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookCheck } from 'lucide-react';

export default function ChucNangNhiemVuPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Chức năng - Nhiệm vụ</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Chi tiết về chức năng và các nhiệm vụ chính của phòng Kế hoạch – Đầu tư.
          </p>
        </div>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline text-2xl text-primary">
              <BookCheck className="h-6 w-6" />
              Chức năng và Nhiệm vụ
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-foreground/80 prose max-w-none">
            <div>
              <h3 className="font-headline text-xl text-primary">Chức năng</h3>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Tham mưu cho Hiệu trưởng về chiến lược, quy hoạch, kế hoạch phát triển dài hạn, trung hạn và hàng năm của Trường.</li>
                <li>Tổ chức, quản lý và giám sát công tác đầu tư, mua sắm tài sản, trang thiết bị, sửa chữa, xây dựng cơ bản.</li>
                <li>Quản lý và theo dõi việc sử dụng tài sản, cơ sở vật chất của toàn trường.</li>
                <li>Thực hiện công tác thống kê, báo cáo theo quy định của pháp luật và của Trường.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline text-xl text-primary">Nhiệm vụ</h3>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Xây dựng các kế hoạch ngắn hạn, trung hạn và dài hạn.</li>
                <li>Lập kế hoạch và tổ chức thực hiện công tác đấu thầu, mua sắm trang thiết bị.</li>
                <li>Quản lý, khai thác và sử dụng hiệu quả cơ sở vật chất, trang thiết bị.</li>
                <li>Phối hợp với các đơn vị liên quan để triển khai các dự án đầu tư xây dựng.</li>
                <li>Tổng hợp, phân tích số liệu và lập các báo cáo thống kê định kỳ và đột xuất.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
