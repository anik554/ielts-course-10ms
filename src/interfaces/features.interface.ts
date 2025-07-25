export interface IFeatureValue {
  icon: string;
  id: string;
  subtitle: string;
  title: string;
}

export interface IFeature {
  bg_color: string;
  description: string;
  name: string;
  order_idx: number;
  type: string;
  values: IFeatureValue[];
}