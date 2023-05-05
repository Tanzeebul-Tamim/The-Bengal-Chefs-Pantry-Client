import React from "react";
import "./HealthTips.css";
import Accordion from "react-bootstrap/Accordion";

const HealthTips = ({ healthTips }) => {
  return (
    <div className="container my-5">
      <h1 className="text-center my-5 health-tips-title text-warning">Healthy Eating Tips</h1>  
      <Accordion id="accord">
        {healthTips.map((healthTipsItem) => {
          return (
            <Accordion.Item key={healthTipsItem.id} eventKey={healthTipsItem.id}>
              <Accordion.Header>
                <span className="fw-bold text-warning">{healthTipsItem.title}</span>
              </Accordion.Header>
              <Accordion.Body className="d-flex align-items-center gap-5">
                <div>
                    <img className="rounded-4" style={{height: "400px"}} src={healthTipsItem.image} alt="" />
                </div>
                <div className="fs-4">
                    {healthTipsItem.description}
                </div>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
};

export default HealthTips;
