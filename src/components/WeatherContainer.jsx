import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import CurrentWeather from "./CurrentWeather";
import SevenDays from "./SevenDays";

function WeatherContainer() {
  const [active, setActive] = useState("CurrentWeather");
  const [apiData, setApiData] = useState({});
  const [searchInput, setSearchInput] = useState("");
  const [period, setPeriod] = useState("");

  const currentWeatherFunc = () => {
    setActive("CurrentWeather");
    setPeriod("today");
  };

  const sevenWeatherFunc = () => {
    setActive("SevenDayWeather");
    setPeriod("next7days");
  };

  const handleSearch = (searchValue) => {
    setSearchInput(searchValue);
  };

  const apiKey = "V86PCUA227YRQU4L42X2KSJRD";
  const baseUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchInput}/${period}?unitGroup=metric&key=${apiKey}`;

  const getData = async () => {
    try {
      const response = await fetch(baseUrl);
      const data = await response.json();
      console.log(data);
      setApiData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="weather-container">
      <h1>WEATHER</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="buttons">
        <button onClick={currentWeatherFunc}>Current</button>
        <button onClick={sevenWeatherFunc}>7 Day</button>
      </div>
      <div>
        {active === "CurrentWeather" && <CurrentWeather apiData={apiData} />}
        {active === "SevenDayWeather" && <SevenDays apiData={apiData} />}
      </div>
    </div>
  );
}

export default WeatherContainer;
