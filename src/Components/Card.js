function Card(props) {
  return (
    <li>
      <a
        href="javascript:;"
        onClick={() => props.actionforDishPopup(props.menuItem.strMeal)}
      >
        <img src={props.menuItem.strMealThumb} alt="" className="imgimg" />
        <h4 className="nameofimage" style={{ fontStyle: "italic" }}>
          {props.menuItem.strMeal}
        </h4>
      </a>
    </li>
  );
}

export default Card;
