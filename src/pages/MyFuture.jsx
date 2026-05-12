const MyFuture = () => {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1>Моє майбутнє 🚀</h1>

        <ol style={styles.list}>
          <li>Стати сильним Frontend-розробником</li>
          <li>Вивчити React та TypeScript</li>
          <li>Працювати в IT-компанії</li>
        </ol>

        <blockquote style={styles.quote}>
          "Never stop learning"
        </blockquote>
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
    color: "white",
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
  },

  list: {
    lineHeight: "2",
  },

  quote: {
    marginTop: "30px",
    color: "#00bfff",
    fontStyle: "italic",
  },
};

export default MyFuture;