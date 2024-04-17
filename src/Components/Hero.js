import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero">
      <img src="https://s3-prod.crainsnewyork.com/AP20122747751608.jpg"></img>
      <div className="hero-container">
        <h2>It's all about good food & taste</h2>
        <p style={{ marginTop: "10px" }}>
          Join our community of food lovers and explore a world of culinary
          possibilities
        </p>
        <ul
          className="comb-btns"
          style={{ display: "flex", flexDirection: "row", marginTop: "2px" }}
        >
          <li>
            <button
              type="button"
              className="btn btn-warning order-button"
              style={{
                width: "150px",
                height: "60px",
                borderRadius: "15%",
                backgroundColor: "black",
                fontSize: "15PX",
                cursor: "pointer",
                transition: "all ease 0.3s",
                border: "solid 2px grey",
                color: "white",
              }}
            >
              ORDER NOW
            </button>
          </li>
          <li>
            <Link
              to="Signupvalid"
              style={{
                backgroundColor: "black",
                width: "150px",
                height: "60px",
                fontSize: "15PX",
                color: "lightblue",
                textDecoration: "none",
                transition: "color 0.3s, border-bottom 0.3s",
              }}
              className="my-link"
            >
              SIGN UP
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Hero;
