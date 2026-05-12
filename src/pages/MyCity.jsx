// MyCity.jsx

import { useEffect, useState } from "react";

const MyCity = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch("https://goweather.herokuapp.com/weather/Kyiv")
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1>Київ 🇺🇦</h1>

        <p>
          Київ — столиця України та одне з найкрасивіших міст Європи.
        </p>

        {weather && (
          <>
            <h2>Погода</h2>

            <p>🌡 {weather.temperature}</p>
            <p>💨 {weather.wind}</p>
            <p>{weather.description}</p>
          </>
        )}
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #141e30, #243b55)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: "500px",
    background: "#1e1e1e",
    padding: "40px",
    borderRadius: "20px",
    textAlign: "center",
    color: "white",
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
  },
};

export default MyCity;