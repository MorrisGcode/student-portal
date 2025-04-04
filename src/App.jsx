import { useState } from "react";

import Login from "./components/login";
import Teachers from "./components/Teachers";
import Admin from "./components/Admin";
import Students from "./components/Students";
function App() {
  // const [user, setUser] = useState(null);
  // const [userRole, setUserRole] = useState(null);
  // // Simple logout function
  // const logout = () => {
  //   setUser(null);
  //   setUserRole(null);
  // };
  // if (!user) {
  //   return <Login setUser={setUser} setUserRole={setUserRole} />;
  // }
  return (
    <div>
      {/* <header>
        <button onClick={logout}>Logout</button>
      </header>
      {userRole === "students" && <Students/>}
      {userRole === "teachers" && <Teachers />}
      {userRole === "admin"&& <Admin/>} */}
      <Admin/>
    </div>
  );
}
export default App;