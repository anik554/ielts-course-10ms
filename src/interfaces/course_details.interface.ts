export interface ICourseDetailsValue {
  description: string;
  icon: string;
  id: string;
  title: string;
}

export interface ICourseDetails {
  bg_color: string;
  description: string;
  name: string;
  order_idx: number;
  type: string;
  values: ICourseDetailsValue[];
}