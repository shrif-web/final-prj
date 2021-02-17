
import React, { useState, useEffect  } from "react";
import { Accordion, Card, Form, Button } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import "./Home.css";
import "./Search.css";
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

  async function handleSearchByName() {
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

    // try{
    setFoods([{
      Name: results[0].get("name"),
      link: results[0].get("link"),
      Ingredients: mstr,
      src: "./d3.jpg",}]);
    
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
        src: "./d3.jpg"});
      
  
      console.log(res);

      }
    }
      // innerQuery.exists("image");

      // query.matchesQuery("post", innerQuery);
      // // comments now contains the comments for posts with images.
      // const comments = await query.find();
      setFoods(foods);
  }

  function validateForm() {
    return foodName.length > 0;
  }

  function validateForm2() {
    return searchIngs.length > 0;
  }

  return (
    <div className="Search container-fluid">
      <h1 style={{ paddingTop: "10%", textAlign: "center", color: "white" }}>
        Search Page
      </h1>

      <div className="row mt-4 p-4">
        <div className="col-md-6" style={{ textAlign: "left" }}>
          <Form
           onSubmit={e => {e.preventDefault();}} 
            // onSubmit={handleSearchByName}
            style={{ backgroundColor: "white", padding: "40px" }}
          >
            <Form.Group>
              <Form.Label>Direct Search</Form.Label>
              <Typeahead
                id="basic-typeahead-single"
                labelKey="name"
                onChange={setFoodName}
                options={allFoods}
                placeholder="Choose a food..."
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
        </div>

        <div className="col-md-6">
          <Form
          onSubmit={e => {e.preventDefault();}} 
            // onSubmit={handleSearchByCheck}
            style={{ backgroundColor: "white", padding: "20px" }}
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
              onClick = {handleSearchByCheck}
              disabled={!validateForm2()}
            >
              جست و جو
            </Button>
          </Form>
          
        </div>

      </div>
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
                        <a href="/">
                          <i className="fa fa-minus"></i>
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
              ))}
      </div>
    </div>
  );
}
