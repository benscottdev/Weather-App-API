function CurrentWeather({ apiData }) {
  const weather = apiData;
  return (
    <div>
      {weather.resolvedAddress && (
        <>
          <div className="city-name">
            <h1>{weather.resolvedAddress}</h1>
          </div>
          <div className="current-weather-item">
            <p>
              <span id="current-temp-text">Temperature:</span>
              <span id="current-temp-value">
                {weather.currentConditions.temp} C°
              </span>
            </p>
            <p>
              <span id="current-cond-text">Conditions:</span>
              <span id="current-cond-value">{weather.description}</span>
            </p>
          </div>
        </>
      )}
    </div>
  );
}
export default CurrentWeather;
