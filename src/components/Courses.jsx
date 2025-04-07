import React from "react";
import { useState, useEffect } from "react";

import { db } from "../config/firebase"; 

 import { collection, doc, updateDoc, deleteDoc, getDocs } from "firebase/firestore";

function Courses({ userType }) {
  const [course, setCourse] = useState("");
  const [enrollmentMessage, setEnrollmentMessage] = useState("");
  const [students, setStudents] = useState([]);
  const [showEnrolledStudents, setShowEnrolledStudents] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [editingStudent, setEditingStudent] = useState(null);


  const fetchStudents = async (courseValue) => {
    try {
      const querySnapshot = await getDocs(collection(db, "students"));
      const studentsList = querySnapshot.docs
        .map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        .filter(student => student.course === courseValue);
      setStudents(studentsList);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleCourseAction = (courseValue) => {
    setCourse(courseValue);
    if (userType === 'teacher') {
      setSelectedCourse(courseValue);
      setShowEnrolledStudents(true);
      console.log('Teacher accessing course:', courseValue);
       fetchStudents(courseValue);
    } else {
      setEnrollmentMessage(`Successfully enrolled in ${courseValue} course!`);
      setTimeout(() => setEnrollmentMessage(""), 3000);
      console.log('Student enrolling in course:', courseValue);
    }
  };
  const handleEdit = async (studentId) => {
    try {
      const studentRef = doc(db, "students", studentId);
      await updateDoc(studentRef, editingStudent);
      setEditingStudent(null);

      await fetchStudents(selectedCourse);
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };
  const handleDelete = async (studentId) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        await deleteDoc(doc(db, "students", studentId));
     
        await fetchStudents(selectedCourse);
      } catch (error) {
        console.error("Error deleting student:", error);
      }
    }
  };


  const buttonText = userType === 'Teacher' ? 'Access' : 'Enroll';

  return (
    <div>
      <div>
        <p className="Title">We Offer The Following Courses</p>
        {enrollmentMessage && (
          <div className="enrollment-success">
            {enrollmentMessage}
          </div>
        )}
         {showEnrolledStudents && userType === 'teacher' && (
        <div className="enrolled-students">
          <h3>Students Enrolled in {selectedCourse}</h3>
          <table className="students-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  {editingStudent && editingStudent.id === student.id ? (
                    <>
                      <td>
                        <input
                          value={editingStudent.name}
                          onChange={(e) => setEditingStudent({
                            ...editingStudent,
                            name: e.target.value
                          })}
                        />
                      </td>
                      <td>
                        <input  value={editingStudent.email}
                          onChange={(e) => setEditingStudent({
                            ...editingStudent,
                            email: e.target.value
                          })}
                        />
                      </td>
                      <td>
                        <button onClick={() => handleEdit(student.id)}>Save</button>
                        <button onClick={() => setEditingStudent(null)}>Cancel</button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{student.name}</td>
                      <td>{student.email}</td>
                      <td>
                        <button onClick={() => setEditingStudent(student)}>Edit</button>
                        <button onClick={() => handleDelete(student.id)}>Delete</button>
                      </td>
                    </>
                  )}
                </tr>  ))}
            </tbody>
          </table>
          <button className="close-btn" onClick={() => setShowEnrolledStudents(false)}>
            Close
          </button>
        </div>
      )}

      </div>
      
      <div className="grid">
        <div className="container">
          <img
            src="/code-1076536_1280.jpg"
            alt="coding"
            className="img"
            id="software"
          />
          <p className="text">Software Development</p>
          <button 
            className="btn"
            onClick={() => handleCourseAction('software')}
          >
            {buttonText}
          </button>
        </div>
        <div className="container">
          <img src="/data.jpg" alt="coding" className="img" id="data" />
          <p className="text">Data science</p>
          <button 
            className="btn"
            onClick={() => handleCourseAction('data')}
          >
            {buttonText}
          </button>
        </div>
        <div className="container">
          <img
            src="/matrix-356024_1280.webp"
            alt="coding"
            className="img"
            id="cyber"
          />
          <p className="text">Cyber Security</p>
          <button 
            className="btn"
            onClick={() => handleCourseAction('cyber')}
          >
            {buttonText}
          </button>
        </div>
        <div className="container">
          <img src="/Ai.jpg" alt="coding" className="img" id="ai" />
          <p className="text">Computer Science</p>
          <button 
            className="btn"
            onClick={() => handleCourseAction('coding')}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Courses;