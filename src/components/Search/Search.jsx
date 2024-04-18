import React, { useState } from 'react';
import './search.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import Welcome from '../../images/welcome.jpg';
import Modal from 'react-modal';
import { Results } from '../Results/Results';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1ss)',
    backgroundColor: '#FFFFCC',
  },
};

const Search = () => {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(0);
  const [months, setMonths] = useState(0);
  const [days, setDays] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const currentAge = () => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();

    let months = today.getMonth() - birthDate.getMonth();
    if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
      months += 12;
      age--;
    }

    var days = today.getDate() - birthDate.getDate();
    if (days < 0) {
      const prevMonth = new Date(today.getFullYear(), today.getMonth() - 1);
      const daysInPrevMonth = new Date(
        prevMonth.getFullYear(),
        prevMonth.getMonth() + 1,
        0
      ).getDate();
      const adjustedDays = days + daysInPrevMonth;
      days += daysInPrevMonth;
      months--;
    }

    setAge(age);
    setMonths(months);
    setDays(days);
    setModalIsOpen(true);
  };

  const resetCalculator = () => {
    setDob('');
    setAge(0);
    setMonths(0);
    setDays(0);
  };

  return (
    <div
      className='w3-container w3-light-grey description'
      style={{ height: 700, width: '100%' }}
    >
      <Container className='mt-5 mb-5'>
        <Row>
          <Col className='w3-container'>
            <Image src={Welcome} alt='welcome' rounded fluid />
          </Col>
          <Col className='w3-container w3-blue w3-round p-5 w3-card-4 col2'>
            <div className='w3-center'>
              <h2 className='w3-bold mb-3 fs-2'>Age Calculator</h2>
              <p className='mb-5'>
                Are you curious about your current age or simply interested
                <br /> in knowing how many days, weeks, or months <br /> you've
                been on this planet, our intuitive interface makes it <br />
                easy to find out.
              </p>
            </div>
            <div className='w3-container'>
              <label className='w3-text-white'>
                <b>Date of Birth</b>
              </label>
              <input
                className='w3-input w3-border w3-round-xxlarge mb-3'
                type='date'
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                name='dateOfBirth'
              />
              <button
                className='w3-btn w3-teal w3-round-xxlarge mt-3 zoom-in-on-hover'
                onClick={() => {
                  currentAge();
                }}
              >
                Calculate
              </button>
            </div>
          </Col>
        </Row>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={customStyles}
        >
          <div>
            <Results
              age={age}
              months={months}
              days={days}
              setModalIsOpen={setModalIsOpen}
              resetCalculator={resetCalculator}
            />
          </div>
        </Modal>
      </Container>
    </div>
  );
};

export default Search;
