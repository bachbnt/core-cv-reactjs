import { useEffect, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import TextField from 'src/components/textField/textField';
import { Props } from './props';

const TextFormField = (props: Props) => {
  const { name = '' } = props;
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  useEffect(() => {
    register({ name });
  }, [register, name]);

  const { t } = useTranslation();

  const binders = useMemo(() => {
    const show = !!errors[name];

    return {
      value: watch(name) || '',
      inputRef: register,
      error: show,
      helperText: show ? t(errors[name].message) : undefined,
    };
  }, [name, register, watch, errors, t]);

  return <TextField {...binders} {...props} />;
};

export default TextFormField;
