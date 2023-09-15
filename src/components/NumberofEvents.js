const NumberofEvents = ({ setCurrentNOE, setErrorAlert }) => {

  const handleInputChanged = (event) => {
    const value = event.target.value;
    value < 1 ? setErrorAlert('Please enter a number greater than 0') : setErrorAlert('');
  };
  return (
    <div className="NumberofEvents">

      <input
        type="text"
        className="NumberofEventsDisplayed"
        placeholder="Number of Events Displayed"
        onChange={handleInputChanged}
      />
    </div>
  );
};
