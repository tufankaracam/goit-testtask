import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  return (
    <header className={css.component}>
      <div className="container">
        <nav className={css.nav}>
          <img
            className={css.logo}
            src="/logo.svg"
            alt="logo" />

          <ul className={css.list}>
            <li className={css.item}>
              <NavLink to="/" className={buildLinkClass}>
                Home
              </NavLink>
            </li>

            <li className={css.item}>
              <NavLink to="/catalog" end className={buildLinkClass}>
                Catalog
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
