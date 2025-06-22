# Website Phòng Kế hoạch – Đầu tư – Trường Đại học Công nghiệp TP.HCM

## 1. Giới thiệu tổng quan về Website

Website này được xây dựng nhằm cung cấp một cổng thông tin chính thức cho Phòng Kế hoạch – Đầu tư của Trường Đại học Công nghiệp TP.HCM (IUH). [cite_start]Mục tiêu chính là tạo điều kiện thuận lợi cho việc đăng tải và tra cứu các văn bản, kế hoạch, dự án, thông báo, quyết định, và biểu mẫu liên quan đến hoạt động của Phòng. 

Website được thiết kế với hai khu vực chính:
* **Khu vực công khai:** Cho phép người dùng truy cập các thông tin như:
    * [cite_start]Trang chủ với banner giới thiệu nhiệm vụ và slider tin tức nổi bật. 
    * [cite_start]Giới thiệu về Phòng (Giới thiệu chung, Chức năng – Nhiệm vụ, Lịch sử & Thành tích). 
    * Cơ cấu Tổ chức nhân sự (Lãnh đạo, chuyên viên, thông tin liên hệ).
    * [cite_start]Tin tức – Thông báo được phân loại rõ ràng (Tin hoạt động, Thông báo mời chào giá, Tin tức cập nhật từ báo chí, Lịch công tác). 
    * [cite_start]Các Dự án – Kế hoạch (đang triển khai, đã hoàn thành, danh mục mua sắm thiết bị). 
    * [cite_start]Thư viện Văn bản – Biểu mẫu với bộ lọc thông minh (loại, cơ quan ban hành, năm) và khả năng tải xuống nhiều định dạng (PDF, DOCX). 
    * Phần Hỏi – Đáp (FAQ) và form gửi câu hỏi.
    * Trang Liên hệ với thông tin liên lạc và khả năng chat qua Fanpage.
* **Khu vực nội bộ:** Dành cho cán bộ phòng, với hệ thống quản lý nội dung (CMS) hỗ trợ soạn thảo WYSIWYG, quản lý phiên bản, lên lịch xuất bản, quy trình duyệt bài (soạn giả -> trưởng phòng), thư viện số và nhật ký kiểm tra (audit log).

[cite_start]Website được tối ưu hóa để hiển thị tốt trên nhiều thiết bị (máy tính, di động)  [cite_start]và hỗ trợ song ngữ Việt – Anh với khả năng chuyển đổi nhanh chóng. 

## 2. Công nghệ sử dụng

Dự án này được xây dựng dựa trên các công nghệ và nền tảng sau:

* **Frontend Framework:** Next.js (một framework React mạnh mẽ cho các ứng dụng web).
* **Styling:** Tailwind CSS (một framework CSS utility-first giúp xây dựng UI nhanh chóng và linh hoạt).
* **Backend & Database:** Google Firebase (sử dụng Firestore cho cơ sở dữ liệu NoSQL, Firebase Storage cho lưu trữ file, và Firebase Functions cho các chức năng backend không máy chủ).
* **AI Integration:** Genkit (có thể được sử dụng để tích hợp các tính năng AI, ví dụ như gợi ý tìm kiếm hoặc tạo nội dung).
* **Deployment:** Firebase Hosting (để triển khai website lên môi trường sản phẩm).
* **Version Control:** Git & GitHub (quản lý mã nguồn và cộng tác).

## 3. Hướng dẫn cách thực thi (Chạy dự án trên máy cá nhân)

Để chạy dự án này trên máy tính cá nhân của bạn, hãy làm theo các bước dưới đây:

### Bước 1: Cài đặt các công cụ cần thiết

Đảm bảo máy tính của bạn đã cài đặt:

* **Node.js & npm:** Bạn có thể tải Node.js (bao gồm npm) từ trang web chính thức: [https://nodejs.org/](https://nodejs.org/). Phiên bản Node.js được đề xuất là 18.x.x (kiểm tra yêu cầu cụ thể của Next.js và Firebase). Lưu ý, môi trường Firebase Studio bạn đang làm việc có vẻ yêu cầu Node.js phiên bản 20.11.1.
* **Git:** Tải xuống và cài đặt Git từ trang web chính thức: [https://git-scm.com/downloads](https://git-scm.com/downloads/).
* **Firebase CLI:** Cài đặt Firebase Command Line Interface (CLI) toàn cục nếu bạn có kế hoạch tương tác trực tiếp với Firebase từ terminal:
    ```bash
    npm install -g firebase-tools
    ```

### Bước 2: Clone dự án từ GitHub

1.  **Mở Terminal hoặc Command Prompt** trên máy tính của bạn.
2.  **Điều hướng đến thư mục** bạn muốn lưu trữ dự án:
    ```bash
    cd DuAnCuaToi
    ```
    (Thay `DuAnCuaToi` bằng đường dẫn thư mục mong muốn của bạn).
3.  **Clone repository** từ GitHub. Bạn cần sao chép URL HTTPS của repository từ trang GitHub của dự án này.
    ```bash
    git clone [URL_GITHUB_REPOSITORY_CỦA_BẠN]
    ```
    Ví dụ: `git clone https://github.com/your-username/iuh-website-clone.git`
4.  **Điều hướng vào thư mục dự án** sau khi clone thành công:
    ```bash
    cd iuh-website-clone
    ```

### Bước 3: Cài đặt Dependencies

Trong thư mục dự án vừa clone, chạy lệnh sau để cài đặt tất cả các gói phụ thuộc (npm packages) cần thiết:

```bash
npm install