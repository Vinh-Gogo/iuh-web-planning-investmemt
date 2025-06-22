# Website Phòng Kế hoạch – Đầu tư – Trường Đại học Công nghiệp TP.HCM

## 1. Giới thiệu tổng quan về Website

Website này được xây dựng nhằm cung cấp một cổng thông tin chính thức cho Phòng Kế hoạch – Đầu tư của Trường Đại học Công nghiệp TP.HCM (IUH). Mục tiêu chính là tạo điều kiện thuận lợi cho việc đăng tải và tra cứu các văn bản, kế hoạch, dự án, thông báo, quyết định, và biểu mẫu liên quan đến hoạt động của Phòng.

Website được thiết kế với hai khu vực chính:
* **Khu vực công khai:** Cho phép người dùng truy cập các thông tin như:
    * Trang chủ với banner giới thiệu nhiệm vụ và slider tin tức nổi bật.
    * Giới thiệu về Phòng (Giới thiệu chung, Chức năng – Nhiệm vụ, Lịch sử & Thành tích).
    * Cơ cấu Tổ chức nhân sự (Lãnh đạo, chuyên viên, thông tin liên hệ).
    * Tin tức – Thông báo được phân loại rõ ràng (Tin hoạt động, Thông báo mời chào giá, Tin tức cập nhật từ các trang báo, Lịch công tác).
    * Các Dự án – Kế hoạch (đang triển khai, đã hoàn thành, danh mục mua sắm thiết bị).
    * Thư viện Văn bản – Biểu mẫu với bộ lọc thông minh (loại, cơ quan ban hành, năm) và khả năng tải xuống nhiều định dạng (PDF, DOCX).
    * Phần Hỏi – Đáp (FAQ) và form gửi câu hỏi.
    * Trang Liên hệ với thông tin liên lạc và khả năng chat qua Fanpage.
* **Khu vực nội bộ:** Dành cho cán bộ phòng, với hệ thống quản lý nội dung (CMS) hỗ trợ soạn thảo WYSIWYG, quản lý phiên bản, lên lịch xuất bản, quy trình duyệt bài (soạn giả -> trưởng phòng), thư viện số và nhật ký kiểm tra (audit log).

Website được tối ưu hóa để hiển thị tốt trên nhiều thiết bị (máy tính, di động) và hỗ trợ song ngữ Việt – Anh với khả năng chuyển đổi nhanh chóng.

## 2. Công nghệ sử dụng

Dự án này được xây dựng dựa trên các công nghệ và nền tảng sau:

* **Frontend Framework:** Next.js (một framework React mạnh mẽ cho các ứng dụng web tĩnh và động).
* **Styling:** Tailwind CSS (một framework CSS utility-first giúp xây dựng UI nhanh chóng và linh hoạt).
* **Backend & Database:** Google Firebase (sử dụng Firestore cho cơ sở dữ liệu NoSQL, Firebase Storage cho lưu trữ file, và Firebase Functions cho các chức năng backend không máy chủ).
* **AI Integration:** Genkit (có thể được sử dụng để tích hợp các tính năng AI, ví dụ như gợi ý tìm kiếm hoặc tạo nội dung).
* **Deployment:** Firebase Hosting (để triển khai website lên môi trường sản phẩm).
* **Version Control:** Git & GitHub (quản lý mã nguồn và cộng tác).

## 3. Hướng dẫn cách thực thi (Chạy dự án trên máy cá nhân)

Để chạy dự án này trên máy tính cá nhân của bạn, hãy làm theo các bước dưới đây một cách tuần tự:

### Bước 1: Chuẩn bị máy tính của bạn

Trước khi bắt đầu, hãy đảm bảo máy tính của bạn đã cài đặt các công cụ sau:

* **Node.js & npm (hoặc Yarn):** Đây là môi trường để chạy JavaScript trên máy tính của bạn và quản lý các gói thư viện. Bạn nên cài đặt phiên bản **Node.js LTS (Long Term Support)** mới nhất.
    * Tải về từ trang chủ chính thức: [https://nodejs.org/](https://nodejs.org/).
    * Sau khi cài đặt, bạn có thể kiểm tra bằng cách mở Terminal/Command Prompt và gõ:
        ```bash
        node -v
        npm -v
        ```
* **Git:** Hệ thống quản lý phiên bản mã nguồn.
    * Tải về từ trang chủ chính thức: [https://git-scm.com/downloads](https://git-scm.com/downloads/).
    * Kiểm tra bằng cách gõ: `git --version`
* **Firebase CLI (Tùy chọn nhưng khuyến nghị):** Công cụ dòng lệnh để tương tác với các dịch vụ Firebase.
    * Mở Terminal/Command Prompt và chạy lệnh:
        ```bash
        npm install -g firebase-tools
        ```

### Bước 2: Tải mã nguồn về máy

Dự án được quản lý trên GitHub. Bạn sẽ sử dụng Git để tải mã nguồn về.

1.  **Mở Terminal hoặc Command Prompt** trên máy tính của bạn.
2.  **Chọn vị trí lưu dự án:** Sử dụng lệnh `cd` để điều hướng đến thư mục mà bạn muốn lưu trữ dự án. Ví dụ, nếu bạn muốn lưu vào thư mục `Projects` trong tài liệu của bạn:
    ```bash
    cd Documents/Projects
    ```
    (Nếu thư mục `Projects` chưa có, bạn có thể tạo nó bằng `mkdir Projects` trước, rồi sau đó `cd Projects`).
3.  **Clone (tải về) dự án:**
    * Truy cập vào trang GitHub của repository dự án này.
    * Tìm nút màu xanh lá cây có chữ **"Code"**, sau đó chọn tab **"HTTPS"** và sao chép đường link. Nó sẽ trông giống như `https://github.com/your-username/your-repository-name.git`.
    * Trong Terminal/Command Prompt, dán đường link đó vào lệnh `git clone`:
        ```bash
        git clone [DÁN_URL_TỪ_GITHUB_VÀO_ĐÂY]
        ```
        Ví dụ:
        ```bash
        git clone [https://github.com/your-username/iuh-website-clone.git](https://github.com/your-username/iuh-website-clone.git)
        ```
    * Lệnh này sẽ tạo một thư mục mới (với tên trùng với tên repository, ví dụ `iuh-website-clone`) và tải tất cả mã nguồn vào đó.
4.  **Di chuyển vào thư mục dự án:**
    ```bash
    cd iuh-website-clone
    ```

### Bước 3: Cài đặt các gói thư viện (Dependencies)

Mọi dự án Next.js đều cần các gói thư viện hỗ trợ.

* Trong Terminal/Command Prompt (đảm bảo bạn đang ở trong thư mục dự án `iuh-website-clone`), chạy lệnh sau để npm (hoặc Yarn) tải và cài đặt tất cả các gói cần thiết:
    ```bash
    npm install
    # Hoặc nếu bạn dùng Yarn:
    # yarn install
    ```
    Quá trình này có thể mất vài phút tùy thuộc vào tốc độ mạng của bạn.

### Bước 4: Cấu hình Firebase cục bộ (Quan trọng nếu bạn muốn chạy đầy đủ chức năng)

Để dự án Next.js của bạn có thể giao tiếp với các dịch vụ Firebase (như Firestore, Storage, Functions) trên máy cá nhân, bạn cần kết nối nó với dự án Firebase của bạn trên đám mây.

1.  **Đăng nhập vào Firebase (nếu chưa):**
    * Trong Terminal/Command Prompt, chạy lệnh:
        ```bash
        firebase login
        ```
    * Lệnh này sẽ mở một tab trình duyệt yêu cầu bạn đăng nhập bằng tài khoản Google đã liên kết với dự án Firebase của bạn.
2.  **Liên kết dự án Firebase cục bộ:**
    * Đảm bảo bạn đang ở trong thư mục gốc của dự án (`iuh-website-clone`).
    * Nếu bạn đã clone dự án từ Firebase Studio, các file cấu hình Firebase (`.firebaserc`, `firebase.json`) có thể đã có sẵn. Trong trường hợp đó, bạn có thể bỏ qua bước `firebase init`.
    * Nếu các file cấu hình Firebase chưa có (hoặc bạn muốn liên kết với một dự án Firebase khác), chạy lệnh:
        ```bash
        firebase init
        ```
        * Bạn sẽ được hỏi các câu hỏi về các tính năng Firebase muốn sử dụng (chọn Hosting, Firestore, Functions, Storage,...).
        * Khi được hỏi "Please select a Firebase project to associate with this directory", chọn **"Use an existing project"** và sau đó chọn tên dự án Firebase của bạn từ danh sách (ví dụ: `pkhdt-iuh` hoặc ID dự án `lea2b462`).
        * Theo hướng dẫn để cấu hình các mục khác như thư mục `public` cho Hosting (thường là `out` hoặc `public`), ngôn ngữ cho Functions (TypeScript), v.v.

### Bước 5: Chạy ứng dụng Next.js trên máy cá nhân

Sau khi tất cả các bước trên đã hoàn tất, bạn đã sẵn sàng để xem website của mình chạy trên máy cá nhân.

* Trong Terminal/Command Prompt (đảm bảo bạn vẫn đang ở trong thư mục gốc của dự án `iuh-website-clone`), chạy lệnh sau:
    ```bash
    npm run dev
    # Hoặc nếu bạn dùng Yarn:
    # yarn dev
    ```
* Sau khi lệnh này chạy thành công, bạn sẽ thấy một thông báo tương tự như:
    ```
    ready - started server on 0.0.0.0:3000, url: http://localhost:3000
    ```
* **Mở trình duyệt web của bạn** (ví dụ: Chrome, Firefox) và truy cập vào địa chỉ:
    `http://localhost:3000`

Bây giờ bạn sẽ thấy website Phòng Kế hoạch – Đầu tư của mình chạy cục bộ trên máy tính! Bạn có thể chỉnh sửa mã nguồn và thấy các thay đổi được cập nhật tự động trong trình duyệt.

---
Đây là một `README.md` đầy đủ và dễ hiểu hơn, giúp bất kỳ ai (kể cả bạn sau này) có thể dễ dàng thiết lập và chạy dự án.