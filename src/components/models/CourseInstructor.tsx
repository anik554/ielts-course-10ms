import type { Section } from "@/interfaces/course.interface";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useEffect, useState } from "react";
import type { IInstructorValue } from "@/interfaces/instructors.interface";
import SectionName from "./SectionName";
import { formattedText } from "@/utils/common.utils";

interface ISectionData {
  sectionData: Section[];
}

const CourseInstructor = ({ sectionData }: ISectionData) => {
  const [instructorData, setInstructorData] = useState<IInstructorValue[]>([]);

  useEffect(() => {
    const getInstructorData = () => {
      const filteredInstructorData = sectionData
        .filter((insData) => insData.type === "instructors")
        .flatMap((section) => section.values);
      if (filteredInstructorData) {
        setInstructorData(filteredInstructorData);
      } else {
        setInstructorData([]);
      }
    };
    getInstructorData();
  }, [sectionData]);

  return (
    <div className="w-10/12 mx-auto">
      {instructorData.length > 0 && (
        <SectionName sectionname={instructorData[0].short_description} />
      )}
      {instructorData.map((data, index) => (
        <Card key={index} className="w-[60%]">
          <CardContent className="flex items-center gap-4 p-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={data.image} alt={"name"} />
              <AvatarFallback>{"dsdssd"}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <h4 className="text-lg font-medium">{data.name}</h4>
              <pre className="text-sm text-muted-foreground">
                {formattedText(data.description)}
              </pre>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CourseInstructor;
