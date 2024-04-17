import { createContext, useReducer, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DispatchContext = createContext();
const StateContext = createContext();

const Statewhereweshare = ({ children }) => {


  const initialstate = {
    cartItems: [],
  };

  const reducer = (state, action) => {
    console.log("state remains", state);
    switch (action.type) {
      case "add_to_cart":
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            { img: action.payload.img, title: action.payload.title },
          ],
        };

      case "remove_from_cart":
        // setItemsRemoved(true)
        return {
          ...state,
          cartItems: [],
        };

      case "remove_part_item":
        return {
          ...state, // Copy the current state
          cartItems: state.cartItems.filter(
            (item) => item.title !== action.payload.titlepick
          ), // Remove the item with a title matching the one in the payload
        };

      default: {
        return state;
      }
    }
  };

  let [state, dispatch] = useReducer(reducer, initialstate);

  return (
    <>
      <DispatchContext.Provider value={dispatch}>
        <StateContext.Provider value={state}>{children}</StateContext.Provider>
      </DispatchContext.Provider>
    </>
  );
};
export { DispatchContext, StateContext, Statewhereweshare };
