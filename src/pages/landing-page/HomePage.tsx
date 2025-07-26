import CourseInstructor from "@/components/models/CourseInstructor";
import CourseFeature from "@/components/models/CourseFeature";
import HeroSection from "@/components/models/HeroSection";
import { useGetIeltsCourseQuery } from "@/redux/api/ieltsCourseApi";
import GroupEngagement from "@/components/models/GroupEngagement";
import CoursePointers from "@/components/models/CoursePointers";
import CourseDetails from "@/components/models/CourseDetails";
import FeatureExplanation from "@/components/models/FeatureExplanation";
import { useLanguage } from "@/context/useLanguage";

const HomePage = () => {
  const { language } = useLanguage();
  const { data, isLoading, isError, error } = useGetIeltsCourseQuery(language ?"en" : "bn");

  if (isLoading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (isError) {
    console.error(error);
    return (
      <div className="text-center mt-10 text-red-500">
        Failed to load course data.
      </div>
    );
  }

  const course = data?.data;

  return (
    <div>
      {course && (
        <>
          <HeroSection title={course.title} description={course.description} mediaData={course.media} checkListData={course.checklist} />
          <CourseInstructor sectionData={course.sections} />
          <CourseFeature sectionData={course.sections} />
          <GroupEngagement sectionData={course.sections} />
          <CoursePointers sectionData={course.sections} />
          <CourseDetails sectionData={course.sections} />
          <FeatureExplanation sectionData={course.sections} />
        </>
      )}
    </div>
  );
};

export default HomePage;
