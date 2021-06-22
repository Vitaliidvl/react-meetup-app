import { useHistory } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetUp = () => {
  const history = useHistory();
  const addMeetupHandler = (meetupData) => {
    fetch(
      'https://react-meetup-application-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: { 'Content-type': 'applecation/json' },
      }
    ).then(() => {
      history.replace('/');
    });
  };
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetUp;