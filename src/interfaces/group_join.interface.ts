export interface EngagementItem {
  background: {
    image: string;
    primary_color: string;
    secondary_color: string;
  };
  cta: {
    clicked_url: string;
    color: string;
    text: string;
  };
  description: string;
  description_color: string;
  id: string;
  thumbnail: string;
  title: string;
  title_color: string;
  top_left_icon_img: string;
}

export interface GroupJoinEngagement {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: EngagementItem[];
}
