import mockData from './mock-data';

export const extractLocations = (events) => {
  const extractLocations = events.map((event) => event.location);
  const locations = [...new Set(extractLocations)];
  return locations;
};

export const getEvents = async () => {
  return mockData;
}
