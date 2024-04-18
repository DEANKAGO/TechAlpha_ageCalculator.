import React from 'react';
import './results.css';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import cancel from '../../images/xmark-solid.svg';

export const Results = (props) => {
  return (
    <div className='w3-container w3-card-4 w3-center results w3-pale-yellow w3-round'>
      <div className='mt-3 head'>
        <h2>Your Age Is :</h2>
        <span
          className='w3-white w3-circle w3-card-4 icon zoom-in-on-hover'
          onClick={() => {
            {
              props.setModalIsOpen(false);
            }
            {
              props.resetCalculator();
            }
          }}
        >
          <Image src={cancel} className='cancel' />
        </span>
      </div>
      <div className='mt-5 age'>
        <Row className='' style={{ width: '100%' }}>
          <Col className='column'>
            <p className='details w3-blue w3-circle w3-card-4'>{props.age}</p>
            <p className='fs-5'>Years</p>
          </Col>
          <Col className='column'>
            <p className='details w3-blue w3-circle w3-card-4'>
              {props.months}
            </p>
            <p className='fs-5'>Months</p>
          </Col>
          <Col className='column'>
            <p className='details w3-blue w3-circle w3-card-4'>{props.days}</p>
            <p className='fs-5'>Days</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};
