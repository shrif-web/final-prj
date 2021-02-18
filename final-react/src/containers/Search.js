
import React, { useState, useEffect  } from "react";
import { Accordion, Card, Form, Button } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import "./Home.css";
import "./Search.css";
import SearchHeader from "../components/SearchHeader";
import Footer from "../components/Footer.js";
import Parse from "../Parse.js";


export default function Search() {
  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    
    const Food = Parse.Object.extend("Food");
    const query = new Parse.Query(Food);
    const results = await query.find();

    var i;
    for (i = 0; i < results.length; i++) {
      allFoods[i] = results[i].get("name");
    }
    const Ingredient = Parse.Object.extend("Ingredient");
    const query2 = new Parse.Query(Ingredient);
    const results2 = await query2.find();
    var ings = {};
    for (i = 0; i < results2.length; i++) {
      if (results2[i].get("type") in ings){
        ings[results2[i].get("type")].push(results2[i].get("name"));
      }else{
        ings[results2[i].get("type")]=[results2[i].get("name")];
        
      }
    }
   
    var res =[];
    var ing;
    var i = 0;
    console.log(ings);
    for (ing in ings){
      res.push({id:i+1,category:ing,ingList:ings[ing]});
      i=i+1;
    }
    console.log(res);
    setIngredients(res);


  }

  const [allFoods,setAllFoods] = useState([]);

  const [resultFoods, setFoods] = useState([]);

  const [searchIngs, setSearchIngts] = useState([]);

  const [foodName, setFoodName] = useState("");

  const [ingredients, setIngredients] = useState([]);
  
  const [foodObjects,setFoodObjects]=useState([]);

  function onIngredientChange(e, name) {
    if (searchIngs.includes(name)) {
      var arr = searchIngs.filter(function (item) {
        return item !== name;
      });
      setSearchIngts(arr);
    } else {
      setSearchIngts([...searchIngs, name]);
    }
  }

  async function handleSearchByName(e) {
    // async function handleSubmit(event){
    // event.preventDefualt();
    // alert("start");
    
    const Food = Parse.Object.extend("Food");
    const query = new Parse.Query(Food);
    query.equalTo("name",String(foodName));
    const results = await query.find();
 
    console.log(results[0].get("name"));
    // alert(results.length);
    var ingredients2 = results[0].relation("ingredients");
    ingredients2 = await ingredients2.query().find();
    // alert("find2")
    var j=0;
    var mstr = "";
    for(let j = 0; j < ingredients2.length; j++){
      mstr=mstr+' - '+ingredients2[j].get("name");
    }
    mstr = mstr.substring(2,mstr.length);
    setFoodObjects([results[0]])
    // try{
    setFoods([{
      Name: results[0].get("name"),
      link: results[0].get("link"),
      Ingredients: mstr,
      src: results[0].get('imagesrc'),
      score:results[0].get("score")}
    ]);

  }

  async function handleSearchByCheck() {
    // alert(searchIngs[0]);
    // alert("Search by ings");
    var allSelectedFood = []
    var i;
    var foods =[];
    for (i = 0; i < searchIngs.length; i++) {
      const Food = Parse.Object.extend("Food");
      const Ingredient = Parse.Object.extend("Ingredient");
      const query = new Parse.Query(Food);
      const innerQuery = new Parse.Query(Ingredient);
      // alert(2);
      innerQuery.equalTo("name",searchIngs[i]);
      query.matchesQuery("ingredients",innerQuery);
      const res = await query.find();
      // alert(3);
      var i;
      for(i=0; i<res.length;i++){
        var ingredients2 = res[i].relation("ingredients");
        ingredients2 = await ingredients2.query().find();
        var j=0;
        var mstr = "";
        for(let j = 0; j < ingredients2.length; j++){
          mstr=mstr+' - '+ingredients2[j].get("name");
        }
        mstr = mstr.substring(2,mstr.length);

       foods.push({
        Name: res[i].get("name"),
        link: res[i].get("link"),
        Ingredients: mstr,
        src: res[i].get('imagesrc'),
        score:res[i].get("score")});
      
  
      console.log(res);

      }
      setFoodObjects(res);
    }
     
      setFoods(foods);
  }

  function validateForm() {
    return foodName.length > 0;
  }

  function validateForm2() {
    return searchIngs.length > 0;
  }

  function addtofavorit(idx){

    const f = foodObjects[idx];
    const new_score = f.get('score') +1;
    f.set('score',new_score);
    f.save();

    const favorit = Parse.Object.extend("Favorit");
    var fav = new favorit();
    fav.set("username",Parse.User.current().getUsername());
    fav.set("food" , resultFoods[idx]);
    fav.save();



  }
  return (
    <div className="Search container-fluid">
      <SearchHeader />

      <div className="row" style={{ marginTop: "5%" }}>
        <div className="col-md-1"></div>
        <div
          className="col-md-6"
          style={{
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              backgroundColor: "white",
              borderRadius: "20px",
              padding: "40px",
              marginBottom: "40px",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            }}
          >
            غذاهای مناسب برای شما
          </h2>
          <div className="row container" style={{marginTop:"10%", marginRight:"auto", marginLeft:"auto", paddingBottom:"10%"}}>
      {resultFoods.map((food, index) => (
                <div className="col-md-4">
                  <div
                    className="box"
                    style={{
                      width: "100%",
                      marginBottom: "30px",
                      height: "auto",
                    }}
                  >
                    <img alt="" src={food.src} />

                    <div className="box-content">
                      <h3 className="title">{food.Name}</h3>
                      <span className="post">{food.Ingredients}</span>
                    </div>
                    <ul className="icon">
                      <li>
                        <button  onClick={function(){
                          addtofavorit(index)
                        }}>
                          <i className="fa fa-heart"></i>
                        </button>
                      </li>
                      <li>
                        <a href={food.link}>
                          <i className="fa fa-link"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
      </div>
        </div>

        <div className="col-md-4">
          <Form
            onSubmit={e => {e.preventDefault();}}
            style={{
              textAlign: "center",
              backgroundColor: "white",
              borderRadius: "20px",
              padding: "40px",
              marginBottom: "40px",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            }}
          >
            <Form.Group>
              <Form.Label>به دنبال دستور غذایی خاصی هستید؟</Form.Label>
              <Typeahead
                id="basic-typeahead-single"
                labelKey="name"
                onChange={setFoodName}
                options={allFoods}
                placeholder="جست و جو برای..."
                selected={foodName}
              />
            </Form.Group>
            <Button
              block
              size="lg"
              type="submit"
              varient="success"
              disabled={!validateForm()}
              onClick={handleSearchByName}
            >
              جست و جو
            </Button>
          </Form>{" "}
          <Form
            onSubmit={e => {e.preventDefault();}}
            style={{
              backgroundColor: "white",
              borderRadius: "20px",
              padding: "40px",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            }}
          >
            <Accordion defaultActiveKey="0">
              {ingredients.map((ingredient, index) => (
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey={ingredient.id}>
                    {ingredient.category}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={ingredient.id}>
                    <Card.Body>
                      <Form.Group controlId="foodIngredients" size="lg">
                        {ingredient.ingList.map((ings, inx) => (
                          <Form.Check
                            inline
                            label={ings}
                            type="checkbox"
                            key={`${inx}`}
                            id={`ing-${inx}`}
                            value={ings}
                            onChange={(e) => onIngredientChange(e, ings)}
                          />
                        ))}
                      </Form.Group>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              ))}
            </Accordion>

            <Button
              block
              size="lg"
              type="submit"
              varient="success"
              style={{ marginTop: "5px" }}
              disabled={!validateForm2()}
              onClick={handleSearchByCheck}
            >
              جست و جو
            </Button>
          </Form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
