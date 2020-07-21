import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div>
      <Jumbotron style={{ backgroundColor: "#f2f0c7" }}>
        <Container>
          <h1>Get in touch</h1>
          <p>
            If you would like to talk to us about a consultation, or just
            contact us for some feedback, we would be happy to reach out.
          </p>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First name" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last name" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Enter Phone Number" />
              </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </Jumbotron>

      <footer style={{ backgroundColor: "#BFCCC5" }}>
        <table style={{ width: "100%", marginLeft: "20px" }}>
          <tr>
            <th>Main Pages</th>
            <th>Help</th>
          </tr>
          <tr>
            <Link to="/">
              <td>Home</td>
            </Link>
            <td>Phone: 613 999 1010</td>
          </tr>
          <tr>
            <Link to="/about">
              <td>About</td>
            </Link>
            <td>Email: tile@tilepros.ca</td>
          </tr>
          <tr>
            <Link to="/pricing">
              <td>Pricing</td>
            </Link>
          </tr>
          <tr>
            <Link to="/contact">
              <td>Contact Us</td>
            </Link>
          </tr>
        </table>
        <br />
        <p style={{ width: "100%", marginLeft: "20px" }}>
          Author: Maxim Karpov
        </p>
        <p style={{ width: "100%", marginLeft: "20px" }}>
          Images from Google Images
        </p>
      </footer>
    </div>
  );
};

export default ContactUs;
