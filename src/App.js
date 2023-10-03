import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberofEvents from './components/NumberOfEvents.js';
import { useState } from 'react';
import './App.css';
import { getEvents } from './api';

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);

  const fetchData = async () => {
    const allEvents = await getEvents();
    setEvents(allEvents.slice(0, currentNOE));
  }

  return (
    <div className="App">
      <CitySearch />
      <NumberofEvents />
      <EventList events={events} />
    </div>
  );
}

export default App;
