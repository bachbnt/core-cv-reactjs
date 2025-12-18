import { TextField } from '@components';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Props from './props';

const TextFormField = (props: Props) => {
  const { name = '' } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const { t } = useTranslation();

  const show = !!errors[name];
  const { ref, ...registerProps } = register(name);

  const binders = {
    inputRef: ref,
    ...registerProps,
    error: show,
    helperText: show ? t(errors[name]?.message as string) : undefined,
  };

  return <TextField {...binders} {...props} />;
};

export default TextFormField;
