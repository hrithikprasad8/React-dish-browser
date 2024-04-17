import React, { useContext, useState } from "react";
import { AllMenuContext } from "./AllMenuContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DispatchContext } from "../Context/Statewhereweshare";
import { StateContext } from "../Context/Statewhereweshare";

function Popup({
  actionafterclickingclose,
  currentDis,
  menusfulldetails,
  IntoTheCart,
  initialButtonState,
}) {
  const allMenus = useContext(AllMenuContext);
  const dispatch = useContext(DispatchContext);

  console.log("full menus showing", menusfulldetails);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  let dishdetails = allMenus
    .filter((item) => {
      return item.strMeal == currentDis;
    })
    .map((ite) => {
      return (
        <div class="popup-content-inner" style={{ paddingTop: "20px" }}>
          <div className="sub">
            <img
              style={{ width: "300px", height: "200px", borderRadius: "20px" }}
              src={ite.strMealThumb}
              alt=""
            />
            <h7 style={{ color: "white", fontSize: "25px" }}>
              {ite.strCategory}
            </h7>
          </div>
          <h7
            style={{
              position: "relative",
              top: "28px",
              fontSize: "18px",
              right: "150px",
              color: "white",
              fontStyle: "italic",
            }}
          >
            {ite.strMeal}
          </h7>
          <ul className="dish-ingrediants">
            <li>{ite.strIngredient1}</li>
            <li>{ite.strIngredient2}</li>
            <li>{ite.strIngredient3}</li>
            <li>{ite.strIngredient4}</li>
          </ul>
          <button
            style={{ position: "relative", right: "30%", top: "-10px" }}
            onClick={() =>{
              // IntoTheCart(ite.strMealThumb, ite.strMeal, setIsAddedToCart)
              dispatch({
                type: "add_to_cart",
                payload: {
                img: ite.strMealThumb,
                title: ite.strMeal
              }
            })
            setIsAddedToCart(true);
            toast.success("Item added to cart");
}
 }
          >
            {isAddedToCart ? "ADDED" : "ADD TO CART"}
          </button>
          <ToastContainer/>
          <h5 className="popup-close" onClick={actionafterclickingclose}>
            Close
          </h5>
        </div>
      );
    });
  return (
    <div className="popup">
      <div className="popup-content">
        {dishdetails}
    </div>
    </div>
  );
}

export default Popup;
