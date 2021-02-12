import React from "react";

export default function TopDishes() {
  return (
    <>
      <div className="TopDishes" style={{ marginTop: "5%" }}>
        <h2>محبوب ترین ها</h2>
        <p>
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است...
        </p>
        <div
          className="container row justify-content-center "
          style={{ marginRight: "auto", marginLeft: "auto", marginTop: "5%" }}
        >
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 ">
            <div className="col-md-4 col-sm-6">
              <div className="box">
                <img alt="" src="./d1.jpg" />

                <div className="box-content">
                  <h3 className="title">Dish name</h3>
                  <span className="post">Ingredients</span>
                </div>
                <ul className="icon">
                  <li>
                    <a href="/">
                      <i className="fa fa-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-link"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 ">
            <div className="col-md-4 col-sm-6">
              <div className="box">
                <img alt="" src="./d2.jpg" />
                <div className="box-content">
                  <h3 className="title">Dish name</h3>
                  <span className="post">Ingredients</span>
                </div>
                <ul className="icon">
                  <li>
                    <a href="/">
                      <i className="fa fa-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-link"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 ">
            <div className="col-md-4 col-sm-6">
              <div className="box">
                <img alt="" src="./d3.jpg" />
                <div className="box-content">
                  <h3 className="title">Dish name</h3>
                  <span className="post">Ingredients</span>
                </div>
                <ul className="icon">
                  <li>
                    <a href="/">
                      <i className="fa fa-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-link"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
