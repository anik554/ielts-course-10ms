export interface IInstructorValue {
  description: string;
  has_instructor_page: boolean;
  image: string;
  name: string;
  short_description: string;
  slug: string;
}

export interface IInstructor {
  bg_color: string;
  description: string;
  name: string;
  order_idx: number;
  type: string;
  values: IInstructorValue[];
}
