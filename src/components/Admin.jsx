import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { db} from '../config/firebase';
import { collection, getDocs, query,where, } from 'firebase/firestore';
import { FaUserGraduate, FaSignOutAlt } from "react-icons/fa";


function Admin() {
  const [date, setDate] = useState(new Date()); 
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [enrollments, setEnrollments] = useState([]);
  const [courses, setCourses] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [filteredTeachers, setFilteredTeachers] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [showEnrolledStudents, setShowEnrolledStudents] = useState(false);





  useEffect(() => {
    const fetchData = async () => {
      try {

  const studentQuery = query(collection(db, "users"), where("role", "==", "student"));
  const studentSnapshot = await getDocs(studentQuery);
  const studentList = studentSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  setStudents(studentList);
  console.log('Students:', studentList);


  const teacherQuery = query(collection(db, "users"), where("role", "==", "teacher"));
  const teacherSnapshot = await getDocs(teacherQuery);
  const teacherList = teacherSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  setTeachers(teacherList);
  console.log('Teachers:', teacherList);


  const enrollmentSnapshot = await getDocs(collection(db, "enrollments"));
  const enrollmentList = enrollmentSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  setEnrollments(enrollmentList);
  console.log("Fetched Enrollments:", enrollmentList);

} catch (error) {
  console.error("Error fetching data: ", error);
}
};

fetchData();
}, []);

const handleSearch = () => {
const queryLower = searchQuery.toLowerCase();
setFilteredStudents(students.filter(student => student.name?.toLowerCase().includes(queryLower)));
setFilteredTeachers(teachers.filter(teacher => teacher.name?.toLowerCase().includes(queryLower)));
setFilteredCourses(courses.filter(course => course.name?.toLowerCase().includes(queryLower)));
setFilteredEnrollments(enrollments.filter(enrollment => enrollment.name?.toLowerCase().includes(queryLower)));
};

  return (

    <div className="flex">
      <div className="w-64 h-screen bg-purple-200 p-6 fixed">
        <div className="flex flex-col items-center">
          <FaUserGraduate className="text-4xl mb-4 text-purple-600" />
          <ul className="space-y-4 text-gray-700">
            <h1><b>You are now in the Admin Dashboard </b></h1>
            <li><a href="Students.jsx" className="block p-2 hover:text-purple-600">Student's Dashboard</a></li>
            <li><a href="Teachers.jsx" className="block p-2 hover:text-purple-600">Teacher's Dashboard</a></li>
            <li><a href="Courses.jsx" className="block p-2 hover:text-purple-600">Courses</a></li>
          </ul>
        </div>
        <div className="absolute bottom-6 left-6">
          <FaSignOutAlt className="inline-block mr-2 text-gray-700" />
          <a href="Login.jsx" className="text-gray-700 hover:text-red-600">Logout</a>
        </div>
      </div>

      <div className="ml-64 w-full p-6">
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow p-2 border rounded-lg"
          />
          <button onClick={handleSearch} className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg">Search</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500 shadow-xl transition hover:shadow-2xl">
            <h3 className="text-lg font-bold">Students</h3>

            <div className="w-16 h-16 border-4 border-blue-500 rounded-full flex items-center justify-center mx-auto">
    <span className="text-xl font-bold text-blue-500">{students.length}</span>
  </div>

            <ul className="text-gray-700 list-disc pl-5 space-y-1">
            {(searchQuery ? filteredStudents : students).map(student => (

                <li key={student.id}>{student.name}</li>
              ))}
            </ul>
          </div>

 
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500 shadow-xl transition hover:shadow-2xl">
            <h3 className="text-lg font-bold">Teachers</h3>

            <div className="w-16 h-16 border-4 border-purple-500 rounded-full flex items-center justify-center mx-auto">
    <span className="text-xl font-bold text-purple-500">{teachers.length}</span>
  </div>
            <ul className="text-gray-700 list-disc pl-5 space-y-1">
              {(searchQuery ? filteredTeachers : teachers).map(teacher => (
                <li key={teacher.id}>{teacher.name}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500 shadow-xl transition hover:shadow-2xl">
            <h3 className="text-lg font-bold">Total Enrollments</h3>
            <p className="text-3xl mt-2 text-yellow-600 font-semibold">{students.length}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mt-6 border-pink-500">
          <h3 className="text-lg font-bold mb-4">Admin Calendar</h3>
          <Calendar
            onChange={setDate}
            value={date}
            className="rounded-lg6 "
          />
    
        </div>
      </div>
    </div>
  );
}


export default Admin;


