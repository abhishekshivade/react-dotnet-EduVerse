import { logout } from '../../services/authServices';
import { useDispatch } from 'react-redux';
import { logout as logoutAction } from '../../store/actions/authAction';
import { useNavigate } from 'react-router-dom';
import { BASE_ROUTE } from '../../constants/appConstants';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear session storage
    sessionStorage.removeItem('jwtToken');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('role');

    // Dispatch logout action
    dispatch(logoutAction());

    // Redirect to login
    navigate(BASE_ROUTE);
  };

  return (
    <button onClick={handleLogout} className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600">
      Logout
    </button>
  );
};

export default Logout;
