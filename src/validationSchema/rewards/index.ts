import * as yup from 'yup';

export const rewardValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  user_id: yup.string().nullable(),
});
