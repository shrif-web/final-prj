import React, { useState } from "react";
import { Accordion, Card, Form, Button } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";

import "./Search.css";

export default function Search() {
  const ingredients = [
    { id: "0", category: "Dairy", ingList: ["egg", "milk", "butter"] },
    {
      id: "1",
      category: "Meats",
      ingList: ["chicken breast", "beaf", "ground beaf"],
    },
    {
      id: "2",
      category: "Vegetables",
      ingList: ["onion", "potato", "carrot"],
    },
  ];
  const allFoods = [
    "food1",
    "food2",
    "food3",
    "food4",
    "food5",
    "food6",
    "food7",
  ];

  const [searchIngs, setSearchIngts] = useState([]);

  const [foodName, setFoodName] = useState("");

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

  function handleSearchByName() {
    alert(foodName);
    alert("Search For", foodName);
  }

  function handleSearchByCheck() {
    alert(searchIngs);
    alert("Search by ings");
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
            onSubmit={handleSearchByName}
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
            >
              جست و جو
            </Button>
          </Form>{" "}
        </div>

        <div className="col-md-6">
          <Form
            onSubmit={handleSearchByCheck}
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
              disabled={!validateForm2()}
            >
              جست و جو
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
