import React from "react";
import { Button } from "react-bootstrap";
import { Link, useRouteError } from "react-router-dom";
import './ErrorPage.css';

const ErrorPage = () => {
  const { error, statusText } = useRouteError();

  return (
    <div className="bg-dark text text-center" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <img style={{width: "50%"}} className="p-5 rounded-4" src="https://beginners.money/_assets/images/404-2.png" alt="" />
        <h1 style={{fontSize: "90px"}} className="text-warning">{statusText}</h1>
        <p style={{fontSize: "30px"}} className="text-warning">{error?.message}</p>
        <Link to="/">
          <Button className="fs-2 px-4" variant="warning">Back To Homepage</Button>
        </Link>
    </div>
  );
};

export default ErrorPage;
