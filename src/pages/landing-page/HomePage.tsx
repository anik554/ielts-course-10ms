import CourseInstructor from "@/components/models/CourseInstructor";
import CourseFeature from "@/components/models/CourseFeature";
import HeroSection from "@/components/models/HeroSection";
import { useGetIeltsCourseQuery } from "@/redux/api/ieltsCourseApi";
import GroupEngagement from "@/components/models/GroupEngagement";

const HomePage = () => {
  const { data, isLoading, isError, error } = useGetIeltsCourseQuery("en");

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
    <div className="container">
      {course && (
        <>
          <HeroSection title={course.title} description={course.description} />
          <CourseInstructor sectionData={course.sections} />
          <CourseFeature sectionData={course.sections} />
          <GroupEngagement sectionData={course.sections} />
        </>
      )}
    </div>
  );
};

export default HomePage;
