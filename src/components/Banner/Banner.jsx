import React from "react";
import "./Banner.css";

const Banner = ({ bannerDishes }) => {
  return (
    <div className="banner">
      <img
        style={{ width: "100%", height: "auto" }}
        src="https://i.ibb.co/n7MYJDZ/banner.jpg"
        alt=""
      />
      <div className="overlay"></div>
      <div className="text">
        <h2 className="banner-title mb-3">Authentic Bengali Recipes <br /> from Top Chefs</h2>
        <p className="sub-title" id="banner-des">
          Discover the rich culinary heritage of Bengal with our collection of
          traditional recipes from the region. Browse recipes from top chefs and
          learn how to recreate your favorite dishes in your own kitchen.
        </p>
        <h1 className="my-5 banner-title">Our Top Rated Dishes</h1>
        <div className="row justify-content-center gx-5 gy-4">
          {
            bannerDishes?.map((bannerDish) => (
              <div id="bannerDishItem" key={bannerDish.id} className="col-md-4 d-flex flex-column align-items-center">
                  <img
                    src={bannerDish.img}
                    className="mb-2"
                  />
                  <h5 className="sub-title">{bannerDish.name}</h5>         
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Banner;
