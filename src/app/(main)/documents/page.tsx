import DocumentLibrary from "@/components/documents/document-library";

export default function DocumentsPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Văn bản – Biểu mẫu</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Thư viện tài liệu, văn bản và các biểu mẫu chính thức từ phòng Kế hoạch – Đầu tư.
          </p>
        </div>
        <DocumentLibrary />
      </div>
    </div>
  );
}
