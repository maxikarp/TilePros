import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";

const home = () => (
  <div>
    <Link to="/" style={{ margin: "15px", float: "right" }}>
      <button
        type="button"
        class="btn btn-outline-info"
        style={{ backgroundColor: "#557666", color: "#EADDA6", border: "0px" }}
      >
        English
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
        Nous sommes une companie local qui à comme mission de fournire des
        carreaux céramiques pour donner une touche de style à n'importe quel
        espace.
      </p>
      <p style={{ color: "#f2f0c7" }}>
        <Link to="/Pricing">
          <Button
            style={{
              backgroundColor: "#557666",
              color: "#EADDA6",
              border: "0px"
            }}
            variant="light"
          >
            Voir nos prix
          </Button>
        </Link>
        spacer
        <Link to="/ContactUs">
          <Button
            style={{
              backgroundColor: "#557666",
              color: "#EADDA6",
              border: "0px"
            }}
            variant="light"
          >
            Nous rejoindre
          </Button>
        </Link>
      </p>
    </Jumbotron>

    <CardGroup>
      <Card>
        <Card.Body style={{ backgroundColor: "#f2f0c7" }}>
          <Card.Title>Expérience</Card.Title>
          <Card.Text>
            Nos travailleurs ont des années d'expérience dans le travail des
            carreaux. Des cermaics aux carreaux de marbre, ils ont tout vu. En
            tant que tel, nous aimons nous appeler Pros dans les travaux de
            carrelage.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body style={{ backgroundColor: "#f2f0c7" }}>
          <Card.Title>Qualité</Card.Title>
          <Card.Text>
            Notre équipe offre une garantie stricte sur nos carreaux: si vous
            n'êtes pas satisfait, renvoyez-les! C'est aussi simple!
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body style={{ backgroundColor: "#f2f0c7" }}>
          <Card.Title>Soutenable</Card.Title>
          <Card.Text>
            Dans un effort pour réduire notre propre empreinte carbone, nous
            utilisons beaucoup de matériaux recyclés dans notre production et
            nous nous assurons que le transport est effectué de manière aussi
            efficace et sécurisée que possible.
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
