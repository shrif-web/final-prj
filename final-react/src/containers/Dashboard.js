import React, { useState } from "react";
import { Accordion, Card, Table, Form, Button } from "react-bootstrap";
import "./Dashboard.css";

export default function Dashboard() {
  const [nFoodName, setNFoodName] = useState("");
  const [nFoodLink, setNFoodLink] = useState("");
  const [nFoodIngredients, setNFoodIngredients] = useState([]);

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
    alert("New food created");
  }

  function validateNewFood() {
    return (
      nFoodIngredients.length > 0 &&
      nFoodLink.length > 0 &&
      nFoodName.length > 0
    );
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
                        <Form.File id="foodImage" label="فایل تصویر غذا" />
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
                <Card.Body></Card.Body>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
}
