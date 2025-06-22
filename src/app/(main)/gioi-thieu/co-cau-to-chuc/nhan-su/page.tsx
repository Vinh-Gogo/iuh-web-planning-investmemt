import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Users } from 'lucide-react';

const staff = [
  {
    name: 'Trưởng phòng ABC',
    role: 'Trưởng phòng',
    email: 'truongphong@iuh.edu.vn',
    avatar: 'https://placehold.co/100x100.png',
    initials: 'TP'
  },
  {
    name: 'Phó phòng XYZ',
    role: 'Phó Trưởng phòng',
    email: 'phophong@iuh.edu.vn',
    avatar: 'https://placehold.co/100x100.png',
    initials: 'PP'
  },
    {
    name: 'Chuyên viên 1',
    role: 'Chuyên viên',
    email: 'cv1@iuh.edu.vn',
    avatar: 'https://placehold.co/100x100.png',
    initials: 'C1'
  },
  {
    name: 'Chuyên viên 2',
    role: 'Chuyên viên',
    email: 'cv2@iuh.edu.vn',
    avatar: 'https://placehold.co/100x100.png',
    initials: 'C2'
  },
];

export default function NhanSuPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Nhân sự</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Đội ngũ cán bộ, nhân viên phòng Kế hoạch – Đầu tư.
          </p>
        </div>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline text-2xl text-primary">
              <Users className="h-6 w-6" />
              Danh sách nhân sự
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {staff.map((member) => (
                <Card key={member.email} className="text-center p-4 hover:shadow-md transition-shadow">
                  <Avatar className="mx-auto h-24 w-24 mb-4">
                    <AvatarImage src={member.avatar} alt={member.name} data-ai-hint="person portrait" />
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-headline font-bold text-lg text-primary">{member.name}</h3>
                  <p className="text-accent font-medium">{member.role}</p>
                  <p className="text-sm text-muted-foreground mt-2">{member.email}</p>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
