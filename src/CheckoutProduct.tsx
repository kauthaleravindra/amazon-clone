import React from "react";
import "./CheckoutProduct.scss";
import { useStateValue } from "./StateProvider";
import { action } from "./Reducer";
interface IProps {
  title: string;
  price: any;
  img: string;
  id: string;
  rating: any;
}
function CheckoutProduct({ id, title, price, rating, img }: IProps) {
  const [, dispatch] = useStateValue();
  const removeItem = () => {
    dispatch({ type: action.remove, id });
  };
  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct__item">
        <img src={img} alt="" />
        <div className="checkoutProduct__itemInfo">
          <p className="checkoutProduct__title">{title}</p>
          <p>
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__itemRating">
            {Array(rating)
              .fill(1)
              .map((_, index) => (
                <span aria-label="show img" role="img" key={index}>
                  ⭐️
                </span>
              ))}
          </div>
          <button onClick={removeItem}>Remove from basket</button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
