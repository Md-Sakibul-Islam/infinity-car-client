import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {user,isLoading}= useAuth();
    if(isLoading){
        return <>
        <div className="text-center mt-5"><Spinner animation="grow" /></div>
        </>
    }
    return (
        <Route
        {...rest}
        render={({location})=> user.email ? children : <Redirect 
        to={{
            pathname:'/login',
            state:{from:location}
        }}
        
        /> }
        >
            
        </Route>
    );
};

export default PrivateRoute;