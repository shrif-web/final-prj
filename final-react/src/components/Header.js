import React from "react";
import { Button } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <div className="App-header" style={{ marginTop: "1%" }}>
        <div className="row container">
          <div className="col-md-6"></div>
          <div className="col-md-6" style={{ marginTop: "20%" }}>
            <div>
              <h1>ChiPaz</h1>
              <p>
                با چی پز به سادگی در خانه، با مواد غذایی خود غذایی مناسب انتخاب کنید.
                چی پز دارای دستورالعمل‌هایی متنوع برای انواع غذاهاست . کافی است نام غذای مورد نظر و
             یا لیست مواد غذایی خود را جست و جو کنید.
              </p>
              <Button
                variant="outline-danger"
                size="sm"
                className="header-btn"
                href="/search"
                style={{
                  backgroundColor: "#f12f2e",
                  padding: "10px",
                  paddingRight: "30px",
                  paddingLeft: "30px",
                  borderRadius: "30px",
                  color: "white",
                }}
              >
                همین حالا امتحان کنید
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
