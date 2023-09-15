const NumberofEvents = ({ setCurrentNOE, setErrorAlert }) => {

  const handleInputChanged = (event) => {
    const value = event.target.value;

    value(isNaN) ? setErrorAlert('Please enter a number between 1 and 50') : setCurrentNOE(value);
    value > 50 ? setErrorAlert('Please enter a number between 1 and 50') : setCurrentNOE(value);
    value <= 1 ? setErrorAlert('Please enter a number between 1 and 50') : setCurrentNOE(value);
    value === '' ? setErrorAlert('Please enter a number between 1 and 50') : setCurrentNOE(value);
  };
  return (
    <div className="NumberofEvents">

      <input
        type="text"
        className="NumberofEventsDisplayed"
        placeholder="Number of Events Displayed"
        defaultValue={32}
        onChange={handleInputChanged}
      />
    </div>
  );
};

export default NumberofEvents;
