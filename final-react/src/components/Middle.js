import React from "react";

export default function Middle() {
  return (
    <>
      <div className="Middle" style={{ marginTop: "10%" }}>
        <div
          className="container row justify-content-center zoom"
          style={{ marginRight: "auto", marginLeft: "auto" }}
        >
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
          <div
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 text-center"
            style={{ marginTop: "15%", textAlign: "center", color: "white" }}
          >
            <h3>توضیح ...</h3>
            <p>
            امروزه بسیاری از افراد برای یافتن دستورغذایی مطابق با مواد لازم دلخواه خود، میبایست انواع
سایتها و کتابهای مختلف را جستجو کنند. این امر گاهاً بسیار زمانبر و آزاردهنده است. این
معضل موجب شد تا این تیم درصدد ایجاد سایتی برای انتخاب دستوراتغذایی، راحتتر و سریعتر
از گذشته باشند.            </p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
        </div>
      </div>
    </>
  );
}
