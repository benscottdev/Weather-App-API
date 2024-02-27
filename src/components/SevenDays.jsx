function SevenDays({ apiData }) {
  const sevenDays = apiData.days;

  return (
    <div>
      <div className="city-name">
        <h1>{apiData.resolvedAddress}</h1>
      </div>
      <div className="seven-days-weather">
        {sevenDays.map((day, index) => (
          <p key={index} className="seven-day-item">
            <span id="date">{day.datetime}</span>{" "}
            <span id="temp-value">{day.tempmax}C°</span>
          </p>
        ))}
      </div>
    </div>
  );
}

export default SevenDays;
