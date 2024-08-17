import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import Login from './components/Auth/Login';
import RegisterPage from './components/Auth/RegisterUser';
import TeacherDashboard from './components/Teacher/TeacherDashboard';
import CRUDNotes from './components/Teacher/CRUDNotes';
import CRUDQuiz from './components/Teacher/CRUDQuiz';
import ManageTeacherProfile from './components/Teacher/ManageTeacherProfile';
import AdminDashboard from './components/Admin/AdminDashboard';
import AddUser from './components/Admin/AddUser';
import AboutUs from './components/pages/AboutUs'
import ContactUs from './components/pages/ContactUs'
import { ABOUT_US, ADD_USER, ADMIN_DASHBOARD, BASE_ROUTE, CONTACT_US, REGISTER_STUDENT, STUDENT_DASHBOARD, STUDENT_NOTES, STUDENT_PROFILE, STUDENT_QUIZ, TEACHER_DASHBOARD, TEACHER_NOTES, TEACHER_PROFILE, TEACHER_QUIZ } from './constants/appConstants';
import PrivateRoute from './components/utils/PrivateRoute';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-5 min-h-screen bg-gray-50">
        <Routes>
          {/* Public Routes */}
          <Route path={BASE_ROUTE} element={<Login />} />
          <Route path={REGISTER_STUDENT} element={<RegisterPage />} />

          {/* Private Routes for Students */}
          {/* <Route path={STUDENT_DASHBOARD} element={<PrivateRoute component={StudentDashboard} role="student" />} /> */}
          {/* <Route path={STUDENT_PROFILE} element={<PrivateRoute component={ManageStudentProfile} role="student" />} /> */}
          {/* <Route path={STUDENT_QUIZ} element={<PrivateRoute component={AttemptQuiz} role="student" />} /> */}
          {/* <Route path={STUDENT_NOTES} element={<PrivateRoute component={ViewNotes} role="student" />} /> */}

          {/* Private Routes for Teachers */}
          <Route path={TEACHER_DASHBOARD} element={<PrivateRoute component={TeacherDashboard} role="teacher" />} />
          <Route path={TEACHER_NOTES} element={<PrivateRoute component={CRUDNotes} role="teacher" />} />
          <Route path={TEACHER_QUIZ} element={<PrivateRoute component={CRUDQuiz} role="teacher" />} />
          <Route path={TEACHER_PROFILE} element={<PrivateRoute component={ManageTeacherProfile} role="teacher" />} />
          
          {/* Private Routes for Admin */}
          <Route path={ADMIN_DASHBOARD} element={<PrivateRoute component={AdminDashboard} role="admin" />} />
          <Route path={ADD_USER} element={<PrivateRoute component={AddUser} role="admin" />} />

          
          <Route path={ABOUT_US} element={<AboutUs/>} />
          <Route path={CONTACT_US} element={<ContactUs/>} />

          {/* Fallback Route */}
          <Route path="*" element={<Navigate to={BASE_ROUTE} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
