import React from "react";
const Signupvalid = () => {
  return (
    <div
      className="sign-up-page"
      style={{
        width: "70%",
        height: "500px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div className="vis-img" style={{ width: "58%", height: "500px" }}>
        <img
          src="https://hivelife.com/wp-content/uploads/2019/09/Noir-Dining-in-the-dark-Hive-Life-2.jpg"
          alt=""
          style={{ width: "100%", height: "500px" }}
        />
      </div>
      <div
        className="sign-up-mainsec"
        style={{ width: "55%", height: "500px" }}
      >
        <h5 style={{ color: "white", textAlign: "center", paddingTop: "60px" }}>
          Sign Up
        </h5>
        <p style={{ color: "white" }}>
          You are a step away from something great!
        </p>
        <form action="">
          <div className="form-group" style={{ marginTop: "20px" }}>
            <input
              type="text"
              id="FirstName"
              name="FirstName"
              placeholder="First Name"
              className="oval-input"
            />
          </div>

          <div className="form-group" style={{ marginTop: "20px" }}>
            <input
              type="text"
              id="Address"
              name="Address"
              placeholder="Address"
              className="oval-input"
            />
          </div>
          <div className="form-group" style={{ marginTop: "20px" }}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="oval-input"
            />
          </div>
          <div className="form-group" style={{ marginTop: "20px" }}>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="oval-input"
            />
          </div>
          <div className="form-group" style={{ marginTop: "20px" }}>
            <input type="checkbox" id="agreeToTerms" name="agreeToTerms" />
            <label htmlFor="agreeToTerms" style={{ color: "white" }}>
              I agree to terms of service
            </label>
          </div>
          <div className="form-group" style={{ marginTop: "20px" }}>
            <button
              type="submit"
              className="oval-inputs"
              style={{ color: "white" }}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signupvalid;
