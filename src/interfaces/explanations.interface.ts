export interface IFeatureExplanationValue {
  checklist: string[];
  file_type: "image" | "video";
  file_url: string;
  id: string;
  title: string;
  video_thumbnail: string;
}

export interface IFeatureExplanation {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: IFeatureExplanationValue[];
}