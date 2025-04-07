import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Teachers from "./components/Teachers";
import Admin from "./components/Admin";
import Students from "./components/Students";
import Login from "./components/Login";
import Courses from "./components/Courses";

function App() {
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);

  const logout = () => {
    setUser(null);
    setUserRole(null);
  };

  if (!user) {
    return <Login setUser={setUser} setUserRole={setUserRole} />;
  }

  return (
    <Router>
      <div>
        <header>
          <button onClick={logout}>Logout</button>
        </header>
        <Routes>
          <Route 
            path="/students" 
            element={userRole === "student" ? <Students /> : <Navigate to="/" />} 
          />
          <Route 
            path="/teachers" 
            element={userRole === "teacher" ? <Teachers /> : <Navigate to="/" />} 
          />
          <Route 
            path="/admin" 
            element={userRole === "admin" ? <Admin /> : <Navigate to="/" />} 
          />
          <Route 
            path="/courses" 
            element={<Courses userType={userRole} />} 
          />
          <Route 
            path="/" 
            element={
              userRole ? (
                <Navigate to={`/${userRole}s`} replace />
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