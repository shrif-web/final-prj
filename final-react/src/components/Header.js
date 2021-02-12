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
              <h1>لورم ایپسوم متن ساختگی</h1>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              </p>
              <Button
                variant="outline-danger"
                size="sm"
                className="header-btn"
                href="#"
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
