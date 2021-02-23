export interface ExperienceItem {
  company: string;
  job: string;
  description: string;
  time: string;
}
export default interface Props {
  items: ExperienceItem[];
}
