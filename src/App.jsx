import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Teachers from "./components/Teachers";
import Admin from "./components/Admin";
import Students from "./components/Students";
import Courses from "./components/Courses";
import Login from "./components/login";
import "./App.css"; 



function App() {
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);

  
  console.log('Current user role:', userRole);

  const logout = () => {
    setUser(null);
    setUserRole(null);
  };

  return (
    <Router>
      <div>
        <header>
          {user && <button onClick={logout}>Logout</button>}
        </header>
        <Routes>
          <Route 
            path="/login" 
            element={!user ? <Login setUser={setUser} setUserRole={setUserRole} /> : <Navigate to="/" />} 
          />
          <Route 
            path="/students" 
            element={userRole === "student" ? <Students user={user} /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/teachers" 
            element={userRole === "teacher" ? <Teachers user={user} /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/admin" 
            element={
              userRole === "admin" ? (
                <Admin user={user} />
              ) : (
                <Navigate to="/login" replace />
              )
            } 
          />
          <Route 
            path="/courses" 
            element={<Courses userType={userRole} currentUser={user} />} 
          />
          <Route 
            path="/" 
            element={
              user ? (
                <Navigate to={userRole === "admin" ? "/admin" : `/${userRole}s`} replace />
              ) : (
                <Navigate to="/login" replace />
              )
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;