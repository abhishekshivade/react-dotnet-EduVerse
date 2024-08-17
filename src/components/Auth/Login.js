import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/authServices';
import { LOGIN_SUCCESS } from '../../store/types/authTypes';
import { ADMIN_DASHBOARD, REGISTER_STUDENT, STUDENT_DASHBOARD, TEACHER_DASHBOARD } from '../../constants/appConstants';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const student={email,password}
      const response = await login(student);
      const { token, role, userId } = response.data;

      // console.log(response.data.role);
      // console.log("token : ", token)

      // Save JWT token in session storage
      sessionStorage.setItem('jwtToken', token);
      sessionStorage.setItem('userId', userId);
      sessionStorage.setItem('role', role);

      // Dispatch login success action
      dispatch({ type: LOGIN_SUCCESS, payload: { token, userId, role } });

      // Redirect based on user role
      if (role === 'Student') {
        navigate(STUDENT_DASHBOARD);
      } else if (role === 'Teacher') {
        navigate(TEACHER_DASHBOARD);
      } else if (role === 'Admin') {
        navigate(ADMIN_DASHBOARD);
      }
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
      <h1 className="text-xl font-bold mb-4">Login</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Password</label>
          <div className='flex items-center'>
            <input
              type={!showPassword ? "password" : "text"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
            <div onClick={togglePasswordVisibility}>
              {!showPassword ? <VisibilityIcon className='mx-2' /> : <VisibilityOffIcon className='mx-2' />}
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>

      <p className='w-fit mx-auto my-10'>Don't have account <Link to={REGISTER_STUDENT} className='text-blue-500'>Sign Up</Link> here</p>
    </div>
  );
};

export default Login;
