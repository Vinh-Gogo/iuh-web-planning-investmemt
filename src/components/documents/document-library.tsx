
'use client';

import { useState } from 'react';
import { Download, FileText, Filter } from 'lucide-react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const documents = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  title: `Quyết định về việc ban hành Quy chế chi tiêu nội bộ ${2023 - (i % 5)}`,
  type: i % 3 === 0 ? 'Quyết định' : i % 3 === 1 ? 'Thông báo' : 'Biểu mẫu',
  issuingAuthority: i % 2 === 0 ? 'ĐH Công nghiệp TP.HCM' : 'Bộ Giáo dục và Đào tạo',
  year: `${2023 - (i % 5)}`,
  fileUrlPdf: `/path/to/doc${i + 1}.pdf`,
  fileUrlDocx: `/path/to/doc${i + 1}.docx`,
}));

const ITEMS_PER_PAGE = 10;

export default function DocumentLibrary() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(documents.length / ITEMS_PER_PAGE);
  const currentDocuments = documents.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <CardTitle className="font-headline text-2xl text-primary flex items-center gap-2">
                <Filter className="h-6 w-6"/>
                Bộ lọc tài liệu
            </CardTitle>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Select>
                <SelectTrigger><SelectValue placeholder="Loại văn bản" /></SelectTrigger>
                <SelectContent>
                    <SelectItem value="quyet-dinh">Quyết định</SelectItem>
                    <SelectItem value="thong-bao">Thông báo</SelectItem>
                    <SelectItem value="bieu-mau">Biểu mẫu</SelectItem>
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger><SelectValue placeholder="Cơ quan ban hành" /></SelectTrigger>
                <SelectContent>
                    <SelectItem value="dh-cn-hcm">ĐH Công nghiệp TP.HCM</SelectItem>
                    <SelectItem value="bo-gddt">Bộ Giáo dục và Đào tạo</SelectItem>
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger><SelectValue placeholder="Năm ban hành" /></SelectTrigger>
                <SelectContent>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                    <SelectItem value="2021">2021</SelectItem>
                </SelectContent>
            </Select>
            </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Mobile View: Card Layout */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
            {currentDocuments.map((doc) => (
                 <Card key={doc.id} className="flex flex-col bg-white/50">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-base text-primary">{doc.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm space-y-1 pb-4 flex-grow">
                        <p className="text-muted-foreground"><strong className="font-medium text-foreground">Loại:</strong> {doc.type}</p>
                        <p className="text-muted-foreground"><strong className="font-medium text-foreground">Cơ quan:</strong> {doc.issuingAuthority}</p>
                        <p className="text-muted-foreground"><strong className="font-medium text-foreground">Năm:</strong> {doc.year}</p>
                    </CardContent>
                    <CardFooter>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="sm" className="w-full">
                                    <Download className="h-4 w-4 mr-2" />
                                    Tải xuống
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-[calc(100vw-5rem)]">
                                <DropdownMenuItem>
                                    <a href={doc.fileUrlPdf} download className="flex items-center w-full">
                                        <FileText className="h-4 w-4 mr-2 text-red-500" />
                                        PDF
                                    </a>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <a href={doc.fileUrlDocx} download className="flex items-center w-full">
                                        <FileText className="h-4 w-4 mr-2 text-blue-500" />
                                        DOCX
                                    </a>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </CardFooter>
                 </Card>
            ))}
        </div>

        {/* Desktop View: Table Layout */}
        <div className="hidden md:block border rounded-md">
            <Table>
            <TableHeader>
                <TableRow>
                <TableHead className="font-headline">Tên văn bản</TableHead>
                <TableHead className="font-headline">Loại</TableHead>
                <TableHead className="font-headline">Cơ quan ban hành</TableHead>
                <TableHead className="font-headline">Năm</TableHead>
                <TableHead className="text-right font-headline">Tải về</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {currentDocuments.map((doc) => (
                <TableRow key={doc.id}>
                    <TableCell className="font-medium text-primary">{doc.title}</TableCell>
                    <TableCell>{doc.type}</TableCell>
                    <TableCell>{doc.issuingAuthority}</TableCell>
                    <TableCell>{doc.year}</TableCell>
                    <TableCell className="text-right">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm" className="w-9 p-0 sm:w-auto sm:px-3 sm:gap-2">
                                <Download className="h-4 w-4" />
                                <span className="hidden sm:inline">Tải xuống</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                                <a href={doc.fileUrlPdf} download className="flex items-center w-full">
                                    <FileText className="h-4 w-4 mr-2 text-red-500" />
                                    PDF
                                </a>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <a href={doc.fileUrlDocx} download className="flex items-center w-full">
                                    <FileText className="h-4 w-4 mr-2 text-blue-500" />
                                    DOCX
                                </a>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </div>
        <Pagination className="mt-6">
            <PaginationContent>
            <PaginationItem>
                <PaginationPrevious href="#" onClick={(e) => { e.preventDefault(); setCurrentPage(p => Math.max(1, p-1))}} />
            </PaginationItem>
            {Array.from({length: totalPages}, (_, i) => i + 1).map(page => (
                 <PaginationItem key={page}>
                    <PaginationLink href="#" isActive={currentPage === page} onClick={(e) => {e.preventDefault(); setCurrentPage(page)}}>
                        {page}
                    </PaginationLink>
                </PaginationItem>
            ))}
            <PaginationItem>
                <PaginationNext href="#" onClick={(e) => { e.preventDefault(); setCurrentPage(p => Math.min(totalPages, p+1))}}/>
            </PaginationItem>
            </PaginationContent>
        </Pagination>
      </CardContent>
    </Card>
  );
}
