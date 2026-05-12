const AboutMe = () => {
  return (
    <div style={styles.page}>
      <div
        style={styles.card}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "scale(1.03)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <img
          src="https://i.pravatar.cc/150"
          alt=""
          style={styles.image}
        />

        <h1>Yura</h1>

        <p>
          Я студент та Frontend-розробник-початківець.
          Вивчаю React, JavaScript та сучасну веброзробку 🚀
        </p>

        <h2>Мої проєкти</h2>

        <div style={styles.buttons}>
          <a
            href="https://github.com/Yurii092/js-DOM2"
            target="_blank"
            rel="noreferrer"
            style={styles.button}
          >
            JS Project
          </a>

          <a
            href="https://github.com/Yurii092/react-router-lab"
            target="_blank"
            rel="noreferrer"
            style={styles.button}
          >
            React Project
          </a>
        </div>
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
    transition: "0.4s",
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
  },

  image: {
    width: "130px",
    borderRadius: "50%",
    marginBottom: "20px",
  },

  buttons: {
    marginTop: "20px",
  },

  button: {
    display: "inline-block",
    margin: "10px",
    padding: "12px 20px",
    background: "#00bfff",
    color: "white",
    borderRadius: "10px",
    textDecoration: "none",
    transition: "0.3s",
  },
};

export default AboutMe;