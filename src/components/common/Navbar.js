import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Navbar = () => {
  const activeStyle = { color: "magenta" };
  const logout = { color: "red" };
  return (
    <Container fluid>
      <Row>
        <Col></Col>
        <Col xs={6}></Col>
        <Col></Col>
        <nav>
          <NavLink to="/home" activeStyle={activeStyle} exact>
            Home
          </NavLink>
          {"  |  "}
          <NavLink to="/courses" activeStyle={activeStyle}>
            Courses
          </NavLink>
          {"  |  "}
          <NavLink to="/about" activeStyle={activeStyle}>
            About
          </NavLink>
          {"  |  "}
          <NavLink to="/" activeStyle={logout}>
            Log Out
          </NavLink>
        </nav>
      </Row>
    </Container>
  );
};

export default Navbar;
