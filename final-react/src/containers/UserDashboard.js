import React, { useEffect ,useState } from "react";
import { Accordion, Card, Form, Button } from "react-bootstrap";
import "./Dashboard.css";
import "./Home.css";

import Parse from "../Parse.js";

export default function Dashboard() {

  // console.log(Parse.User.current().getUsername());

  const [Email, setEmail] = useState(Parse.User.current().getUsername());
  const [Password, setPassword] = useState("aaaa");
 
  const [favoriteFoods, setFoods] = useState([]);
  const [newEmail, setNEmail] = useState("");
  const [newPassword, setNPassword] = useState("");
  const [confirmedPassword, setCPassword] = useState("");

  function handleChangeEmail() {
    setEmail(newEmail);
    alert("Email updated");
  }

  function validateNewEmail() {
    return newEmail.length > 0;
  }

  function handleChangePassword() {
    setPassword(newPassword);
    alert("Password updated");
  }

  function validateNewPassword() {
    return newPassword.length > 0 && Password === confirmedPassword;
  }
   function handelremove(index){

    var  selected_food = "";

    selected_food = favoriteFoods[index].id;

    const favorits = Parse.Object.extend("Favorit");

    const query = new Parse.Query(favorits);

    query.get(selected_food).then(
      (record) => {
        record
          .destroy()

          .then(
            (myObject) => {
              favoriteFoods.splice(selected_food, 1);
              setFoods([...favoriteFoods]);
              alert("deleted");
            },
            (error) => {
              alert("delete failed!");
            }
          );
      },
      (error) => {}
    );
   }
  
  useEffect(() => {
      
    const favorits = Parse.Object.extend("Favorit");

    const query = new Parse.Query(favorits);

    query.equalTo("username", Parse.User.current().getUsername());

    query.find().then((resp) => {
      
      const fd = resp.map((x) => {
        
        
        const food = x.get("food");
      
        return {
            Name : food.Name,
            link : food.link,
            Ingredients : food.Ingredients,
            src:food.imagesrc,
            id:x.id
         }
        
      });
      setFoods(fd);
      
    });

  }, []);


  return (
    <div className="Dashboard">
      <h1 style={{ paddingTop: "10%" }}>It's User Dashboard</h1>
      <div className="dashboard-nav container">
        <div className="row">
          <div className="col-md-4">
            <Accordion defaultActiveKey="0">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  ایمیل
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div className="col-md-6 pt-3">
                      <h6>آدرس ایمیل شما: </h6>
                      <p>{Email}</p>
                    </div>

                    <Form
                      onSubmit={handleChangeEmail}
                      style={{
                        backgroundColor: "white",
                        padding: "30px",
                      }}
                    >
                      <Form.Group controlId="newEmail" size="lg">
                        <Form.Label>ایمیل جدید</Form.Label>
                        <Form.Control
                          autoFocus
                          type="email"
                          value={newEmail}
                          onChange={setNEmail}
                        />
                      </Form.Group>
                      <Button
                        block
                        size="lg"
                        type="submit"
                        varient="success"
                        disabled={!validateNewEmail()}
                      >
                        تغییر
                      </Button>
                    </Form>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  تغییر رمز عبور
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <Card.Body>
                      <Form
                        onSubmit={handleChangePassword}
                        style={{
                          backgroundColor: "white",
                        }}
                      >
                        <Form.Group controlId="password" size="lg">
                          <Form.Label>رمز عبور کنونی</Form.Label>
                          <Form.Control
                            autoFocus
                            type="text"
                            value={newPassword}
                            onChange={setNPassword}
                          />
                        </Form.Group>
                        <Form.Group controlId="newPassword" size="lg">
                          <Form.Label>رمز عبور جدید</Form.Label>
                          <Form.Control
                            autoFocus
                            type="password"
                            value={newPassword}
                            onChange={setNPassword}
                          />
                        </Form.Group>
                        <Form.Group controlId="confirmPassword" size="lg">
                          <Form.Label>تکرار رمز عبور</Form.Label>
                          <Form.Control
                            type="password"
                            value={confirmedPassword}
                            onChange={setCPassword}
                          />
                        </Form.Group>
                        <Button
                          block
                          size="lg"
                          type="submit"
                          varient="success"
                          disabled={!validateNewPassword()}
                        >
                          تغییر رمز عبور
                        </Button>
                      </Form>
                    </Card.Body>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          <div className="col-md-8">
            <h4>غذاهای محبوب شما</h4>
            <div
              className="container row"
              style={{ marginRight: "auto", marginLeft: "auto" }}
            >
              {favoriteFoods.map((food, index) => (
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
                      <li>
                        <button onClick={function(){
                          handelremove(index);
                        }}>
                          <i className="fa fa-minus"></i>
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
        </div>
      </div>
    </div>
  );
}
