import * as yup from 'yup';

export const chatBotValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  user_id: yup.string().nullable(),
});
