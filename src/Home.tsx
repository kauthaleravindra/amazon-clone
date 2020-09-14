import React from "react";
import "./Home.scss";
import Product from "./Product";
const Home = () => {
  return (
    <div className="home">
      <div className="home__banner">
        <img
          className="home__bannerImage"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
      </div>

      <div className="home__product">
        <Product
          id="1234"
          title="this is the title"
          price={11.44}
          rating={4}
          img="https://www.hilaptop.com/userdata/public/gfx/506376f096197287d7849dfeb4aacbf4.jpg"
        />
        <Product
          id="1235"
          title="TAFTA Big Trolly Top Loading Washing Machine Heavy Dutyd stand For Washing Machine & Refrigerator Stand with Stopper etc for every top loading washing machine"
          price={10}
          rating={3}
          img="https://m.media-amazon.com/images/I/61JeJKWBWNL._AC_UY218_.jpg"
        />
      </div>
      <div className="home__product">
        <Product
          id="1236"
          title="Panasonic 6.5 kg 5 Star Semi-Automatic Top Loading Washing Machine (NA-W65E5ARB, Blue, Powerful Motor)"
          price={11.44}
          rating={2}
          img="https://m.media-amazon.com/images/I/711JIPAuVhL._AC_UY218_.jpg"
        />
        <Product
          id="1237"
          title="MASTRENA Analogue-Digital Men's Watch (Multicolour Dial Black Colored Strap)"
          price={112.44}
          rating={4}
          img="https://m.media-amazon.com/images/I/71qxjotl3kL._AC_UY218_.jpg"
        />
        <Product
          id="1238"
          title="Noise Colorfit Pro 2 Full Touch Control Smart Watch Jet Black"
          price={11.44}
          rating={4}
          img="https://m.media-amazon.com/images/I/6113mS+xhyL._AC_UL320_.jpg"
        />
      </div>
      <div className="home__product">
        <Product
          id="1239"
          title="Samsung Galaxy Watch Active 2 (Bluetooth, 44 mm) - Black, Aluminium Dial, Silicon Straps"
          price={11.44}
          rating={4}
          img="https://images-na.ssl-images-amazon.com/images/I/61uej9efKYL._SX679_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
