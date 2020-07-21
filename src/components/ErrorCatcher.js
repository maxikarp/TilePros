import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ErrorCatcher = () => {
  return (
    <div>
      <h5 style={{ textAlign: "center", margin: "20px" }}>
        Error: Whoops! It seems like the page you are trying to access does not
        exist...sorry about that!
      </h5>
      <Link to="/" style={{ margin: "20px" }}>
        <Button
          type="button"
          class="btn btn-outline-info"
          style={{
            backgroundColor: "#557666",
            color: "#EADDA6",
            border: "0px"
          }}
        >
          Click me to go home!
        </Button>
      </Link>
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

export default ErrorCatcher;
