import { useCallback } from 'react';
import { ObjectSchema } from 'yup';

const useYupResolver = (validationSchema: ObjectSchema<any>) =>
  useCallback(
    async (data: any) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        };
      } catch (error: any) {
        console.log(error);
        return {
          values: {},
          errors: error.inner.reduce(
            (allErrors: any, currentError: any) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type,
                message: currentError.message,
              },
            }),
            {}
          ),
        };
      }
    },
    [validationSchema]
  );

export default useYupResolver;
