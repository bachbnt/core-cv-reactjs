export interface ProjectItem {
  name: string;
  tech: string;
  cover: string;
  description: string;
}
export default interface Props {
  items: ProjectItem[];
}
