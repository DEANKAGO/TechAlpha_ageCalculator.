import React from "react";
import "./search.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Search = () => {
  return (
    <div className="w3-container w3-light-grey description">
      <Container className="mt-5 mb-5">
        <Row>
          <Col className="w3-center p-5">
            <h3>Age Calculator</h3>
            <p className="w3-center p-4">
              Are you curious about your current age or simply interested in
              knowing how many days, weeks, or months you've been on this
              planet, our intuitive interface makes it easy to find out.
            </p>
          </Col>
          <Col className="w3-blue w3-round p-5">
            <form class="w3-container">
              <label class="w3-text-white">
                <b>Date of Birth</b>
              </label>
              <input class="w3-input w3-border w3-round-xxlarge" type="text" />

              <label class="w3-text-white">
                <b>Current Date</b>
              </label>
              <input class="w3-input w3-border w3-round-xxlarge" type="text" />

              <button class="w3-btn w3-teal w3-round-xxlarge mt-3">
                Calculate
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
