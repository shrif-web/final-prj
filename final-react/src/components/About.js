import React from "react";

export default function Header() {
  return (
    <>
      <div className="About container" style={{ marginTop: "10%" }}>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8">
            <h1>درباره ...</h1>
            <p>
            امروزه بسیاری از افراد برای یافتن دستورغذایی مطابق با مواد لازم دلخواه خود، میبایست انواع
سایتها و کتابهای مختلف را جستجو کنند. این امر گاهاً بسیار زمانبر و آزاردهنده است. این
معضل موجب شد تا این تیم درصدد ایجاد سایتی برای انتخاب دستوراتغذایی، راحتتر و سریعتر
از گذشته باشند.              
            </p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <img
              alt=""
              src="./aboutpic.png"
              width="80%"
              height="90%"
              style={{ marginLeft: "-200px" }}
              className="zoom"
            />
          </div>
        </div>
      </div>
    </>
  );
}
