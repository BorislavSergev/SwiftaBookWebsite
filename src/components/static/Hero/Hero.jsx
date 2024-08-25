import React from 'react';
import './hero.css';
import { Row, Col } from 'react-bootstrap';

export default function Hero() {
  return (
    <div className="all">
      <div className="box">
        <Row>
          <Col xs={12} md={6}>
            <h2 className="title">One Stop Solution For Finance</h2>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac elit eu ipsum
              vulputate interdum quis at est. Duis iaculis purus eget ante sollicitudin volutpat.
              Proin purus odio, sodales viverra lectus laoreet, interdum congue elit. Pellentesque
              feugiat arcu orci, vel.
            </p>
            <button className="learnMore">Learn more</button>
          </Col>
          <Col xs={12} md={6}>
            <div className="heroImgContainer">
              <img src="/header.webp" alt="Header photo of app" className="heroImg" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
