import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqItems = [
    {
      question: "Quy trình đề xuất một dự án mới như thế nào?",
      answer: "Để đề xuất một dự án mới, bạn cần điền vào biểu mẫu 'Đề xuất dự án' có sẵn trong mục Văn bản - Biểu mẫu, sau đó nộp về văn phòng phòng Kế hoạch - Đầu tư. Chúng tôi sẽ xem xét và phản hồi trong vòng 15 ngày làm việc.",
    },
    {
      question: "Làm thế nào để tra cứu thông tin về các kế hoạch đã được phê duyệt?",
      answer: "Tất cả các kế hoạch đã được phê duyệt đều được công bố công khai trên trang web này. Bạn có thể sử dụng công cụ tìm kiếm hoặc bộ lọc trong mục 'Văn bản - Biểu mẫu' để tra cứu thông tin chi tiết.",
    },
    {
      question: "Thời gian làm việc của phòng Kế hoạch - Đầu tư?",
      answer: "Phòng làm việc từ thứ Hai đến thứ Sáu. Sáng: 7:30 - 11:30, Chiều: 13:30 - 16:30. Thứ Bảy và Chủ Nhật nghỉ.",
    },
    {
      question: "Tôi cần liên hệ với ai để hỏi về vấn đề đầu tư cơ sở vật chất?",
      answer: "Vui lòng liên hệ trực tiếp với văn phòng qua số điện thoại 0283.8940.390 hoặc gửi email đến khtdt@iuh.edu.vn để được hướng dẫn cụ thể và sắp xếp cuộc hẹn nếu cần thiết.",
    },
    {
        question: "Các biểu mẫu thường dùng có thể tải về ở đâu?",
        answer: "Bạn có thể truy cập mục 'Văn bản - Biểu mẫu' trên thanh điều hướng. Tại đây, chúng tôi cung cấp đầy đủ các biểu mẫu cần thiết với nhiều định dạng file khác nhau để bạn thuận tiện tải về và sử dụng.",
    }
  ];
  

  export default function FaqAccordion() {
    return (
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
             <AccordionItem key={index} value={`item-${index}`} className="bg-white/50 border-b border-primary/10 rounded-lg mb-2 shadow-sm data-[state=open]:shadow-lg">
                <AccordionTrigger className="p-4 text-left font-headline text-primary hover:no-underline">
                    {item.question}
                </AccordionTrigger>
                <AccordionContent className="p-4 pt-0">
                    <p className="text-muted-foreground">{item.answer}</p>
                </AccordionContent>
            </AccordionItem>
        ))}
      </Accordion>
    )
  }
  