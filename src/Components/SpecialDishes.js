import React, { useContext, useState } from "react";
import Card from "./Card";
import Popup from "./Popup";
import { AllMenuContext } from "./AllMenuContext";
import AddToCart from "./AddToCart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SpecialDishes(props) {
  const allMenus = useContext(AllMenuContext);
  console.log("all menus seems like", allMenus);

  let [showPopUp, setShowPopUp] = useState(false);
  let [currentDis, setCurrentDis] = useState("");
  let [imageasperclick, setimageasperclick] = useState([]);

  let indexOfImages = 4;

  function actionforDishPopup(imghdrrciever) {
    setShowPopUp(true);
    setCurrentDis(imghdrrciever);
  }

  function actionafterclickingclose() {
    return setShowPopUp(false);
  }
  function IntoTheCart(recievedimage, recievedcat, setIsAddedToCart) {
    setIsAddedToCart(true);

    const isItemAlreadyAdded =
      imageasperclick.filter((item) => item.img === recievedimage).length > 0;
    if (!isItemAlreadyAdded) {
      setimageasperclick([
        ...imageasperclick,

        {
          img: recievedimage,
          fudtitle: recievedcat,
        },
      ]);
    }

    toast.success("Item added to cart", {});
  }

  let resdata = allMenus.map((menuItem, index) => {
    if (index < indexOfImages) {
      return (
        <Card menuItem={menuItem} actionforDishPopup={actionforDishPopup} />
      );
    }
  });
  return (
    <div className="special-dishes">
      {showPopUp && (
        <Popup
          actionafterclickingclose={actionafterclickingclose}
          currentDis={currentDis}
          IntoTheCart={IntoTheCart}
        />
      )}
      <div className="container">
        {imageasperclick.length > 0 ? (
          <AddToCart imageasperclick={imageasperclick} />
        ) : null}

        <div className="special-dishes-content text-center">
          <h3>Lets check out our dishes!</h3>
          <p>
            "Shop confidently knowing that each item is carefully selected for
            its freshness and quality"
          </p>
        </div>
        <div className="special-dishes-list">
          <ul className="flex flex-wrap">{resdata}</ul>
        </div>
      </div>
    </div>
  );
}

export default SpecialDishes;
