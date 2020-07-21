import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";

const home = () => (
  <div>
    <Link to="/homefr" style={{ margin: "15px", float: "right" }}>
      <button
        type="button"
        class="btn btn-outline-info"
        style={{ backgroundColor: "#557666", color: "#EADDA6", border: "0px" }}
      >
        Français
      </button>
    </Link>
    <br />
    <br />
    <img
      src="https://ak1.ostkcdn.com/wp-content/uploads/2017/05/removetiles-hero.jpg"
      alt="Kitchen Tile Example"
      style={{
        maxWidth: "100%",
        maxHeigth: "100%",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto"
      }}
    />
    <Jumbotron style={{ backgroundColor: "#f2f0c7" }}>
      <h1>Tile Pros</h1>
      <p>
        We are a local ceramics company specializing in a multitude of tiles to
        give any space a pop of style.
      </p>
      <p style={{ color: "#f2f0c7" }}>
        <Link to="/Pricing">
          <Button
            style={{
              backgroundColor: "#557666",
              color: "#EADDA6",
              border: "0px",
              marginRight: "10px"
            }}
            variant="light"
          >
            See our prices
          </Button>
        </Link>

        <Link to="/ContactUs">
          <Button
            style={{
              backgroundColor: "#557666",
              color: "#EADDA6",
              border: "0px",
              marginLeft: "10px"
            }}
            variant="light"
          >
            Get in touch
          </Button>
        </Link>
      </p>
    </Jumbotron>

    <br />

    <CardGroup>
      <Card>
        <Card.Body style={{ backgroundColor: "#f2f0c7" }}>
          <Card.Title style={{ textAlign: "center" }}>Experience</Card.Title>
          <Card.Text>
            Our workers have years of expereince working with tiles. From
            cermaics, to marble tiling, they have seen it all. As such, we like
            to call ourselves Pros at tiling jobs.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body style={{ backgroundColor: "#f2f0c7" }}>
          <Card.Title style={{ textAlign: "center" }}>Quality</Card.Title>
          <Card.Text>
            Our team offers a strict guarantee on our tiles: if you aren't
            satisfied, send them back! Simple as that!
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body style={{ backgroundColor: "#f2f0c7" }}>
          <Card.Title style={{ textAlign: "center" }}>
            Sustainability
          </Card.Title>
          <Card.Text>
            In an effort to reduce our own carbon footprint, we use lots of
            recycled materials in our production, and make sure that
            transportation is done as efficiently, and securely, as possible.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    <br />

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
      <p style={{ width: "100%", marginLeft: "20px" }}>Author: Maxim Karpov</p>
      <p style={{ width: "100%", marginLeft: "20px" }}>
        Images from Google Images
      </p>
    </footer>
  </div>
);

export default home;
