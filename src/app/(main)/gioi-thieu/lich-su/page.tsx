import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Landmark } from 'lucide-react';

export default function LichSuPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Lịch sử phát triển</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Các cột mốc quan trọng trong quá trình hình thành và phát triển của phòng Kế hoạch – Đầu tư.
          </p>
        </div>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline text-2xl text-primary">
              <Landmark className="h-6 w-6" />
              Quá trình hình thành và thành tích
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-foreground/80 prose max-w-none">
            <div>
              <h3 className="font-headline text-xl text-primary">Giai đoạn hình thành (2004 - 2010)</h3>
              <p>Phòng Kế hoạch – Đầu tư được thành lập vào năm 2004, ngay sau khi Trường được nâng cấp từ Cao đẳng lên Đại học. Giai đoạn đầu, phòng tập trung vào việc xây dựng nền tảng, quy trình làm việc và ổn định tổ chức.</p>
            </div>
            <div>
              <h3 className="font-headline text-xl text-primary">Giai đoạn phát triển (2011 - 2020)</h3>
              <p>Đây là giai đoạn phòng đã tham mưu và triển khai thành công nhiều dự án đầu tư lớn, góp phần hiện đại hóa cơ sở vật chất của nhà trường. Nhiều quy chế, quy định về quản lý tài sản, đầu tư được ban hành và hoàn thiện.</p>
            </div>
            <div>
              <h3 className="font-headline text-xl text-primary">Giai đoạn đổi mới và hội nhập (2021 - nay)</h3>
              <p>Phòng Kế hoạch - Đầu tư tiếp tục đổi mới, ứng dụng công nghệ thông tin vào công tác quản lý, hướng tới mô hình quản trị đại học hiện đại, minh bạch và hiệu quả, đáp ứng yêu cầu của thời kỳ hội nhập quốc tế.</p>
            </div>
             <div>
              <h3 className="font-headline text-xl text-primary">Thành tích nổi bật</h3>
               <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Hoàn thành xuất sắc nhiệm vụ trong nhiều năm liền.</li>
                <li>Bằng khen của Bộ trưởng Bộ Công Thương.</li>
                <li>Đóng góp quan trọng vào việc trường đạt chuẩn kiểm định chất lượng giáo dục quốc gia.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
