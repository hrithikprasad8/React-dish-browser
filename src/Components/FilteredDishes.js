import React, { useContext, useEffect, useState } from "react";
import Pagination from "./Pagination";
import Card from "./Card";
import Popup from "./Popup";
import { AllMenuContext } from "./AllMenuContext";

function FilteredDishes(props) {
  const allMenus = useContext(AllMenuContext);

  let [showfiltererdpopup, setfiltererdpopup] = useState(false);
  let [currentDis, setCurrentDis] = useState("");

  let [filteredinitial, functionfiltered] = useState([]);
  let [clickecategoryname, functioncategoryname] = useState();
  let [activestate, functionactivestate] = useState("Beef");
  let [beefitemsres, setBeefItemsRes] = useState([]);
  let neednoofbeefsitems = 8;
  let [defaultPage, setDefaultPage] = useState(1);
  let [imagesPerImage, setImagesPerImage] = useState(4);

  let [initialCategoryData, setCategoryData] = useState([]);
  let [beefcategoryinitial, setfunctionbeefcategory] = useState([]);

  async function fetchCategoriesFromUrl() {
    const CATEG_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
    let categ_response = await fetch(CATEG_URL);
    let org_format = await categ_response.json();
    console.log("orgformat of categories",org_format)
    setCategoryData(org_format.categories);
  }
  async function fetchParticularcategorytoshowfirst() {
    const BEEFCATEG_URL =
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";
    let beefcateg_response = await fetch(BEEFCATEG_URL);
    let beef_org_format = await beefcateg_response.json();
    console.log("beefformat looks like",beef_org_format)
    setfunctionbeefcategory(beef_org_format.meals);
  }

  useEffect(() => {
    fetchCategoriesFromUrl();
    fetchParticularcategorytoshowfirst();
  }, []);

  function actionforDishPopup(imgheadrec) {
    setCurrentDis(imgheadrec);
    setfiltererdpopup(true);
  }

  function actionafterclickingclose() {
    return setfiltererdpopup(false);
  }

  let indexlastPage = defaultPage * imagesPerImage;
  let indexfirstPage = indexlastPage - imagesPerImage;

  let showonlyfourimages = Array.isArray(filteredinitial) ? (
    filteredinitial.slice(indexfirstPage, indexlastPage)
  ) : (
    <h6
      style={{
        color: "white",
        fontSize: "25px",
        paddingBottom: "10px",
        margin: "auto",
      }}
    >
      No datas found!
    </h6>
  );

  useEffect(() => {
    setBeefItemsRes(
      beefcategoryinitial.map((picker, index) => {
        if (index < neednoofbeefsitems) {
          return (
            <li className="beeflist">
              <img src={picker.strMealThumb} alt="" className="imgimg1" />
              <h4 className="bfclass" style={{ fontStyle: "italic" }}>
                {picker.strMeal}
              </h4>
            </li>
          );
        }
      })
    );
  }, [beefcategoryinitial]);

  function actionToListParticularItems(pitem) {
    if (pitem !== activestate) {
      setBeefItemsRes([]);
    }

    let filtrd = allMenus
      .filter((itm) => {
        return itm.strCategory === pitem;
      })
      .map((menuItem) => {
        return (
          <Card menuItem={menuItem} actionforDishPopup={actionforDishPopup} />
        );
      });

    if (filtrd.length === 0) {
      filtrd = (
        <h6
          style={{
            color: "white",
            fontSize: "25px",
            paddingBottom: "10px",
            margin: "auto",
          }}
        >
          No datas found!
        </h6>
      );
    }
    functionfiltered(filtrd);
    functioncategoryname(pitem);
    functionactivestate(pitem);
  }

  console.log("props of categories are", props.fetchingCategories);
  let categres = initialCategoryData.map((item) => {
    return (
      <li
        style={{ color: "white", fontStyle: "italic" }}
        className={item.strCategory == activestate ? "Active" : "category-item"}
        onClick={() => {
          actionToListParticularItems(item.strCategory);
        }}
      >
        {item.strCategory}
      </li>
    );
  });
  console.log("listed categ are ", categres);
  return (
    <div className="Filtered-dishes">
      {showfiltererdpopup && (
        <Popup
          currentDis={currentDis}
          actionafterclickingclose={actionafterclickingclose}
          menusfulldetails={props.allmenus}
        />
      )}

      <div className="container">
        <div className="Filtered-dishes-content">
          <h3>Lets go through different kind of food stuffs.</h3>
          <p>
            "Discover the joy of hassle-free food shopping with fast delivery
            right to your doorstep."
          </p>
        </div>
        <div className="Filtered-dishes-list">
          <ul
            className="Filtered-ul"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            {categres}
          </ul>
        </div>
        <div className="Filtered-dishes-showhere">
          <div className="initialshowingdata">
            <ul className="flex flex-wrap">{beefitemsres}</ul>
          </div>

          <ul className="flex flex-wrap">{showonlyfourimages}</ul>
        </div>

        <div
          className="pagination-showing-area"
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Pagination
            filteredinitial={filteredinitial}
            imagesPerImage={imagesPerImage}
            setDefaultPage={setDefaultPage}
            defaultPage={defaultPage}
          ></Pagination>
        </div>
      </div>
    </div>
  );
}

export default FilteredDishes;
