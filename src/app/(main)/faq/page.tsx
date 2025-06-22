import FaqAccordion from "@/components/faq/faq-accordion";
import QuestionForm from "@/components/faq/question-form";

export default function FaqPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-headline text-primary">Hỏi - Đáp</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Giải đáp các câu hỏi thường gặp và gửi câu hỏi mới cho chúng tôi.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
                <h2 className="text-2xl font-bold font-headline text-primary mb-4">Các câu hỏi thường gặp</h2>
                <FaqAccordion />
            </div>
            <div className="lg:col-span-2">
                 <h2 className="text-2xl font-bold font-headline text-primary mb-4">Gửi câu hỏi của bạn</h2>
                <QuestionForm />
            </div>
        </div>
      </div>
    </div>
  );
}
