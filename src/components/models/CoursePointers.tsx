import type { Section } from "@/interfaces/course.interface";
import { Card, CardContent } from "../ui/card";
import { useEffect, useState } from "react";
import SectionName from "./SectionName";
import type { IPointer } from "@/interfaces/pointer.interface";
import { Check } from "lucide-react";

interface ISectionData {
  sectionData: Section[];
}

const CoursePointers = ({ sectionData }: ISectionData) => {
  const [pointersData, setPointersData] = useState<IPointer[]>([]);

  useEffect(() => {
    const getPointersData = () => {
      const filteredFeaturesData = sectionData.filter(
        (insData) => insData.type === "pointers"
      );
      if (filteredFeaturesData) {
        setPointersData(filteredFeaturesData);
      } else {
        setPointersData([]);
      }
    };
    getPointersData();
  }, [sectionData]);

  return (
    <div className="w-10/12 mx-auto">
      {pointersData && <SectionName sectionname={pointersData[0]?.name} />}
      <Card className="w-[60%]">
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pointersData[0]?.values.map((data, index) => (
              <div key={index} className="flex items-start gap-2">
                <Check className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <p className="text-lg" >
                  {data.text}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CoursePointers;
