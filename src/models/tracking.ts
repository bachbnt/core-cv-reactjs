export type TrackingEvent = 'component_displayed' | 'component_clicked';
export type TrackingPageName =
  | 'page0_cv'
  | 'page1_home'
  | 'page2_about'
  | 'page3_resume'
  | 'page4_project'
  | 'page5_blog'
  | 'page6_service'
  | 'page7_contact'
  | 'page8_payment'
  | 'page_404_not_found';

export interface TrackingParams {
  page_name: TrackingPageName;
  page_path: string;
  component_name: string;
  item_name: string;
  [key: string]: string;
}
