import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BASE_ROUTE, ABOUT_US, CONTACT_US } from '../../constants/appConstants';
import { logout } from '../../store/actions/authActions'

const Navbar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
  };

  return (
    <nav className="p-4 text">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to={BASE_ROUTE}>EduVerse</Link>
        </div>
        <div className="space-x-4">
          <Link to={ABOUT_US} className="hover:text-electric_blue">About Us</Link>
          <Link to={CONTACT_US} className="hover:text-electric_blue">Contact Us</Link>
          {isAuthenticated ? (
            <>
              <span className="ml-4">Welcome, {user?.firstName}</span>
              <button
                onClick={handleLogout}
                className="ml-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              >
                Logout
              </button>
            </>
          ) :""}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;