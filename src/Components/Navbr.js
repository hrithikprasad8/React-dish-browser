import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { StateContext } from "../Context/Statewhereweshare";

const Navbr = () => {
  const cartwish = useContext(StateContext);
  const totalItems = cartwish.cartItems.length;

  return (
    <div
      className="nav-main"
      style={{
        width: "100%",
        height: "120px",
        backgroundColor: "black",

        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        top: 0,
        zIndex: 9999,
      }}
    >
      <ul
        className="nav-main-sb"
        style={{
          display: "flex",
          width: "100%",
          height: "100px",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingRight: "100px",
          marginRight: "20px",
          alignItems: "flex-start",
          marginTop: "5px",
        }}
      >
        <li>
          <h3 style={{marginTop:"38px",fontWeight:"bold",color:"gray",fontSize:"larger"}}>Dish Browser</h3>
        </li>
        <li>
          <img
            style={{
              width: "100px",
              height: "95px",
              paddingTop: "15px",
              marginTop: "10px",
            }}
            src="https://t3.ftcdn.net/jpg/03/34/83/02/360_F_334830278_kJL9Z2h4KYU9kZaR5Ti71LK9GDsUAJtk.jpg"
            alt=""
          />
        </li>
        <li style={{ paddingTop: "50px" }}>
          <Link
            to="/"
            style={{
              color: "white",
              marginRight: "20px",
              textDecoration: "none",
              transition: "color 0.3s, border-bottom 0.3s",
            }}
            className="nav-link"
          >
            Home
          </Link>
        </li>
        <li style={{ paddingTop: "50px" }}>
          <Link
            to="Checkout"
            style={{
              color: "white",
              textDecoration: "none",
              transition: "color 0.3s, border-bottom 0.3s",
            }}
            className="nav-link"
          >
            Checkout <span style={{ color: "red" }}>{totalItems}</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbr;
