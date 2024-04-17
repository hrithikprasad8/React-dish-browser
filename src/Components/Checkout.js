import { useContext } from "react";
import { StateContext } from "../Context/Statewhereweshare";
import { DispatchContext } from "../Context/Statewhereweshare";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const cartwish = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const actionsAfterRemovingItem = (titlepick) => {
    dispatch({ type: "remove_part_item", payload: { titlepick } });
  };

  const RemoveWholeItems = () => {
    dispatch({ type: "remove_from_cart" });
  };

  return (
    <div className="wish-cart-item" style={{ marginTop: "40px" }}>
      <h3
        style={{ color: "#f2f7f2", textAlign: "center", fontStyle: "normal" }}
      >
        Your Wishlist Goes Here!
      </h3>

      {cartwish.cartItems.length > 0 && (
        <i
          class="bi bi-trash2-fill"
          style={{ position: "absolute", left: "80%" }}
          onClick={RemoveWholeItems}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="30"
            fill="grey"
            class="bi bi-trash2-fill"
            viewBox="0 0 16 16"
            style={{ cursor: "pointer", transition: "fill 0.3s" }}
            className="trash-icon"
          >
            <path d="M2.037 3.225A.7.7 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.7.7 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z" />
          </svg>
        </i>
      )}

      {cartwish.cartItems.length > 0 ? (
        <div
          style={{
            border: "solid 5px grey",
            width: "60%",
            backgroundImage:
              "url('https://images.pexels.com/photos/12419742/pexels-photo-12419742.jpeg?cs=srgb&dl=pexels-thom-gonzalez-12419742.jpg&fm=jpg')",

            height: "800px",
            margin: "0 auto",
            paddingLeft: "40px",
            paddingTop: "40px",
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
            flexDirection: "row",
            color: "white",
            backgroundColor: "black",
            borderRadius: "5%",
          }}
        >
          {cartwish.cartItems.map((item, index) => (
            <div key={index}>
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: "250px",
                  height: "250px",
                  borderRadius: "20%",
                  overflow: "hidden",
                }}
              />
              <h6
                style={{
                  color: "WHITE",
                  fontSize: "17px",
                  paddingTop: "20px",
                  fontStyle: "italic",
                }}
              >
                {item.title}
              </h6>
              <button
                style={{
                  width: "100px",
                  height: "50px",
                  marginTop: "5px",
                  marginLeft: "70px",
                  borderRadius: "10%",
                  backgroundColor: "black",
                  color: "white",
                  fontSize: "13px",
                  fontStyle: "normal",
                  border: "solid 1px grey",
                }}
                className="btnclse"
                //step 1
                onClick={() => {
                  actionsAfterRemovingItem(item.title);
                }}
              >
                REMOVE ITEM
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ textAlign: "center", fontStyle: "normal", color: "red" }}>
          Wishlist is empty !
        </p>
      )}
      {/* <div style={{ textAlign: "center", marginTop: "20px" ,color:"white"}}>
        <Link to="/checkout">Checkout ({totalItems})</Link>
      </div> */}
    </div>
  );
};

export default Checkout;
