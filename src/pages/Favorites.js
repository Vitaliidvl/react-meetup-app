import { useContext } from 'react';
import FavoritesContext from '../store/favorites-contex';
import MeetupList from '../components/meetups/MeetupList';

const Favorites = () => {
  const favCtx = useContext(FavoritesContext);

  let content;
  if (favCtx.totalFavorites === 0) {
    return <p>You got no Favotites yet. Start adding some? </p>;
  } else {
    <MeetupList meetup={favCtx.favorites} />;
  }
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
};

export default Favorites;
