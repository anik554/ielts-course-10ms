export interface IPointerValue {
  color: string;
  icon: string;
  id: string;
  text: string;
}

export interface IPointer {
  bg_color: string;
  description: string;
  name: string;
  order_idx: number;
  type: string;
  values: IPointerValue[];
}
