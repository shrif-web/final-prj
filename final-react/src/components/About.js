import React from "react";

export default function Header() {
  return (
    <>
      <div className="About container" style={{ marginTop: "10%" }}>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8">
            <h1>درباره ...</h1>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
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
