import React from "react";
import { useLoaderData } from "react-router-dom";
import { Button } from "react-bootstrap";
import './ChefDetails.css';
import { FaThumbsUp } from "react-icons/fa";


const ChefDetails = () => {
  const chefDetail = useLoaderData();

  return (
    <div className="container d-flex align-items-center flex-column justify-content-center my-5">
      <h1 id="chef-title" className="text-warning text-center mb-5">Get to know Mr. {chefDetail.name}</h1>
      <div style={{ width: "900px" }} id="chef-details-card" className="d-flex bg-warning">
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
            <h3 className="mb-3">Mr. {chefDetail.name}'s <br /> Culinary Journey</h3>
            <p>
              {chefDetail.description}
            </p>
            <p className="fs-5">
                <strong>Years of Experience:</strong> <span className="text-danger">{chefDetail.experience}</span> years
            </p>
            <p className="fs-5">
                <strong>Number of Recipes:</strong> <span className="text-danger">{chefDetail.recipes}</span>
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

export default ChefDetails;
