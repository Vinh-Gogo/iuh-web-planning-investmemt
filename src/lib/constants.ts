export type NavLink = {
  href?: string;
  label: string;
  sublinks?: NavLink[];
};

export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Trang chủ' },
  { 
    label: 'Giới thiệu',
    href: '/gioi-thieu',
    sublinks: [
      { href: '/gioi-thieu/chuc-nang-nhiem-vu', label: 'Chức năng - Nhiệm vụ' },
      { 
        href: '/gioi-thieu/co-cau-to-chuc', 
        label: 'Cơ cấu tổ chức',
        sublinks: [
            { href: '/gioi-thieu/co-cau-to-chuc/so-do', label: 'Sơ đồ tổ chức' },
            { href: '/gioi-thieu/co-cau-to-chuc/nhan-su', label: 'Nhân sự' },
        ]
      },
    ]
  },
  { 
    label: 'Tin tức – Thông báo',
    href: '/tin-tuc',
    sublinks: [
      { href: '/tin-tuc', label: 'Tin tức' },
      { href: '/thong-bao', label: 'Thông báo' },
    ]
  },
  { href: '/projects', label: 'Dự án – Kế hoạch' },
  { href: '/documents', label: 'Văn bản – Biểu mẫu' },
  { href: '/faq', label: 'Hỏi – Đáp' },
  { href: '/contact', label: 'Liên hệ' },
];

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/khtdtiuh',
  zalo: 'https://zalo.me/your_zalo_id', // Replace with actual Zalo link
};

export const CONTACT_INFO = {
  phone: '0283.8940.390',
  address: '12 Nguyễn Văn Bảo, Phường 4, Quận Gò Vấp, Thành phố Hồ Chí Minh',
};

export const COPYRIGHT_INFO = '© 2024 Phòng Kế hoạch – Đầu tư – Trường Đại học Công nghiệp TP.HCM';
