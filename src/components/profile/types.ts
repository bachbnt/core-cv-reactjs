export interface ProfileItem {
  avatar: string;
  description: string;
  skills: string[];
}
export default interface Props {
  item: ProfileItem;
}
