import { Education } from 'src/models/education';
import { Experience } from 'src/models/experience';

export interface Props {
  data: Education[] | Experience[];
  renderItem: (item: Education | Experience) => JSX.Element;
}
