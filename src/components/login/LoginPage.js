import React, { useState } from "react";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function LoginPage(props) {
  const [userCredentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  function handleChange(event) {
    setCredentials({
      ...userCredentials,
      [event.target.name]: event.target.value,
    });
  }

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   console.log(userCredentials);

  //   fetch("http://54.215.227.33:3000/login", {
  //     method: "POST",
  //     credentials: 'same-origin',
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(userCredentials),
  //     redirect: "follow",
  //   })
  //     .then((result) => {
  //       console.log(result.url);
  //       console.log(result.statusText);
  //       // console.log(result.json());
  //       if (result.redirect){
  //           toast.success("Log In Successful");
  //       }

  //       if (result.redirected) {
  //           window.location.href = result.url;
  //       }
  //     })
  //     .catch((err) => {
  //       toast.error("Something went wrong....");
  //     });
  // }

  function isValidUser(){
    const users = [
      {
        username: "admin",
        password: "admin",
      },
      {
        username: "sansa",
        password: "stark",
      },
      {
        username: "theon",
        password: "greyjoy",
      },
    ];

    for (var i = 0; i < users.length; i++) {
      console.log(users[i])
      console.log(userCredentials)
      if(users[i].username === userCredentials.username && users[i].password === userCredentials.password ){
        return true;}
    }
    return false;

  }

  function handleSubmit(event) {
    event.preventDefault();
    if (isValidUser()){
      toast.success("Log In Successful");
      props.history.push("/home");
    }else{
      toast.error("Invalid username/password");
    }
    
  }

  return (
    <div className="jumbotron">
      <Form onSubmit={handleSubmit} onChange={handleChange}>
        <div className="form-label-title">ABCollege Course Portal</div>
        <Form.Text className="text-muted">
          Please enter your credentials
        </Form.Text>
        <br />
        <Form.Group controlId="username">
          <Form.Label>User Name:</Form.Label>
          <Form.Control
            type="plaintext "
            placeholder="Enter user name"
            name="username"
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default LoginPage;
