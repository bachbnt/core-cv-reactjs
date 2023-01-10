import { Education } from '@models/education';
import { Experience } from '@models/experience';

interface Props {
  data: Education[] | Experience[];
  renderItem: (item: Education | Experience) => JSX.Element;
}

export default Props;
