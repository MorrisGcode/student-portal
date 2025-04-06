import { useState } from "react";
import "./login.css";
import { auth } from "/config/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,} from "firebase/auth";
import {db} from "/config/firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";


const Login = ({ setUser, setUserRole }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); 
  const [role, setRole] = useState("student"); 
  const [isNewUser, setIsNewUser] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let userCredential;
      if (isNewUser) {
        //new user
        userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        
        // Store user data in Firestore
        await addDoc(collection(db, "users"), {
          uid: userCredential.user.uid,
          name: name,
          email: email,
          role: role,
          createdAt: new Date().toISOString()
        });

        setUserRole(role);
      } else {
        // Login existing user
        userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        // Get user role from Firestore
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("uid", "==", userCredential.user.uid));
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
          const userData = querySnapshot.docs[0].data();
          setUserRole(userData.role);
        } else {
          console.error("No user data found");
          setUserRole(""); 
        }
      }
      setUser(userCredential.user);
    } catch (error) {
      console.error("Error during authentication", error);
      alert(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>{isNewUser ? "Sign Up" : "Login"}</h2>
        <form onSubmit={handleSubmit}>
          {isNewUser && (
            <>
              <div className="form-group">
                <label>Full Name: </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              <div className="form-group">
                <label>Role: </label>
                <select 
                  value={role} 
                  onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </>
          )}
          <div className="form-group">
            <label>Email: </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            {isNewUser ? "Sign Up" : "Login"}
          </button>
        </form>
        <p>
          {isNewUser ? "Already have an account?" : "New user?"}{" "}
          <button
            onClick={() => setIsNewUser(!isNewUser)}
            className="toggle-btn"
          >
            {isNewUser ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
