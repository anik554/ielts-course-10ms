import type { Section } from "@/interfaces/course.interface";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useEffect, useState } from "react";
import SectionName from "./SectionName";
import { formattedText } from "@/utils/common.utils";
import type { IFeature } from "@/interfaces/features.interface";

interface ISectionData {
  sectionData: Section[];
}

const CourseFeature = ({ sectionData }: ISectionData) => {
  const [featuresData, setFeaturesData] = useState<IFeature[]>([]);

  useEffect(() => {
    const getInstructorData = () => {
      const filteredFeaturesData = sectionData.filter(
        (insData) => insData.type === "features"
      );
      if (filteredFeaturesData) {
        setFeaturesData(filteredFeaturesData);
      } else {
        setFeaturesData([]);
      }
    };
    getInstructorData();
  }, [sectionData]);

  return (
    <div className="w-10/12 mx-auto">
      {featuresData && <SectionName sectionname={featuresData[0]?.name} />}
      <Card className="w-[60%]">
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuresData[0]?.values.map((data, index) => (
              <div key={index} className="flex items-start gap-4">
                <Avatar className="h-12 w-12 mt-1">
                  <AvatarImage src={data.icon} alt={data.title} />
                  <AvatarFallback>{data.title.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <h4 className="text-base font-semibold">{data.title}</h4>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">
                    {formattedText(data.subtitle)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseFeature;
