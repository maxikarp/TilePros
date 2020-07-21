import React from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div>
      <Jumbotron style={{ backgroundColor: "#f2f0c7" }}>
        <Container>
          <h1>Our Prices</h1>
          <p>
            Have a look at our prices! The prices vary depending on the type of
            tile you want.
          </p>
        </Container>
      </Jumbotron>

      <CardColumns style={{ margin: "20px" }}>
        <Card style={{ width: "18rem", margin: "20px" }}>
          <Card.Img
            variant="top"
            src="https://i1.adis.ws/i/flooranddecor/100132455_bright-white-ice-beveled-ceramic-wall-tile_display?w=1000&h=1000&img404=404&v=1"
          />
          <Card.Body>
            <Card.Title>White Subway Tile</Card.Title>
            <Card.Text>Simplistic, and timeless.</Card.Text>
            <Button
              style={{
                backgroundColor: "#557666",
                color: "#EADDA6",
                border: "0px"
              }}
            >
              $0.50/piece
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", margin: "20px" }}>
          <Card.Img
            variant="top"
            src="https://i1.adis.ws/i/flooranddecor/100780253_raven-ii-matte-ceramic-tile_display?w=1000&h=1000&img404=404&v=1"
          />
          <Card.Body>
            <Card.Title>Black Subway Tile</Card.Title>
            <Card.Text>Simplistic, dark, and timeless.</Card.Text>
            <Button
              style={{
                backgroundColor: "#557666",
                color: "#EADDA6",
                border: "0px"
              }}
            >
              $0.50/piece
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", margin: "20px" }}>
          <Card.Img
            variant="top"
            src="https://i1.adis.ws/i/flooranddecor/100507706_la-belle-antique-blue-polished-ceramic-tile_display?w=1000&h=1000&img404=404&v=1"
          />
          <Card.Body>
            <Card.Title>Dark Blue Long Tile</Card.Title>
            <Card.Text>Ocean feels.</Card.Text>
            <Button
              style={{
                backgroundColor: "#557666",
                color: "#EADDA6",
                border: "0px"
              }}
            >
              $1.00/piece
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", margin: "20px" }}>
          <Card.Img
            variant="top"
            src="https://i1.adis.ws/i/flooranddecor/100651041_levante-white-ii-matte-ceramic-tile_display?w=1000&h=1000&img404=404&v=1"
          />
          <Card.Body>
            <Card.Title>Simili-Marble Tile</Card.Title>
            <Card.Text>Give an air of richness.</Card.Text>
            <Button
              style={{
                backgroundColor: "#557666",
                color: "#EADDA6",
                border: "0px"
              }}
            >
              $2.50/piece
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", margin: "20px" }}>
          <Card.Img
            variant="top"
            src="https://i1.adis.ws/i/flooranddecor/100512268_carson-walnut-wood-plank-ceramic-tile_display?w=1000&h=1000&img404=404&v=1"
          />
          <Card.Body>
            <Card.Title>Wood Tile</Card.Title>
            <Card.Text>Add a bit of nature.</Card.Text>
            <Button
              style={{
                backgroundColor: "#557666",
                color: "#EADDA6",
                border: "0px"
              }}
            >
              $1.50/piece
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", margin: "20px" }}>
          <Card.Img
            variant="top"
            src="https://i1.adis.ws/i/flooranddecor/100566215_aged-white-ornato-matte-ceramic-tile_display?w=1000&h=1000&img404=404&v=1"
          />
          <Card.Body>
            <Card.Title>Fancy Relief Tile</Card.Title>
            <Card.Text>Is this the King's Bathroom?</Card.Text>
            <Button
              style={{
                backgroundColor: "#557666",
                color: "#EADDA6",
                border: "0px"
              }}
            >
              $5.00/piece
            </Button>
          </Card.Body>
        </Card>
      </CardColumns>

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

export default Pricing;
