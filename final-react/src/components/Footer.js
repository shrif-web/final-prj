import React from "react";

export default function Footer() {
  return (
    <>
      <div className="footer" style={{ marginTop: "10%" }}>
        <div
          className="row justify-content-center "
          style={{
            marginRight: "auto",
            marginLeft: "auto",
            marginTop: "10%",
            padding: "5%",
          }}
        >
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <img alt="" src="./logo.png" width="100px" />
            <p>
            امروزه بسیاری از افراد برای یافتن دستورغذایی مطابق با مواد لازم دلخواه خود، میبایست انواع
سایتها و کتابهای مختلف را جستجو کنند. این امر گاهاً بسیار زمانبر و آزاردهنده است. این
معضل موجب شد تا این تیم درصدد ایجاد سایتی برای انتخاب دستوراتغذایی، راحتتر و سریعتر
از گذشته باشند.
            </p>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2">
            <h1 style={{ borderBottom: "1px solid #bbb" }}>منوی دسترسی سریع</h1>
            <ul className="list-unstyled">
              <li>
                <a href="/">صفحه اصلی</a>
              </li>
              <li>
                <a href="/search">صفحه جستجو</a>
              </li>
              <li>
                <a href="/">درباره ما </a>
              </li>
              <li>
                <a href="/">تماس با پشتیبانی </a>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
            <h1
              style={{
                alignContent: "center",
                textAlign: "center",
                fontSize: "0.9em",
              }}
            >
              با ما در ارتباط باشید
            </h1>
            <div className="row links" style={{ paddingRight: "32%" }}>
              <a href="/" className="pointer">
                <i className="fa fa-phone fa-lg white-text mr-md-3 fa-x p-2">
                  {" "}
                </i>
              </a>

              <a href="/" className="pointer">
                <i className="fa fa-whatsapp fa-lg white-text mr-md-3 fa-x p-2">
                  {" "}
                </i>
              </a>

              <a href="/" className="pointer">
                <i className="fa fa-instagram fa-lg white-text mr-md-3 fa-x p-2">
                  {" "}
                </i>
              </a>
            </div>
            <p style={{ textAlign: "center", paddingTop: "5%" }}>
              تهران، میدان آزادی، دانشگاه صنعتی شریف :)
              <br></br>
              تلفن 1: ******
              <br></br>
              تلفن 2: ******
              <br></br>
              <button className="btn outline-danger mt-4">
                {" "}
                پشتیبانی آنلاین
              </button>
            </p>
          </div>
        </div>
        <div className="container copyright">
          <div className="row">
            <div className="col-md-6">تمام حقوق این وب سایت محفوظ است</div>
            <div className="col-md-4"></div>
            <div className="col-md-2">آدرس ایمیل: info@gmail.com</div>
          </div>
        </div>
      </div>
    </>
  );
}
