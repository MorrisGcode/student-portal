import React from "react";
import { useState } from "react";
function Teachers() {
  const [course, setCourse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch({ type: "courses", payload: text });
      setText("");
    }
  };
  return (
    <div>
      <div>
        <p className="Title">We Offer The Following Courses</p>
      </div>
      <div className="grid">
        <div className="container" onSubmit={handleSubmit}>
          <img
            src="/code-1076536_1280.jpg"
            alt="coding"
            className="img"
            value='software'
            id="software"
            
          />
          <p className="text">Software Development</p>
          <button className="btn">Access</button>
        </div>
        <div className="container">
          <img src="/data.jpg" alt="coding" value='data' className="img" id="data"  />
          <p className="text">Data science</p>
          <button className="btn">Access</button>
        </div>
        <div className="container">
          <img
            src="/matrix-356024_1280.webp"
            alt="coding"
            value='cyber'
            className="img"
            id="cyber"
          />
          <p className="text">Cyber Security</p>
          <button className="btn">Access</button>
        </div>
        <div className="container">
          <img src="/Ai.jpg" alt="coding" value='coding' className="img" id="ai" />
          <p className="text">Computer Science</p>
          <button className="btn" onSubmit={handleSubmit}>Access</button>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Teachers;
