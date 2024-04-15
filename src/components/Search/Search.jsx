import React, { useState } from "react";
import "./search.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image } from "react-bootstrap";
import Welcome from "../../images/welcome.jpg";

export const Search = () => {
  const [input, setInput] = useState({
    birthDate: '',
  })

  function currentAge(dob) {
    var today = new Date();
    var birthDate = new Date(dob);
    var age = today.getFullYear - birthDate.getFullYear();
    var months = today.getMonth() - birthDate.getMonth();
    if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate()))
    {
      age--;
    }
    return age;
  }

  return (
    <div className="w3-container w3-light-grey description" style={{height: 700, width: '100%'}}>
      <Container className="mt-5 mb-5">
        <Row>
          <Col className="w3-container" >
            <Image src={Welcome} alt='welcome' rounded fluid/>
          </Col>
          <Col className="w3-container w3-blue w3-round p-5 w3-card-4" >
            <div className="w3-center">
              <h2 className="w3-bold mb-3 fs-2">
                Age Calculator
              </h2>
              <p className="mb-5">
                Are you curious about your current age or simply interested <br/> in
                knowing how many days, weeks, or months <br/> you've been on this
                planet, our intuitive interface makes it <br/> easy to find out.
              </p>
            </div>
            <form className="w3-container">
              <label className="w3-text-white">
                <b>Date of Birth</b>
              </label>
              <input
                className="w3-input w3-border w3-round-xxlarge mb-3"
                type="date"
                defaultValue= {dob}
                onChange={this.handleChange}
                name="dateOfBirth"
              />

              <label className="w3-text-white">
                <b>Current Date</b>
              </label>
              <input
                className="w3-input w3-border w3-round-xxlarge"
                type="date"
              />

              <button className="w3-btn w3-teal w3-round-xxlarge mt-3">
                Calculate
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
