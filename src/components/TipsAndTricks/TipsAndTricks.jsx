import React from "react";
import Carousel from "react-bootstrap/Carousel";
import './TipsAndTricks.css';

const TipsAndTricks = ({ tips }) => {
  return (
    <div className="text-white mb-5 container d-flex flex-column align-items-center justify-content-center">
       <h1 id="tips-title" className="my-5 text-warning">Expert Chef Tips and Tricks</h1> 
      <Carousel className="mb-5" variant="dark" style={{width: "1000px"}}>
        {tips.map((tipsItem) => {
          return (
            <Carousel.Item key={tipsItem.id} interval={2000}>
              <img
                style={{height: "600px"}}
                className="d-block w-100 rounded-3"
                src={tipsItem.image}
                alt="First slide"
              />
              <Carousel.Caption className="sub-title">
                <h1 className="text-white fw-bold mb-4">{tipsItem.title}</h1>
                <p className="text-white">
                  {tipsItem.description}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default TipsAndTricks;
