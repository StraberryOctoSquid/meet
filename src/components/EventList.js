import Event from "./Event";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";

const EventList = ({ events }) => {
  return (
    <div className="App">
      <CitySearch />
      <NumberOfEvents />
      <EventList events={events} />
    </div>
  );
}

export default EventList;