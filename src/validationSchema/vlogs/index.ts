import * as yup from 'yup';

export const vlogValidationSchema = yup.object().shape({
  title: yup.string().required(),
  url: yup.string().required(),
  user_id: yup.string().nullable(),
});
