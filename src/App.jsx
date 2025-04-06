import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Teachers from "./components/Teachers";
import Admin from "./components/Admin";
import Students from "./components/Students";
<<<<<<< HEAD
import Courses from "./components/Courses";
import Login from "./components/Login";
import "./App.css"; // 
=======
import Login from "./components/login";
import Courses from "./components/Courses";
>>>>>>> 9513575a01b6f4f640e42be7907ebb243b918599

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
<<<<<<< HEAD
    <Router>
      <div>
        <header>
          <button onClick={logout}>Logout</button>
        </header>
        <Routes>
          <Route 
            path="/students" 
            element={userRole === "student" ? <Students user={user} /> : <Navigate to="/" />} 
          />
          <Route 
            path="/teachers" 
            element={userRole === "teacher" ? <Teachers user={user} /> : <Navigate to="/" />} 
          />
          <Route 
            path="/admin" 
            element={userRole === "admin" ? <Admin user={user} /> : <Navigate to="/" />} 
          />
          <Route 
            path="/courses" 
            element={<Courses userType={userRole} currentUser={user} />} 
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
=======
    <div>
      <header>
        <button onClick={logout}>Logout</button>
      </header>
      {userRole === "student" && <Students />}
      {userRole === "teacher" && <Teachers />}
      {userRole === "admin" && <Admin />}
    </div>
>>>>>>> 9513575a01b6f4f640e42be7907ebb243b918599
  );
}

export default App;