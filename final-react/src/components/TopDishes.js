import Parse from "../Parse.js";
import React, { useEffect ,useState } from "react";
import { Accordion, Card, Form, Button } from "react-bootstrap";
export default function TopDishes() {


  const [topDishes, setFoods] = useState([]);

  
  useEffect(() => {
    
    var scores = []
    var names =[]
    var Ingrdints =[]
    var srcs  =[]
    var links=[]
    var tops=[]
    const foods = Parse.Object.extend("Food");

    const query = new Parse.Query(foods);
    query.find().then((resp) => {
      console.log(resp);

      
      const fd = resp.map((x) => {
        
          scores.push(x.get('score'));
          names.push(x.get('name'));
          Ingrdints.push(x.get('Ingredients'));
          srcs.push(x.get("imagesrc"));
          links.push(x.get('Link'));
    
        
      });
      var len = scores.length;
      var sorted_score = [];
      sorted_score = scores.sort(function(a,b){return b-a});
      var first = scores.indexOf(sorted_score[0])
      var second = scores.indexOf(sorted_score[1])
      var  third = scores.indexOf(sorted_score[2])
      console.log((sorted_score[1]));


      setFoods([
        {Name : names[first] , Link:links[first] , Ingredients : Ingrdints[first] , src:srcs[first]},
        {Name : names[second] , Link:links[second] , Ingredients : Ingrdints[second] , src:srcs[second]},
        {Name : names[third] , Link:links[third] , Ingredients : Ingrdints[third] , src:srcs[third]
        },

        
      ]);
      
    });

  }, []);
  return (
    <>
      <div className="TopDishes" style={{ marginTop: "5%" }}>
        <h2>محبوب ترین ها</h2>
        <p>
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است...
        </p>


        <div className="col-md-8">
            <div
              className="container row"
              style={{ marginRight: "auto", marginLeft: "auto" }}
            >
              {topDishes.map((food, index) => (
                <div className="col-md-6">
                  <div
                    className="box"
                    style={{
                      width: "100%",
                      marginBottom: "30px",
                      height: "auto",
                    }}
                  >
                    <img  alt="" src={food.src} />

                    <div className="box-content">
                      <h3 className="title">{food.Name}</h3>
                      <span className="post">{food.Ingredients}</span>
                    </div>
                    <ul className="icon">
                      {/* <li>
                        <button onClick={function(){
                          handelremove(index);
                        }}>
                          <i className="fa fa-minus"></i>
                        </button>
                      </li> */}
                      <li>
                        <a href={food.Link}>
                          <i className="fa fa-link"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        
        {/* <div
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
        </div> */}
      </div>
    </>
  );
}
