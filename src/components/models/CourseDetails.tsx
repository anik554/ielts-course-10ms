import type { Section } from "@/interfaces/course.interface";
import { Card, CardContent } from "../ui/card";
import { useEffect, useState } from "react";
import SectionName from "./SectionName";
import type { ICourseDetails } from "@/interfaces/course_details.interface";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Separator } from "../ui/separator";

interface ISectionData {
  sectionData: Section[];
}

const CourseDetails = ({ sectionData }: ISectionData) => {
  const [courseDetailsData, setCourseDetailsData] = useState<ICourseDetails[]>(
    []
  );

  useEffect(() => {
    const getInstructorData = () => {
      const filteredCourseData = sectionData.filter(
        (insData) => insData.type === "about"
      );
      if (filteredCourseData) {
        setCourseDetailsData(filteredCourseData);
      } else {
        setCourseDetailsData([]);
      }
    };
    getInstructorData();
  }, [sectionData]);

  return (
    <div className="w-10/12 mx-auto">
      {courseDetailsData && (
        <SectionName sectionname={courseDetailsData[0]?.name.toString()} />
      )}
      <Card className="w-[60%]">
        <CardContent className="p-4">
          {courseDetailsData[0]?.values.map((data,index) => (
            <Accordion
              type="single"
              collapsible
              className="w-full"
              key={data.id}
              defaultValue="item-0"
            >
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger>
                  <div className="text-lg" dangerouslySetInnerHTML={{ __html: data.title }} />
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <div className="text-lg text-justify" dangerouslySetInnerHTML={{ __html: data.description }} />
                </AccordionContent>
              </AccordionItem>
              {index !== courseDetailsData[0]?.values.length - 1 && (
                  <Separator  />
                )}
            </Accordion>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseDetails;
