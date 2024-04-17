import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import 'remixicon/fonts/remixicon.css';


const Newsletter = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          {/* Contact Information Section */}
          <h3 className="contact__title">
              <i className="ri-chat-3-line">Talk to me</i>
          </h3>
          <Col lg={6}> 
            <div className="contact__data">
                <span className="contact__data-title">Whatsapp : </span>
                <span className="contact__data-info">+46 707383361 </span>
                <span className="contact__button">
                  <a href="https://api.whatsapp.com/send?phone=46707383361&text=Hello" target="_blank">
                    Write me <i className="ri-arrow-right-line"></i>
                  </a>
                </span>
            </div>
          </Col>

          <Col lg={6}>  
            <div className="contact__data">
                <span className="contact__data-title">Messenger : </span>
                <span className="contact__data-info">@linna.loch </span>
                <span className="contact__button">
                  <a href="https://m.me/luxlinnaY" target="_blank">
                    Write me <i className="ri-arrow-right-line"></i>
                  </a>
                </span>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default Newsletter;
