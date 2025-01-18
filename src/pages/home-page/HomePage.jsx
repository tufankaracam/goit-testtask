import { NavLink } from 'react-router-dom';
import css from './Home.module.css';

const HomePage = () => {
  return (
    <div className={css.component}>
      <img
        className={css.image}
        src="/home.png"
        alt="Home" />

      <div className={css.content}>
        <h1 className={css.title}>Campers of your dreams</h1>

        <h2 className={css.subtitle}>You can find everything you want in our catalog</h2>

        <NavLink to="/catalog" className="button">
          View Now
        </NavLink>
      </div>
    </div>
  );
}

export default HomePage;
