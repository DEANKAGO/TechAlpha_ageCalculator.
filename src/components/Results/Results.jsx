import React from 'react';
import './results.css';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export const Results = (props) => {
  return (
    <div
      className='w3-container w3-card-4 w3-center results w3-pale-yellow w3-round'
      style={{ height: 300 }}
    >
      {/* <div className='w3-blue w3-card-4 m-5' > */}
      <h1 className='mt-5'>Your Age Is</h1>
      <div className='mt-5 age'>
        <Row className='' style={{ width: '100%' }}>
          <Col className='column p-3'>
            <p className='details w3-blue w3-circle w3-card-4'>{props.age}</p>
            <p className='fs-2'>Years</p>
          </Col>
          <Col className='column p-3'>
            <p className='details w3-blue w3-circle w3-card-4'>
              {props.months}
            </p>
            <p className='fs-2'>Months</p>
          </Col>
          <Col className='column p-3'>
            <p className='details w3-blue w3-circle w3-card-4'>{props.days}</p>
            <p className='fs-2'>Days</p>
          </Col>
        </Row>
      </div>
      {/* </div> */}
    </div>
  );
};
