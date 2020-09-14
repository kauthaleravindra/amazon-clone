import React from "react";
import "./Header.scss";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
const Header = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </Link>
      </div>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link className="header__link" to="/login">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Ravindra,</span>
            <span className="header__optionLineTwo">SignIn</span>
          </div>
        </Link>
        <Link className="header__link" to="/">
          <div className="header__option">
            <span className="header__optionLineOne">Returns,</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link className="header__link" to="/">
          <div className="header__option">
            <span className="header__optionLineOne">Your,</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        <Link className="header__link" to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon className="header__shoping" />
            <span className="header__optionLineTwo header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
