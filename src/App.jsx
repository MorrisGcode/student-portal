import { useState } from "react";
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
     

export default App;