import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberofEvents from './components/NumberofEvents';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <CitySearch />
      <NumberofEvents />
      <EventList />
    </div>
  );
}

export default App;
