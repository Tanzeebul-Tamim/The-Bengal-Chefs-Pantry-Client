import React from "react";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import "./HeadLines.css";

const HeadLines = ({ headlines }) => {
  const title = (
    <div>
      {headlines.map((line, index) => (
        <span key={index}>{line}</span>
      ))}
    </div>
  );

  return (
    <Container>
      <div className="d-flex headline mt-5 mb-4 gap-4 p-2 rounded-5">
         <Button id="button" className="fs-5 rounded-5 fw-bold" style={{letterSpacing: "2px"}} variant="warning">FunFacts</Button>
        <Marquee
          className="fw-bold fs-6"
          style={{ color: "#8b8b8b", height: "80px" }}
          gradient={true}
          gradientColor={[15, 15, 15]}
          speed={50}
          pauseOnHover={true}
        >
          <div id="marquee" className="fs-1 text-headline">
            {title}
          </div>
        </Marquee>
      </div>
    </Container>
  );
};

export default HeadLines;
