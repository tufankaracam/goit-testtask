import * as Yup from 'yup';

export const FormSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Name is required'),
  email: Yup.string().matches(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,})$$/, 'Email must be in format example@domain.com').required('Email is required'),
  date: Yup.date().required('Date is required'),
  comment: Yup.string(),
});

export const initialValues = {
  name: '',
  email: '',
  date: '',
  comment: '',
}
