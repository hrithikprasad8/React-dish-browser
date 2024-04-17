import React, { useState } from "react";

function Pagination(props) {
  console.log("filtered dishes array length", props.filteredinitial);
  console.log("wanted value", props.setDefaultPage);
  console.log("wanted value2", props.defaultPage);
  let filteredDishesCountShowingarray = [];

  for (
    let i = 1;
    i <= Math.ceil(props.filteredinitial.length / props.imagesPerImage);
    i++
  ) {
    filteredDishesCountShowingarray.push(i);
  }

  const paginationStyle = {
    color: "white",
    border:
      props.filteredinitial.length > 0 ? "border: 1px solid gray" : "none",
  };

  function actionsAfterClickonParticularpage(event) {
    console.log("action after clicking on page", event.target.id);
    let res = event.target.id;
    props.setDefaultPage(res);
  }

  let displayingPnoFormat = filteredDishesCountShowingarray.map((ite) => {
    return (
      <li
        key={ite}
        onClick={actionsAfterClickonParticularpage}
        id={ite}
        className={props.defaultPage == ite ? "active" : ""}
      >
        {ite}
      </li>
    );
  });

  return (
    <section>
      {props.filteredinitial.length > 0 && (
        <ul className="pagination flex" style={paginationStyle}>
          <li>{displayingPnoFormat}</li>
        </ul>
      )}
    </section>
  );
}

export default Pagination;
