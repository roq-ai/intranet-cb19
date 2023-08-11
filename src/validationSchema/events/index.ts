import * as yup from 'yup';

export const eventValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  date: yup.date().required(),
  user_id: yup.string().nullable(),
});
