import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./../common/Navbar";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import logo_1 from "./carousel_01.jpg";
import logo_2 from "./carousel_02.jpg";
import logo_0 from "./carousel_03.jpg";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Container>
        <h1>Welcome to ABCollege Course Portal</h1>
        <Row>
          <Col></Col>
          <Col xs={9}>
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={logo_0} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={logo_1} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={logo_2} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col></Col>

          <br />
        </Row>

        <Row>
          <p>
            <br />
            <div className='welcomeline'>
            Welcome to ABCollege where the emphasis of the programs is to
            combine your natural talents with our education.
            </div>
            <br />
            <br />
            <div className="homeparagraph">
              <h3>Our Mission</h3>
              The Mission of ABCollege is to provide the highest degree of
              cosmetology training for its students. Students will be provided
              with the skills and knowledge necessary to pursue a fulfilling and
              successful career. We will prepare the student to perform in a
              professional environment by enforcing discipline, moral values,
              and teaching the joy of achievement and quality performance. The
              students will be prepared for entry in the related field of Study.
              With this mind, the college continually reviews the teaching and
              skills required by employers. Instruction is administered in a
              structured environment, which caters to the need of the
              individual. Therefore instructors give individual as well as group
              instructions. This combination enables serious students to reach
              their personal career goals. In addition, we will do all we can to
              ensure that the student is prepared to take the state test.
            </div>
            <br />
            <br />
          </p>
        </Row>
        <Row>
          <Link to="/courses">
            <button className="btn btn-danger">Go to Courses Page</button>
          </Link>
        </Row>
      </Container>
    </>
  );
}
