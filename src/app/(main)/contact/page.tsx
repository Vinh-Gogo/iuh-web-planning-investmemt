
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Facebook, MessageSquare, ThumbsUp, Map } from 'lucide-react';

const ZaloIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.16 16.32c-.173.28-.43.51-.726.654-.3.14-.633.21-.963.21-.57 0-1.126-.17-1.61-.51l-2.61-1.84-1.23.72c-1.46.86-2.99-1.03-1.92-2.34l1.39-1.72-2.88-2.02c-1.39-.98.12-3.02 1.76-2.03l2.81 1.68 1.45-.9c1.4-.87 3.03.95 2.03 2.31l-1.5 1.85 2.58 1.82c.42.3.69.76.72 1.26.03.5-.14 1-.45 1.35z"/>
  </svg>
);


export default function ContactPage() {
  return (
    <>
      <div className="bg-background min-h-screen">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-headline text-primary">Liên hệ</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Chúng tôi luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc của bạn.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
                <Card className="shadow-lg h-full">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl text-primary">Thông tin liên hệ</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex items-start gap-4">
                            <MapPin className="h-6 w-6 text-accent mt-1 shrink-0" />
                            <div>
                                <h4 className="font-semibold text-foreground">Địa chỉ</h4>
                                <p className="text-muted-foreground">Tầng trệt - Nhà E - 12 Nguyễn Văn Bảo, Phường 4, Gò Vấp, Thành phố Hồ Chí Minh</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Phone className="h-6 w-6 text-accent mt-1 shrink-0" />
                            <div>
                                <h4 className="font-semibold text-foreground">Điện thoại</h4>
                                <p className="text-muted-foreground">0283.8940.390, nội bộ: 124, 125, 585</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Facebook className="h-6 w-6 text-accent mt-1 shrink-0" />
                            <div>
                                <h4 className="font-semibold text-foreground">Facebook Fanpage</h4>
                                <a href="https://www.facebook.com/ptckt.iuh" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary hover:underline">
                                    facebook.com/ptckt.iuh
                                </a>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="lg:col-span-3 space-y-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary flex items-center gap-2">
                      <Map className="h-6 w-6" />
                      Bản đồ
                  </CardTitle>
                </CardHeader>
                <CardContent>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.858414424391!2d106.68913367579624!3d10.822205858607137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528e541434523%3A0x20f2a700a752e259!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2hp4buHcCBUUC5IQ00!5e0!3m2!1svi!2s!4v1716386470123!5m2!1svi!2s"
                        width="100%"
                        height="350"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-md w-full">
                    </iframe>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary uppercase">Liên hệ qua chat trên Fanpage</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="border rounded-lg overflow-hidden bg-white">
                        <div className="relative">
                            <Image
                                src="https://placehold.co/800x300.png"
                                alt="Facebook Cover"
                                width={800}
                                height={300}
                                className="w-full h-auto object-cover"
                                data-ai-hint="office building"
                            />
                             <div className="absolute bottom-4 left-4">
                                <Image
                                    src="https://placehold.co/100x100.png"
                                    alt="Fanpage Profile"
                                    width={100}
                                    height={100}
                                    className="rounded-full border-4 border-white"
                                    data-ai-hint="university logo"
                                />
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-bold text-gray-900 font-sans">Phòng Tài chính Kế toán-IUH</h3>
                            <p className="text-sm text-gray-500">25,123 people like this</p>
                            <div className="flex gap-2 mt-4">
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white flex-1">
                                    <ThumbsUp className="mr-2 h-4 w-4" /> Thích Trang
                                </Button>
                                <Button variant="secondary" className="flex-1">
                                    <MessageSquare className="mr-2 h-4 w-4" /> Gửi tin nhắn
                                </Button>
                            </div>
                        </div>
                    </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Link href="https://zalo.me/your_zalo_id" target="_blank" rel="noopener noreferrer" aria-label="Chat on Zalo" className="fixed bottom-8 right-8 z-50 bg-blue-500 rounded-full p-3 shadow-lg hover:bg-blue-600 transition-transform hover:scale-110">
        <ZaloIcon />
      </Link>
    </>
  );
}
