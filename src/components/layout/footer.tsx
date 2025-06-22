import Link from 'next/link';
import { Facebook, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS, COPYRIGHT_INFO } from '@/lib/constants';

const ZaloIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.16 16.32c-.173.28-.43.51-.726.654-.3.14-.633.21-.963.21-.57 0-1.126-.17-1.61-.51l-2.61-1.84-1.23.72c-1.46.86-2.99-1.03-1.92-2.34l1.39-1.72-2.88-2.02c-1.39-.98.12-3.02 1.76-2.03l2.81 1.68 1.45-.9c1.4-.87 3.03.95 2.03 2.31l-1.5 1.85 2.58 1.82c.42.3.69.76.72 1.26.03.5-.14 1-.45 1.35z"/>
  </svg>
);


export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Phòng Kế hoạch – Đầu tư</h3>
            <p className="text-primary-foreground/80">Trường Đại học Công nghiệp TP.HCM</p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Thông tin liên hệ</h3>
            <div className="space-y-2 text-primary-foreground/80">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <a href={`tel:${CONTACT_INFO.phone.replace(/\./g, '')}`} className="hover:underline">{CONTACT_INFO.phone}</a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Mạng xã hội</h3>
            <div className="flex items-center space-x-4">
              <Link href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-primary-foreground/80 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href={SOCIAL_LINKS.zalo} target="_blank" rel="noopener noreferrer" aria-label="Zalo" className="text-primary-foreground/80 hover:text-white transition-colors">
                <ZaloIcon />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-6 text-center text-xs text-primary-foreground/60">
          <p>{COPYRIGHT_INFO}</p>
        </div>
      </div>
    </footer>
  );
}
