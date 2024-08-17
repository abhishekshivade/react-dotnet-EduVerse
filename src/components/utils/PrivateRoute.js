import React from 'react'
import {Navigate, Route} from 'react-router-dom'
// import {useAuth} from '../../services/AuthContext'
import { useSelector } from 'react-redux';
import { BASE_ROUTE } from '../../constants/appConstants';

const PrivateRoute = ({ component: Component, role, ...rest }) => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuthenticated) {
          // If the user is not authenticated, redirect to login
          return <Navigate to={BASE_ROUTE} />;
        }

        if (role && user.role !== role) {
          // If user role does not match required role, redirect to login
          return <Navigate to={BASE_ROUTE} />;
        }

        // If authenticated and role matches (if any), render the component
        return <Component {...props} />;
      }}
    />
  );
};

export default PrivateRoute;
