import css from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={css.component}>
      <h1 className={css.header}>404</h1>

      <h2 className={css.subheader}>Page not found</h2>
    </div>
  );
};

export default NotFound;
