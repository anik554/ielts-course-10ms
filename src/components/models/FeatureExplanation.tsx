import type { Section } from "@/interfaces/course.interface";
import { Card, CardContent } from "../ui/card";
import { useEffect, useState } from "react";
import type { IFeatureExplanation } from "@/interfaces/explanations.interface";
import SectionName from "./SectionName";
import { Separator } from "../ui/separator";

interface ISectionData {
  sectionData: Section[];
}

const FeatureExplanation = ({ sectionData }: ISectionData) => {
  const [explanationData, setExplanationData] = useState<IFeatureExplanation[]>(
    []
  );

  useEffect(() => {
    const getExplanationData = () => {
      const filteredExplanationData = sectionData.filter(
        (insData) => insData.type === "feature_explanations"
      );
      if (filteredExplanationData) {
        setExplanationData(filteredExplanationData);
      } else {
        setExplanationData([]);
      }
    };
    getExplanationData();
  }, [sectionData]);

  return (
    <div className="w-10/12 mx-auto mt-5">
      {explanationData && (
        <SectionName sectionname={explanationData[0]?.name} />
      )}
      <Card className="w-[60%]">
        <CardContent className="p-6">
          {explanationData[0]?.values.map((data, index) => (
            <div
              key={index}
              className="grid  grid-cols-1 md:grid-cols-[60%_40%] gap-4"
            >
              <div>
                <h2 className="text-2xl font-bold mb-2">{data.title}</h2>
                <ul className="space-y-2 w-full text-justify">
                  {data.checklist.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-800">
                      <svg
                        className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-end items-center">
                <img
                  src={data.file_url}
                  alt={data.title}
                  width={"80%"}
                  className="object-cover"
                />
              </div>
              {index < explanationData[0].values.length - 1 && (
                <Separator className="w-full my-4 col-span-2" />
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default FeatureExplanation;
