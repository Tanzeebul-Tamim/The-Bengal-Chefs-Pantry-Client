import React from "react";
import { Button } from "react-bootstrap";
import './ChefBio.css';
import { FaThumbsUp } from "react-icons/fa";

const ChefBio = ({chefDetail}) => {
  return (
    <div className="mb-5">
      <h1 id="chef-title" className="text-warning text-center mb-5">
        Get to know Mr. {chefDetail.name}
      </h1>
      <div
        style={{ width: "900px" }}
        id="chef-details-card"
        className="d-flex bg-warning"
      >
        <div className="col">
          <img
            id="chef-img"
            style={{ height: "600px" }}
            variant="top"
            src={chefDetail.img}
          />
        </div>
        <div className="flex-grow-1 p-5 d-flex align-items-center col">
          <div>
            <h2 className="mb-3 fw-bold">
              Mr. {chefDetail.name}'s <br /> Culinary Journey
            </h2>
            <p>{chefDetail.description}</p>
            <p className="fs-5">
              <strong>Years of Experience:</strong>{" "}
              <span className="text-danger">{chefDetail.experience}</span> years
            </p>
            <p className="fs-5">
              <strong>Number of Recipes:</strong>{" "}
              <span className="text-danger">{chefDetail.recipes}</span>
            </p>
            <Button disabled variant="dark">
              <FaThumbsUp className="fs-6 me-2 text-warning"></FaThumbsUp>
              <span className="text-warning">{chefDetail.likes}</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefBio;
