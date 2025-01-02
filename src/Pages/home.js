/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from "react";
import background from "../Images/123.gif";
import humidity from "../Images/humidity.png";
import wind from "../Images/wind.png";
import "./home.css";

function Home() {
  const [searchCity, Setsearchcity] = useState("Indore");
  const [weatherData, SetWeatherData] = useState("false");
  const handleChange = (event) => {
    Setsearchcity(event.target.value);
  };
  const search = async (city) => {
    try {
      let apiKey = "8273dd17a6d7864b3780fd9e15270c9a";
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      const data = await fetch(url).then((response) => response.json());
      console.log(data);
      SetWeatherData({
        humidity: data.main.humidity,
        temperature: data.main.temp,
        location: data.name,
        wind: data.wind.speed,
        icon1: data.weather[0].icon,
      });
    } catch (error) {}
  };

  useEffect(() => {
    if (searchCity) {
      search(searchCity);
    }
  }, [searchCity]);
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        overflow: "auto",
      }}
    >
      <center>
        <div
          style={{
            backgroundColor: "transparent",
            width: "400px",
            height: "600px",
            marginTop: "75px",
            backdropFilter: "blur(75px)",
            borderRadius: "50px",
          }}
        >
          <input
            type="text"
            placeholder="City Name"
            style={{
              width: "300px",
              height: "35px",
              borderRadius: "25px",
              borderColor: "none",
              border: "none",
              outline: "none",
              fontSize: "16px",
              marginTop: "25px",
              paddingLeft: "20px",
            }}
            value={searchCity}
            onChange={handleChange}
          />
          <br />
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.icon1}@2x.png`}
            alt="image"
            style={{ width: "150px", height: "150px" }}
          />
          <p
            style={{
              fontFamily: "serif",
              fontSize: "40px",
              paddingTop: "0px",
              color: "#000000",
              fontWeight: "bolder",
            }}
          >
            {weatherData.temperature}°C
          </p>
          <p style={{ fontSize: "35px", fontFamily: "serif" }}>
            {weatherData.location}
          </p>
          <div style={{ marginLeft: "125px", fontWeight: "bolder" }}>
            <div className="weather-data">
              <div className="col">
                <img src={humidity} alt="img" />
                <div>
                  <p>{weatherData.humidity}%</p>
                  <span>Humidity</span>
                </div>
              </div>
              <div>
                <img src={wind} alt="img" />
                <div>
                  <p>{weatherData.wind}km/h</p>
                  <span>Wind</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
}

export default Home;
