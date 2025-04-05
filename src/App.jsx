import { useState } from "react";

import Login from "./components/login";
import Teachers from "./components/Teachers";
import Admin from "./components/Admin";
import Students from "./components/Students";

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
      {userRole === "student" && <Students/>}
      {userRole === "teacher" && <Teachers />}
      {userRole === "admin" && <Admin/>}
    </div>
  );
}

export default App;