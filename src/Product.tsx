import React from "react";
import "./Product.scss";
import { useStateValue } from "./StateProvider";
import { action } from "./Reducer";
interface IProps {
  title: string;
  price: any;
  img: string;
  id: string;
  rating: any;
}
const Product = ({ title, price, img, rating, id }: IProps) => {
  const [, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({ type: action.add, item: { title, price, img, rating, id } });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill(1)
            .map((_, index) => (
              <span aria-label="show img" role="img" key={index}>
                ⭐️
              </span>
            ))}
        </div>
      </div>
      <img src={img} alt="" className="product__image" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
