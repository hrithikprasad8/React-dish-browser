const AddToCart = ({ imageasperclick, headercat }) => {
  let finres = imageasperclick.map((item) => {
    return (
      <div className="cart-item">
        <img src={item.img} alt="" />
        <h6 style={{ color: "white" }}>{item.fudtitle}</h6>
      </div>
    );
  });
  return (
    <div className="add-to-cart-wrapper">
      <div className="add-to-cart-item">
        <h4 style={{ color: "white" }}>Cart</h4>

        {finres}
      </div>
    </div>
  );
};

export default AddToCart;
