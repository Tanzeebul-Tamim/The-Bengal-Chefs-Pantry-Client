import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../authProvider/AuthProvider';
import ReactLoading from 'react-loading';

const PrivateRoute = ({children}) => {
    const { loading, user } = useContext(AuthContext);
    const location = useLocation();

    if(loading) {
        return (
            <Container style={{height: "1000px"}} className="d-flex justify-content-center align-items-center">
                <ReactLoading type={"bubbles"} color={"#ffc107"} height={'20%'} width={'20%'} />
            </Container>
        );
    }

    if(user) {
        return children;
    }

    return <Navigate state={{from: location}} to="/login"></Navigate>
};

export default PrivateRoute;