import React, { useState } from "react";
import { Accordion, Card, Table, Form, Button } from "react-bootstrap";
import "./Dashboard.css";

import Parse from "../Parse.js";

<<<<<<< HEAD
=======
export default function Dashboard() {

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    console.log("hi");
    const Ingredient = Parse.Object.extend("Ingredient");
    const query = new Parse.Query(Ingredient);
    const results = await query.find();
    console.log(results.length);
    var mIngredients = []
    for (let i = 0; i < results.length; i++) {
      const object = results[i];
      mIngredients[i]={Id:i+1,Name:object.get("name"),category:object.get("type")};
    }
    setIngredients(mIngredients);

    const Food = Parse.Object.extend("Food");
    const query2 = new Parse.Query(Food);
    const results2 = await query2.find();
    console.log(results2.length);
    var mFoods = []
    for (let i = 0; i < results2.length; i++) {
      const object = results2[i];
      var ingredients2 = object.relation("ingredients");
      ingredients2 = await ingredients2.query().find();
      var j=0;
      var mstr = "";
      for(let j = 0; j < ingredients2.length; j++){
        mstr=mstr+' - '+ingredients2[j].get("name");
      }
      mstr = mstr.substring(2,mstr.length);
      mFoods[i]={Id:i+1,Name:object.get("name"),link:object.get("link"),Ingredients:mstr};
      
    }
    setFoods(mFoods);

  }
>>>>>>> fe1cd8c1e5c5d474cd32c9526291c047e61a4660

export default function Dashboard() {
  const [nFoodName, setNFoodName] = useState("");
  const [nFoodLink, setNFoodLink] = useState("");
  const [nFoodIngredients, setNFoodIngredients] = useState([]);
  const [nIngName, setNIngName] = useState("");
  const [nIngCategory, setNIngCategory] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

<<<<<<< HEAD
  const [foods, setFoods] = useState([
    { Id: "1", Name: "food 1", link: "www.google.com", Ingredients: "egg" },
    { Id: "2", Name: "food 2", link: "www.google.com", Ingredients: "egg" },
    { Id: "3", Name: "food 3", link: "www.google.com", Ingredients: "egg" },
  ]);

  const [ingredients, setIngredients] = useState([
    { Id: "1", Name: "Ingredient 1", category: "dairy" },
    { Id: "2", Name: "Ingredient 2", category: "dairy" },
    { Id: "3", Name: "Ingredient 3", category: "dairy" },
  ]);

  function handleCreateFood() {
    setFoods([
      ...foods,
      {
        Id: foods.length,
        Name: nFoodName,
        link: nFoodLink,
        Ingredients: nFoodIngredients.toString,
      },
    ]);
=======
  const [foods, setFoods] = useState([]);
  //   { Id: "1", Name: "food 1", link: "www.google.com", Ingredients: "egg" },
  //   { Id: "2", Name: "food 2", link: "www.google.com", Ingredients: "egg" },
  //   { Id: "3", Name: "food 3", link: "www.google.com", Ingredients: "egg" },
  // ]);

  const [ingredients, setIngredients] = useState([{}]);
  // ([
  //   { Id: "1", Name: "Ingredient 1", category: "dairy" },
  //   { Id: "2", Name: "Ingredient 2", category: "dairy" },
  //   { Id: "3", Name: "Ingredient 3", category: "dairy" },
  // ]);
 



  async function handleCreateFood() {

    try {

      var Food = Parse.Object.extend("Food");
      var food = new Food();
      food.set("name", nFoodName);
      food.set("link", nFoodLink);
      // console.log("file -> ", selectedFile);
      // alert(selectedFile);
      // const parseFile = new Parse.File(selectedFile.name,selectedFile);
      // food.set("image",)
      var relation = food.relation("ingredients");
      var query = new Parse.Query("Ingredient");
      query.containedIn("name",nFoodIngredients);
      alert("start");
      // var results = await query.find();
      query.find().then(results => {
        alert("res -> ",results.length);
        relation.add(results);
        food.save().then(
          results => {
            alert("food saved! ");
            
        }).catch(error2 => {
            alert(error2);
        });
    }).catch(error => {
        alert(error);
    });
      // console.log(results);
      // alert("result");
      // await food.save();
      // alert("food saved.");

    } catch (error) {
      alert("error ---> ",error.message);
    }
>>>>>>> fe1cd8c1e5c5d474cd32c9526291c047e61a4660
    alert("New food created");
  }

  function validateNewFood() {
    return (
      nFoodIngredients.length > 0 &&
      nFoodLink.length > 0 &&
      nFoodName.length > 0
    );
  }
  function handleCreateIng() {
    setIngredients([
      ...ingredients,
      {
        Id: ingredients.length,
        Name: nIngName,
        category: nIngCategory,
      },
    ]);
    alert("New ingredient created");
  }

  function validateNewIng() {
    return nIngName.length > 0 && nIngCategory.length > 0;
  }

  function onIngredientChange(e, name) {
    if (nFoodIngredients.includes(name)) {
      var arr = nFoodIngredients.filter(function (item) {
        return item !== name;
      });
      setNFoodIngredients(arr);
    } else {
      setNFoodIngredients([...nFoodIngredients, name]);
    }
  }
  function onFileChange (event){
    setSelectedFile(event.target.files[0]);
  };
  return (
    <div className="Dashboard">
      <h1 style={{ paddingTop: "10%" }}>It's Admin Dashboard</h1>
      <div className="dashboard-nav container">
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              غذاها
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>نام غذا</th>
                      <th>لینک دستور غذایی</th>
                      <th>مواد اولیه</th>
                    </tr>
                  </thead>
                  <tbody>
                    {foods.map((food, index) => (
                      <tr key={index}>
                        <td>{food.Id}</td>
                        <td>{food.Name}</td>
                        <td>{food.link}</td>
                        <td>{food.Ingredients}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              اضافه کردن غذا
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Card.Body>
                  <div className="col-md-6">
                    <Form onSubmit={handleCreateFood}>
                      <Form.Group controlId="foodName" size="lg">
                        <Form.Label>نام غذا</Form.Label>
                        <Form.Control
                          autoFocus
                          type="text"
                          value={nFoodName}
                          onChange={(e) => setNFoodName(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group controlId="foodLink" size="lg">
                        <Form.Label>لینک دستور غذایی</Form.Label>
                        <Form.Control
                          type="text"
                          value={nFoodLink}
                          onChange={(e) => setNFoodLink(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group controlId="foodIngredients" size="lg">
                        <Form.Label>مواد اولیه</Form.Label>
                        {ingredients.map((ingredient, index) => (
                          <Form.Check
                            inline
                            label={ingredient.Name}
                            type="checkbox"
                            key={`inline-${ingredient.id}`}
                            id={`ing-${index}`}
                            value={ingredient.Name}
                            onChange={(e) =>
                              onIngredientChange(e, ingredient.Name)
                            }
                          />
                        ))}
                      </Form.Group>
                      <Form.Group>
                        <Form.File 
                        id="foodImage" 
                        label="فایل تصویر غذا"
                        onChange={onFileChange}
                         />
                      </Form.Group>
                      <Button
                        block
                        size="lg"
                        type="submit"
                        varient="success"
                        disabled={!validateNewFood()}
                      >
                        اضافه کردن غذا به لیست
                      </Button>
                    </Form>
                  </div>
                </Card.Body>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              مواد اولیه
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <Card.Body>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>نام ماده غذایی</th>
                        <th>نوع</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ingredients.map((ingredient, index) => (
                        <tr key={index}>
                          <td>{ingredient.Id}</td>
                          <td>{ingredient.Name}</td>
                          <td>{ingredient.category}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              اضافه کردن ماده اولیه
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <Card.Body>
                  <div className="col-md-6">
                    <Form onSubmit={handleCreateIng}>
                      <Form.Group controlId="ingName" size="lg">
                        <Form.Label>نام ماده غذایی</Form.Label>
                        <Form.Control
                          autoFocus
                          type="text"
                          value={nIngName}
                          onChange={(e) => setNIngName(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group controlId="ingcategory" size="lg">
                        <Form.Label>نوع ماده غذایی</Form.Label>
                        <Form.Control
                          type="text"
                          value={nIngCategory}
                          onChange={(e) => setNIngCategory(e.target.value)}
                        />
                      </Form.Group>
                      <Button
                        block
                        size="lg"
                        type="submit"
                        varient="success"
                        disabled={!validateNewIng()}
                      >
                        اضافه کردن ماده غذایی به لیست
                      </Button>
                    </Form>
                  </div>
                </Card.Body>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
}
