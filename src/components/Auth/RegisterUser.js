import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerStudent } from "../../services/authServices";
import { BASE_ROUTE } from "../../constants/appConstants";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const RegisterUser = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    emailId: "",
    mobileNumber: "",
    password: "",
    courseId: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const handleChange = (e) => {
    setUserData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  // Validation Functions
  const handleFirstName = () => {
    if (userData.firstName.trim() === "") {
      setError((prevError) => ({
        ...prevError,
        firstNameErr: "First Name is required",
      }));
    } else {
      setError((prevError) => ({
        ...prevError,
        firstNameErr: "",
      }));
    }
  };

  const handleLastName = () => {
    if (userData.lastName.trim() === "") {
      setError((prevError) => ({
        ...prevError,
        lastNameErr: "Last Name is required",
      }));
    } else {
      setError((prevError) => ({
        ...prevError,
        lastNameErr: "",
      }));
    }
  };

  const handleEmail = () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(userData.emailId)) {
      setError((prevError) => ({
        ...prevError,
        emailErr: "Please enter a valid email",
      }));
    } else {
      setError((prevError) => ({
        ...prevError,
        emailErr: "",
      }));
    }
  };

  const handlePassword = () => {
    if (userData.password.length < 8) {
      setError((prevError) => ({
        ...prevError,
        passwordErr: "Password must be at least 8 characters long",
      }));
    } else {
      setError((prevError) => ({
        ...prevError,
        passwordErr: "",
      }));
    }
  };

  const handleConfirmPassword = () => {
    if (userData.password !== confirmPassword) {
      setError((prevError) => ({
        ...prevError,
        confirmPasswordErr: "Passwords do not match",
      }));
    } else {
      setError((prevError) => ({
        ...prevError,
        confirmPasswordErr: "",
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (userData.password !== confirmPassword) {
      setError((prevError) => ({
        ...prevError,
        confirmPasswordErr: "Passwords do not match",
      }));
      return;
    }

    try {
      const response = await registerStudent(userData);
      if (response && response.status === 201) {
        navigate(BASE_ROUTE);
      }
    } catch (error) {
      setError((prevError) => ({
        ...prevError,
        generalErr: "Failed to register. Please check your data and try again.",
      }));
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
      <h1 className="text-xl font-bold mb-4">Register</h1>
      {error.generalErr && (
        <p className="text-red-500 mb-4">{error.generalErr}</p>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">First Name</label>
          <input
            type="text"
            name="firstName"
            value={userData.firstName}
            onChange={handleChange}
            onBlur={handleFirstName}
            className="w-full px-3 py-2 border rounded"
            required
          />
          <p className="text-red-500 text-sm">
            {error.firstNameErr ? error.firstNameErr : <br />}
          </p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Middle Name</label>
          <input
            type="text"
            name="middleName"
            value={userData.middleName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={userData.lastName}
            onChange={handleChange}
            onBlur={handleLastName}
            className="w-full px-3 py-2 border rounded"
            required
          />
          <p className="text-red-500 text-sm">
            {error.lastNameErr ? error.lastNameErr : <br />}
          </p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="emailId"
            value={userData.emailId}
            onChange={handleChange}
            onBlur={handleEmail}
            className="w-full px-3 py-2 border rounded"
            required
          />
          <p className="text-red-500 text-sm">
            {error.emailErr ? error.emailErr : <br />}
          </p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Mobile Number</label>
          <input
            type="tel"
            name="mobileNumber"
            value={userData.mobileNumber}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Password</label>
          <div className="flex items-center">
            <input
              type={!showPassword ? "password" : "text"}
              name="password"
              value={userData.password}
              onChange={handleChange}
              onBlur={handlePassword}
              className="w-full px-3 py-2 border rounded"
              required
            />
            <div onClick={togglePasswordVisibility}>
              {!showPassword ? (
                <VisibilityIcon className="mx-2 cursor-pointer" />
              ) : (
                <VisibilityOffIcon className="mx-2 cursor-pointer" />
              )}
            </div>
          </div>
          <p className="text-red-500 text-sm">
            {error.passwordErr ? error.passwordErr : <br />}
          </p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Confirm Password</label>
          <div className="flex items-center">
            <input
              type={!showConfirmPassword ? "password" : "text"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onBlur={handleConfirmPassword}
              className="w-full px-3 py-2 border rounded"
              required
            />
            <div onClick={toggleConfirmPasswordVisibility}>
              {!showConfirmPassword ? (
                <VisibilityIcon className="mx-2 cursor-pointer" />
              ) : (
                <VisibilityOffIcon className="mx-2 cursor-pointer" />
              )}
            </div>
          </div>
          <p className="text-red-500 text-sm">
            {error.confirmPasswordErr ? error.confirmPasswordErr : <br />}
          </p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Select Course</label>
          <select
            name="courseId"
            value={userData.courseId}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          >
            <option value="" disabled>
              Select your course
            </option>
            <option value="1">DAC</option>
            <option value="2">DBDA</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded"
        >
          Register
        </button>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to={BASE_ROUTE} className="text-blue-500">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterUser;
