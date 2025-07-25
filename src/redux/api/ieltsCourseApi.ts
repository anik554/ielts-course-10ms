import type { CourseResponse } from "@/interfaces/course.interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ieltsCourseApi = createApi({
  reducerPath: "ieltsCourseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.10minuteschool.com/discovery-service/api/v1/products/",
    prepareHeaders: (headers) => {
      headers.set("X-TENMS-SOURCE-PLATFORM", "web");
      return headers;
    },
    credentials: "omit",
  }),
  endpoints: (builder) => ({
    getIeltsCourse: builder.query<CourseResponse, string | void>({
      query: (lang = "en") => `ielts-course?lang=${lang}`,
    }),
  }),
});

export const { useGetIeltsCourseQuery } = ieltsCourseApi;
