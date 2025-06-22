import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, TrendingUp, Zap, Award } from 'lucide-react';

const timelineItems = [
  {
    period: '2004 - 2010',
    title: 'Giai đoạn hình thành',
    description: 'Phòng Kế hoạch – Đầu tư được thành lập vào năm 2004, ngay sau khi Trường được nâng cấp từ Cao đẳng lên Đại học. Giai đoạn đầu, phòng tập trung vào việc xây dựng nền tảng, quy trình làm việc và ổn định tổ chức.',
    icon: Calendar,
  },
  {
    period: '2011 - 2020',
    title: 'Giai đoạn phát triển',
    description: 'Đây là giai đoạn phòng đã tham mưu và triển khai thành công nhiều dự án đầu tư lớn, góp phần hiện đại hóa cơ sở vật chất của nhà trường. Nhiều quy chế, quy định về quản lý tài sản, đầu tư được ban hành và hoàn thiện.',
    icon: TrendingUp,
  },
  {
    period: '2021 - nay',
    title: 'Giai đoạn đổi mới và hội nhập',
    description: 'Phòng Kế hoạch - Đầu tư tiếp tục đổi mới, ứng dụng công nghệ thông tin vào công tác quản lý, hướng tới mô hình quản trị đại học hiện đại, minh bạch và hiệu quả, đáp ứng yêu cầu của thời kỳ hội nhập quốc tế.',
    icon: Zap,
  },
];

const achievements = {
  title: 'Thành tích nổi bật',
  items: [
    'Hoàn thành xuất sắc nhiệm vụ trong nhiều năm liền.',
    'Bằng khen của Bộ trưởng Bộ Công Thương.',
    'Đóng góp quan trọng vào việc trường đạt chuẩn kiểm định chất lượng giáo dục quốc gia.',
  ],
  icon: Award,
};

export default function LichSuPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-headline text-primary">Lịch sử & Thành tích</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Các cột mốc quan trọng và thành tựu nổi bật của phòng Kế hoạch – Đầu tư.
          </p>
        </div>

        <div className="relative pl-8 md:pl-10 after:absolute after:inset-y-0 after:left-4 after:md:left-5 after:w-0.5 after:bg-border/60">
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative pl-8">
                <div className="absolute -left-5 top-0 flex items-center justify-center bg-primary rounded-full h-10 w-10 text-primary-foreground ring-8 ring-background">
                  <item.icon className="h-5 w-5" />
                </div>
                <Card className="ml-4 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <p className="text-sm text-muted-foreground">{item.period}</p>
                    <CardTitle className="font-headline text-xl text-primary">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}

            <div className="relative pl-8">
              <div className="absolute -left-5 top-0 flex items-center justify-center bg-accent rounded-full h-10 w-10 text-accent-foreground ring-8 ring-background">
                <achievements.icon className="h-5 w-5" />
              </div>
              <Card className="ml-4 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="font-headline text-xl text-accent">{achievements.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-foreground/80">
                    {achievements.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
