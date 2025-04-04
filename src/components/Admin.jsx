// import React from 'react'
// import { FaUserGraduate , FaHome, FaBook, FaClipboardList, FaCalendar, FaSignOutAlt } from "react-icons/fa";

// function Admin() {
//   return (
  
//    <div className='bar'>
//            <div className='sidebar'>
               
//                <nav className='nav'>
                   
//                    <ul>
//                    <div className='logo'>
//                     < FaUserGraduate className='logo-icon' />
//                     </div>
//                        <br />
//                        <li><a href="Students.jsx"> Student's Dashboard</a></li>
//                        <br />
//                        <li><a href="Teachers.jsx">Teacher's Dashboard</a></li>
//                        <br />
//                        <li><a href="#">Reports</a></li>
//                        <br />
       
//                        <li><a href="Courses">Courses</a></li>
//                        <br />
//                        <br />
//                        <br />
//                        <br />
//                        <br />
//                        <br />
//                        <br />
//                        <FaSignOutAlt />
//                       <li><a href="#">Logout</a></li>
       
//                    </ul>
//                </nav>
       
//                <div className="flex flex-col w-full p-6 space-y-6">
//      {/* Search Bar */}
//      <div className="w-full flex justify-center">
//        <input type="text" placeholder="Search..." className="w-3/4 p-3 border rounded-lg" />
//        <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg">Search</button>
//      </div>
   
//      {/* Responsive Grid for Cards */}
//      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//        {/* Finance Card */}
//        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//          <h3 className="text-lg font-bold">Finance</h3>
//          <p>Total Payable: <span className="font-semibold">$10,000</span></p>
//        </div>
   
//        {/* Courses Card */}
//        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//          <h3 className="text-lg font-bold">Courses</h3>
//          <p>Web Development</p>
//        </div>
   
//        {/* Upcoming Exams Card */}
//        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//          <h3 className="text-lg font-bold">Upcoming Exams</h3>
//          <p>April 10 - Math</p>
//        </div>
//      </div>
//    </div>
//        </div>
    
//      </div>    

//   )
// }

// export default Admin

import React from 'react';
import { FaUserGraduate, FaSignOutAlt } from "react-icons/fa";

function Admin() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 h-screen bg-purple-200 p-6 fixed">
        <div className="flex flex-col items-center">
          <FaUserGraduate className="text-4xl mb-4 text-purple-600" />
          <ul className="space-y-4 text-gray-700">
            <li><a href="Students.jsx" className="block p-2 hover:text-purple-600">Student's Dashboard</a></li>
            <li><a href="Teachers.jsx" className="block p-2 hover:text-purple-600">Teacher's Dashboard</a></li>
            <li><a href="#" className="block p-2 hover:text-purple-600">Reports</a></li>
            <li><a href="Courses" className="block p-2 hover:text-purple-600">Courses</a></li>
          </ul>
        </div>
        {/* Logout */}
        <div className="absolute bottom-6 left-6">
          <FaSignOutAlt className="inline-block mr-2 text-gray-700" />
          <a href="#" className="text-gray-700 hover:text-red-600">Logout</a>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 w-full p-6">
        {/* Search Bar */}
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
          <input 
            type="text" 
            placeholder="Search..." 
            className="flex-grow p-2 border rounded-lg"
          />
          <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg">Search</button>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {/* Student Management Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
            <h3 className="text-lg font-bold">Students</h3>
            <p>Total Enrolled: <span className="font-semibold">120</span></p>
          </div>

          {/* Course Management Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
            <h3 className="text-lg font-bold">Courses</h3>
            <p>Active Courses: <span className="font-semibold">8</span></p>
          </div>

          {/* Teacher Management Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
            <h3 className="text-lg font-bold">Teachers</h3>
            <p>Available Instructors: <span className="font-semibold">15</span></p>
          </div>

          {/* Enrollments Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
            <h3 className="text-lg font-bold">Enrollments</h3>
            <p>New Enrollments: <span className="font-semibold">35</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
