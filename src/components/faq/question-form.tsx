"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent } from "../ui/card"
import { Send } from "lucide-react"

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Họ và tên phải có ít nhất 2 ký tự.",
  }),
  email: z.string().email({
    message: "Địa chỉ email không hợp lệ.",
  }),
  question: z.string().min(10, {
    message: "Nội dung câu hỏi phải có ít nhất 10 ký tự.",
  }),
})

export default function QuestionForm() {
    const { toast } = useToast()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            question: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        toast({
            title: "Gửi câu hỏi thành công!",
            description: "Chúng tôi đã nhận được câu hỏi của bạn và sẽ sớm phản hồi.",
        })
        form.reset();
    }

  return (
    <Card className="shadow-lg">
        <CardContent className="p-6">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Họ và tên</FormLabel>
                        <FormControl>
                            <Input placeholder="Nguyễn Văn A" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input placeholder="nguyenvana@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                     <FormField
                    control={form.control}
                    name="question"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Nội dung câu hỏi</FormLabel>
                        <FormControl>
                            <Textarea
                                placeholder="Nhập câu hỏi của bạn tại đây..."
                                className="resize-none"
                                rows={5}
                                {...field}
                            />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                        <Send className="mr-2 h-4 w-4" />
                        Gửi câu hỏi
                    </Button>
                </form>
            </Form>
        </CardContent>
    </Card>
  )
}
