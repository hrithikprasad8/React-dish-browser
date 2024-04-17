import React, { useState, useEffect } from "react";
export const AllMenuContext = React.createContext();

export const AllMenus = (props) => {
  let [initialData, setFunctionData] = useState([]);
  async function fetchDataFromUrl() {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";

    let response = await fetch(API_URL);
    let data = await response.json();
    console.log("simply data means",data)

    setFunctionData(data.meals);
  }
  useEffect(() => {
    fetchDataFromUrl();
  }, []);

  return (
    <AllMenuContext.Provider value={initialData}>
      {props.children}
    </AllMenuContext.Provider>
  );
};
