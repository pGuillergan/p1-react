import React from "react";
import Navbar from "./../common/Navbar";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function AboutPage() {
  return (
    <>
      <Navbar />
      <Container>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                About
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                This project was developed for ABCollege to give school
                administrators a web interface for managing the courses they
                offered. They have provided the back end server and database.{" "}
                <br />
				<br />
                Database <br />
                There are two tables that was used, one for user verification
                and the other contains details about the courses offered.
                <br />
				<br />
                Server
                <br />
                The server provided us with different routes in order to access
                the database. For more details on the routes please see ABCollge
                Student Portal <br />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Front End Technologies
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <p>
                  JavaScript - React
                  <br />
                  Jest
                  <br />
                  Enzyme
                  <br />
                  bootstrap
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                Back End Technologies
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <p>
                  Node JS
                  <br />
                  Express
                  <br />
                  Jest
                  <br />
                  Nodemon
                  <br />
                  Router
                  <br />
                  Super test
                  <br />
                  FS for logs
                  <br />
                  PostgreSQL
                  <br />
                  JavaScript/TypeScript
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    </>
  );
}

export default AboutPage;
