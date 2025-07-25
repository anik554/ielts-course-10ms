import type { Section } from "@/interfaces/course.interface";
import { Card, CardContent } from "../ui/card";
import { useEffect, useState } from "react";
import type { EngagementItem } from "@/interfaces/group_join.interface";
import { Button } from "../ui/button";

interface ISectionData {
  sectionData: Section[];
}

const GroupEngagement = ({ sectionData }: ISectionData) => {
  const [groupJoinData, setGroupJoinData] = useState<EngagementItem[]>([]);

  useEffect(() => {
    const getInstructorData = () => {
      const filteredInstructorData = sectionData
        .filter((insData) => insData.type === "group_join_engagement")
        .flatMap((section) => section.values);
      if (filteredInstructorData) {
        setGroupJoinData(filteredInstructorData);
      } else {
        setGroupJoinData([]);
      }
    };
    getInstructorData();
  }, [sectionData]);

  return (
    <div className="w-10/12 mx-auto mt-5">
      {groupJoinData.map((data, index) => (
        <Card
          key={index}
          className="w-[60%]"
          style={{
            backgroundImage: `url(${data.background.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <CardContent className="p-6 text-white">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 space-y-4">
                <div>
                  <img
                    src={data.top_left_icon_img}
                    alt=""
                    width={"80%"}
                    height={"auto"}
                  />
                </div>
                <h2 className="text-2xl font-bold">{data.title}</h2>
                <p className="text-lg">{data.description}</p>

                <Button className="mt-4 bg-[#15803D] text-white hover:bg-green-800 font-medium">
                  {data.cta.text}
                </Button>
              </div>

              <div className="flex-1 flex justify-center">
                <img
                  src={data.thumbnail}
                  alt="PDF thumbnail"
                  className="h-64 object-contain rounded"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default GroupEngagement;
