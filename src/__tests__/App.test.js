/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-node-access */
import { render } from '@testing-library/react';
import App from '../App';
// import userEvent from '@testing-library/user-event';
// import { getEvents } from '../api';

describe('<App /> component', () => {
  let AppDOM;
  beforeEach(() => {
    AppDOM = render(<App />).container.firstChild;
  });

  test('renders list of events', () => {
    expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
  });

  test('renders CitySearch', () => {
    expect(AppDOM.querySelector("#city-search")).toBeInTheDocument();
  });

  test('renders NumberOfEvents textbox', () => {
    expect(AppDOM.querySelector("#NumberofEventsDisplayedTextBox")).toBeInTheDocument();
  });
}
);
