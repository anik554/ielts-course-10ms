import { extractPlainText } from "@/utils/common.utils";
import { Card } from "../ui/card";
import type { MediaItem } from "@/interfaces/course.interface";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Button } from "../ui/button";
import type { ICheckList } from "@/interfaces/checkList.interface";
import { useLanguage } from "@/context/useLanguage";
import { Phone } from "lucide-react";

interface IHeroSection {
  title: string;
  description: string;
  mediaData: MediaItem[];
  checkListData: ICheckList[];
}

const HeroSection = ({
  title,
  description,
  mediaData,
  checkListData,
}: IHeroSection) => {
  const { language } = useLanguage();
  const plainText = extractPlainText(description);

  return (
    <div className="relative bg-[#04021A] w-full text-white pb-32">
      <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-[60%_40%] gap-6 pt-10">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">{title}</h1>
          <div className="text-yellow-400 font-medium">
            ★★★★★ (82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছে)
          </div>
          <p className="text-md text-gray-300 w-10/12">{plainText}</p>
        </div>
      </div>
      <Card className="absolute right-[5%] top-3/3 transform -translate-y-3/10 w-[400px] 2xl:w-[500px]  rounded-lg p-4 shadow-xl hidden md:block">
        <Carousel orientation="horizontal" className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {mediaData.map((item, index) => (
              <CarouselItem key={index} className="flex justify-center">
                {item.resource_type === "image" ? (
                  <img
                    src={item.resource_value}
                    alt={item.name}
                    className="rounded-lg object-contain h-60"
                  />
                ) : (
                  <iframe
                    width="100%"
                    height="250"
                    src={`https://www.youtube.com/embed/${item.resource_value}`}
                    title="YouTube video player"
                    className="rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[10px] top-2/4 -translate-y-1/2 z-11 opacity-100 visible" />
          <CarouselNext className="absolute right-[10px] top-2/4 -translate-y-1/2 z-10 opacity-100 visible" />
        </Carousel>
        <div className="text-center my-4">
          <div className="text-2xl font-bold text-green-600">
            ৳3850{" "}
            <span className="line-through text-gray-400 text-sm ml-2">
              ৳5000
            </span>
          </div>
          <div className="text-sm text-red-500 font-semibold">১১৫০ ৳ ছাড়</div>

          <Button className="bg-green-700 w-full hover:bg-green-800 mt-2 text-md text-white">
            {language ? "Enroll" : "কোর্সটি কিনুন"}
          </Button>
        </div>

        <div>
          <h2 className="text-xl font-semibold my-5">
            {language ? "What's in this course" : "এই কোর্সে যা থাকছে"}
          </h2>
        </div>
        <ul className="text-sm space-y-4">
          {checkListData.map((checkData) => (
            <li key={checkData.id} className="flex items-center gap-2">
              <img
                src={checkData.icon}
                alt="icon"
                className="w-4 h-4 dark:invert"
              />
              <span>{checkData.text}</span>
            </li>
          ))}
        </ul>
        
      </Card>
      {/* <div className="absolute right-[5%] top-[100%] mt-96 w-[400px] 2xl:w-[500px]">
        <h2>
          {language
            ? "To know more about the course"
            : "কোর্সটি সম্পর্কে বিস্তারিত জানতে"}
        </h2>
        <p>
          <Phone className="inline-block mr-1" />
          {language ? "Call (16910)" : "ফোন করুন (16910)"}
        </p>
      </div> */}
      
    </div>
  );
};

export default HeroSection;
