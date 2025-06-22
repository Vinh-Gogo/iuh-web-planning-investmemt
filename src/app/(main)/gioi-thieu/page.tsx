import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export default function GioiThieuChungPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-headline text-primary">Giới thiệu chung</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Tổng quan về phòng Kế hoạch – Đầu tư, Trường Đại học Công nghiệp TP.HCM.
          </p>
        </div>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline text-2xl text-primary">
              <FileText className="h-6 w-6" />
              Về chúng tôi
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground/80 prose max-w-none">
            <p>
              Phòng Kế hoạch – Đầu tư là đơn vị chuyên môn trực thuộc Trường Đại học Công nghiệp Thành phố Hồ Chí Minh, có chức năng tham mưu và giúp Hiệu trưởng trong công tác quản lý, tổng hợp về các lĩnh vực: kế hoạch, thống kê; đầu tư, mua sắm và quản lý, sử dụng tài sản, trang thiết bị trong toàn trường.
            </p>
            <p>
              Chúng tôi cam kết xây dựng một môi trường làm việc chuyên nghiệp, hiệu quả, góp phần vào sự phát triển bền vững của nhà trường, hướng tới mục tiêu trở thành một trường đại học hàng đầu về ứng dụng và đổi mới sáng tạo.
            </p>
            <h3 className="font-headline text-xl text-primary pt-4">Tầm nhìn & Sứ mệnh</h3>
            <p>
              <strong>Tầm nhìn:</strong> Trở thành một bộ phận nòng cốt, tiên phong trong việc hoạch định chiến lược và quản lý nguồn lực, đảm bảo sự phát triển đồng bộ và hiện đại cho toàn trường.
            </p>
            <p>
              <strong>Sứ mệnh:</strong> Tham mưu hiệu quả cho Ban Giám hiệu về công tác kế hoạch, đầu tư và quản lý tài sản. Tối ưu hóa việc sử dụng các nguồn lực, đảm bảo tính minh bạch, công bằng và hiệu quả, phục vụ tốt nhất cho hoạt động đào tạo và nghiên cứu khoa học.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
