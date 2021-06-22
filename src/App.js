import { Route, Switch } from 'react-router-dom';
import AllMeetUpsPage from './pages/AllMeetUps';
import Favorites from './pages/Favorites';
import NewMeetUp from './pages/NewMeetUp';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetUpsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetUp />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
