import { useState } from "react";
import Teachers from "./components/Teachers";
import Admin from "./components/Admin";
import Students from "./components/Students";
import Courses from "./components/Courses";
import Login from "./components/login";
import App.css from "./App.css";


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
    <div>
      <header>
        <button onClick={logout}>Logout</button>
      </header>
      {userRole === "student" && <Students />}
      {userRole === "teacher" && <Teachers />}
      {userRole === "admin" && <Admin />}
    </div>
  );
}

export default App;