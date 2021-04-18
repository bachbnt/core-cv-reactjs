export interface UIPage {
  name: string;
  path: string;
}

export interface UITimeline {
  title: string;
  subtitle: string;
  content?: string;
  time: string;
}

export interface UICard {
  title: string;
  subtitle: string;
  content?: string;
  image: string;
}
