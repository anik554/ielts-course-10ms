import { extractPlainText } from "@/utils/common.utils";

interface IHeroSection {
  title: string;
  description: string;
}

const HeroSection = ({ title, description }: IHeroSection) => {
    
  const plainText = extractPlainText(description);
  return (
    <div className="bg-[#04021A] w-full h-[220px] text-white flex items-center">
      <div className="w-10/12 mx-auto">
        <div className="text-start">
          <div className="text-3xl mb-2">{title}</div>
          <div className="text w-6/12">{plainText}</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
