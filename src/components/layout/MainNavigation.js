import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorites-contex';

const MainNavigation = () => {
  const favCtx = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React MeetUps</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">AllMeetUpsPage</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">
              Favorites
              <span className={classes.badge}>{favCtx.totalFavorites}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-meetup">NewMeetUp</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
