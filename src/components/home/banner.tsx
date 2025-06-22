import Image from 'next/image';

export default function Banner() {
  return (
    <div className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center text-white overflow-hidden">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="IUH Campus"
        layout="fill"
        objectFit="cover"
        quality={80}
        className="brightness-50"
        data-ai-hint="university campus"
      />
      <div className="relative z-10 text-center p-4">
        <h1 className="font-headline text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight drop-shadow-lg">
          PHÒNG KẾ HOẠCH - ĐẦU TƯ
        </h1>
        <p className="mt-4 font-headline text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">
          ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH
        </p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
