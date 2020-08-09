import React from "react";
import "./Footer.scss";

import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="Footer">
      <Container>
        <Row>
          <Col md={12}>
            <div className="Footer__content">
              <span>@Copyright 2020 by Gaetano Cirinnà, Nicola Montaleone</span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
