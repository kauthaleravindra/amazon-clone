import React from "react";
import "./Checkout.scss";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
const Checkout = () => {
  const [{ basket }] = useStateValue();
  return (
    <>
      {basket?.length === 0 ? (
        <div className="empty__basket">
          <h2>Your shopping basket is empty</h2>
          <p>
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            minima asperiores autem ipsum. Quidem delectus, harum accusamus in
            impedit repellat saepe ducimus exercitationem illum? Nihil vitae
            ullam obcaecati fuga reprehenderit.
          </p>
        </div>
      ) : (
        <div className="checkout">
          <div className="checkout__left">
            <div className="checkout__title">
              <h2>Your shopping basket</h2>
            </div>
            {basket.map((data: any) => (
              <div key={data.id}>
                <CheckoutProduct
                  id={data.id}
                  title={data.title}
                  price={data.price}
                  rating={data.rating}
                  img={data.img}
                />
              </div>
            ))}
          </div>
          <div className="checkout__right">
            <Subtotal />
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
