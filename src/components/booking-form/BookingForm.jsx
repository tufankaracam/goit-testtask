import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Bounce, toast } from 'react-toastify';
import DatePickerFiled from '../date-picker-field/DatePickerField';
import { initialValues, FormSchema } from '../../config';
import css from './BookingForm.module.css';

const BookingForm = () => {
  function onFormSubmit(values, { resetForm }) {
    console.log(values);
    toast.success('Your booking was recieved', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      transition: Bounce,
    });
    resetForm();
  }

  return (
    <div className={css.component}>
      <h3 className={css.title}>Book your campervan now</h3>

      <p className={css.subtitle}>Stay connected! We are always ready to help you.</p>

      <Formik
        initialValues={initialValues}
        onSubmit={onFormSubmit}
        validationSchema={FormSchema}>
        <Form>
          <div className={css.group}>
            <div className="input-group">
              <Field
                className="input-field"
                type="text"
                name="name"
                placeholder="Name*"
                autoComplete="off" />
            </div>

            <ErrorMessage
              name="name"
              component="span"
              className={css.error} />
          </div>

          <div className={css.group}>
            <div className="input-group">
              <Field
                className="input-field"
                type="text"
                name="email"
                placeholder="Email*"
                autoComplete="off" />
            </div>
            
            <ErrorMessage
              name="email"
              component="span"
              className={css.error} />
          </div>

          <div className={css.group}>
            <div className={`input-group ${css.datepicker}`}>
              <DatePickerFiled
                className="input-field"
                name="date"
                placeholderText="Booking date*" />
            </div>

            <ErrorMessage
              name="date"
              component="span"
              className={css.error} />
          </div>

          <div className={css.group}>
            <div className={`input-group ${css.textarea}`}>
              <Field
                className="input-field"
                type="text"
                name="comment"
                component="textarea"
                placeholder="Comment"
                rows="5" />
            </div>
          </div>

          <button type="submit" className={`button ${css.button}`}>Send</button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookingForm;
