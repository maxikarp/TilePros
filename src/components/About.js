import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const about = () => {
  return (
    <div>
      <Jumbotron style={{ backgroundColor: "#f2f0c7", margin: "0px" }}>
        <Container>
          <h1>Some of our work</h1>
          <p>
            Browse through a few of our projects, in the kitchen and in the
            bathroom, the centers of tile-work in the house!
          </p>
        </Container>
      </Jumbotron>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kitchen-backsplash-3-1578412141.jpg?crop=1.00xw:0.785xh;0,0.146xh&resize=980:*"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2
              style={{
                backgroundColor: "#F4F4F4",
                color: "black",
                width: "auto"
              }}
            >
              Kitchen Tiles
            </h2>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kitchen-backsplash-4-1578412495.jpg?crop=1.00xw:0.577xh;0,0.129xh&resize=980:*"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h2
              style={{
                backgroundColor: "#F4F4F4",
                color: "black",
                width: "auto"
              }}
            >
              Kitchen Tiles
            </h2>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="https://assets.fireclaytile.com/blog/_1200x800_crop_center-center_75/Q3_2018_image_residential_influencer_Sarah-Sherman-Samuel_Mandy-Moore-Home_photo_Tessa-Neustadt_bathroom_wall_shower_tile_rosemary_stacked_3x6_bathtub_surround.jpg?mtime=20181203161308"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h2
              style={{
                backgroundColor: "#F4F4F4",
                color: "black",
                width: "auto"
              }}
            >
              Bathroom Tiles
            </h2>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/5a5a0480-1363-4241-8256-0fc3fedf8b8b-walls-and-floors-ltd-scintilla-pattern-vintage-floor-tiles.jpg"
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h2
              style={{
                backgroundColor: "#F4F4F4",
                color: "black",
                width: "auto"
              }}
            >
              Bathroom Tiles
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

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
export default about;
