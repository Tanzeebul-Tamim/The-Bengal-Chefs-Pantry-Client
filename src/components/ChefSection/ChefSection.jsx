import React, { useState } from "react";
import './ChefSection.css';
import { FaThumbsUp } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ChefSection = ({ chefsSection }) => {

  return (
    <div style={{ overflowX: "hidden" }}>
      <div className="row p-5 g-4">
        <h1 id="chefSection-title" className="text-center text-warning mb-4">Our Top Chefs</h1>
        {chefsSection?.map((chefCard) => {
             const [likes, setLikes] = useState(chefCard.likes);
             const [likeClicked, setLikeClicked] = useState(false);
             const handleLikeClick = () => {
                if (!likeClicked) {
                    setLikes(likes + 1);
                    setLikeClicked(true);
                  }
             }; 
          return (
            <div key={chefCard.id} id="chef-card" className="col-md-3">
              <div className="card bg-warning" >
                <img style={{height: "460px", width: "100%"}} src={chefCard.img} className="card-img-top" alt="..." />
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h4 className="text-center card-title fw-bold">{chefCard.name}</h4>
                  </div>
                  <div>
                        {
                            likeClicked ?
                            <Button variant="dark" onClick={handleLikeClick}>
                            <FaThumbsUp className="fs-6 me-2 text-warning"></FaThumbsUp>
                            <span className="text-warning">{likes}</span>
                            </Button> :
                            <Button variant="dark" onClick={handleLikeClick}>
                            <FaThumbsUp className="fs-6 me-2"></FaThumbsUp>
                            <span>{likes}</span>
                            </Button>
                        }
                  </div>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                    <strong>Years of Experience:</strong> <span className="text-danger">{chefCard.experience}</span> years</li>
                    <li className="list-group-item">
                    <strong>Numbers of Recipes:</strong> <span className="text-danger">{chefCard.recipes}</span></li>
                </ul>
                <div id="card-btn" className="card-body">
                    <Link key={chefCard.id} to={`/recipes/${chefCard.id}`}>
                      <Button className="text-white" variant="dark">View Recipes</Button>
                    </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChefSection;
