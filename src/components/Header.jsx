import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Yura Portfolio</h2>

      <div>
        <Link
          to="/about"
          style={styles.link}
          onMouseOver={(e) => (e.target.style.color = "#00bfff")}
          onMouseOut={(e) => (e.target.style.color = "white")}
        >
          Про мене
        </Link>

        <Link
          to="/my-city"
          style={styles.link}
          onMouseOver={(e) => (e.target.style.color = "#00bfff")}
          onMouseOut={(e) => (e.target.style.color = "white")}
        >
          Моє місто
        </Link>

        <Link
          to="/my-future"
          style={styles.link}
          onMouseOver={(e) => (e.target.style.color = "#00bfff")}
          onMouseOut={(e) => (e.target.style.color = "white")}
        >
          Моє майбутнє
        </Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    background: "#111",
    boxShadow: "0 5px 20px rgba(0,0,0,0.5)",
  },

  logo: {
    color: "#00bfff",
  },

  link: {
    color: "white",
    marginLeft: "20px",
    textDecoration: "none",
    fontSize: "18px",
    transition: "0.3s",
  },
};

export default Header;