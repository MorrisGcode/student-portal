// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import { useState } from 'react';
// import React from 'react';
// import { FaUserGraduate, FaSignOutAlt } from "react-icons/fa";

// const [date, setDate] = useState(new Date());
// function Admin() {
//   return (
//     <div className="flex">
 
//       <div className="w-64 h-screen bg-purple-200 p-6 fixed">
//         <div className="flex flex-col items-center">
//           <FaUserGraduate className="text-4xl mb-4 text-purple-600" />
//           <ul className="space-y-4 text-gray-700">
//             <li><a href="Students.jsx" className="block p-2 hover:text-purple-600">Student's Dashboard</a></li>
//             <li><a href="Teachers.jsx" className="block p-2 hover:text-purple-600">Teacher's Dashboard</a></li>
//             <li><a href="#" className="block p-2 hover:text-purple-600">Reports</a></li>
//             <li><a href="Courses" className="block p-2 hover:text-purple-600">Courses</a></li>
//           </ul>
//         </div>
  
//         <div className="absolute bottom-6 left-6">
//           <FaSignOutAlt className="inline-block mr-2 text-gray-700" />
//           <a href="#" className="text-gray-700 hover:text-red-600">Logout</a>
//         </div>
//       </div>


//       <div className="ml-64 w-full p-6">
  
//         <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
//           <input 
//             type="text" 
//             placeholder="Search..." 
//             className="flex-grow p-2 border rounded-lg"
//           />
//           <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg">Search</button>
//         </div>


//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

//           <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
//             <h3 className="text-lg font-bold">Students</h3>
//             <p>Total Enrolled: <span className="font-semibold">120</span></p>
//           </div>


//           <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
//             <h3 className="text-lg font-bold">Courses</h3>
//             <p>Active Courses: <span className="font-semibold">8</span></p>
//           </div>


//           <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
//             <h3 className="text-lg font-bold">Teachers</h3>
//             <p>Available Instructors: <span className="font-semibold">15</span></p>
//           </div>


//           <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
//             <h3 className="text-lg font-bold">Enrollments</h3>
//             <p>New Enrollments: <span className="font-semibold">35</span></p>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-md mt-6">
//   <h3 className="text-lg font-bold mb-4">Admin Calendar</h3>
//   <Calendar
//     onChange={setDate}
//     value={date}
//     className="rounded-lg"
//   />
// </div>



//         </div>
//       </div>
//     </div>
//   );
// }

// export default Admin;

// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import { FaUserGraduate, FaSignOutAlt } from "react-icons/fa";

// function Admin() {
//   const [date, setDate] = useState(new Date()); // ✅ Moved inside the component

//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <div className="w-64 h-screen bg-purple-200 p-6 fixed">
//         <div className="flex flex-col items-center">
//           <FaUserGraduate className="text-4xl mb-4 text-purple-600" />
//           <ul className="space-y-4 text-gray-700">
//             <h1><b>You are now in the Admin Dashboard </b></h1>
//             <li><a href="Students.jsx" className="block p-2 hover:text-purple-600">Student's Dashboard</a></li>
//             <li><a href="Teachers.jsx" className="block p-2 hover:text-purple-600">Teacher's Dashboard</a></li>
//             <li><a href="#" className="block p-2 hover:text-purple-600">Reports</a></li>
//             <li><a href="Courses" className="block p-2 hover:text-purple-600">Courses</a></li>
//           </ul>
//         </div>
//         <div className="absolute bottom-6 left-6">
//           <FaSignOutAlt className="inline-block mr-2 text-gray-700" />
//           <a href="#" className="text-gray-700 hover:text-red-600">Logout</a>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="ml-64 w-full p-6">
//         {/* Search Bar */}
//         <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
//           <input 
//             type="text" 
//             placeholder="Search..." 
//             className="flex-grow p-2 border rounded-lg"
//           />
//           <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg">Search</button>
//         </div>

       
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
//           <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500 shadow-xl transition hover:shadow-2xl">
//             <h3 className="text-lg font-bold">Students</h3>
//             {/* <ul className="text-gray-700 list-disc pl-5 space-y-1">
//               {students.map((student, index) => (
//                 <li key={index}>{student}</li>
//               ))}
//             </ul> */}
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500 shadow-xl transition hover:shadow-2xl">
//             <h3 className="text-lg font-bold">Courses</h3>
//             <p>Active Courses: <span className="font-semibold">8</span></p>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500 shadow-xl transition hover:shadow-2xl">
//             <h3 className="text-lg font-bold">Teachers</h3>
//             <p>Available Instructors: <span className="font-semibold">15</span></p>
//           </div>


//           <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500 shadow-xl transition hover:shadow-2xl">
//             <h3 className="text-lg font-bold">Enrollments</h3>
//             <p>New Enrollments: <span className="font-semibold">35</span></p>
//           </div>
//           </div>
        

//         {/* 🗓️ Calendar */}
//         <div className="bg-white p-6 rounded-lg shadow-md mt-6 border-pink-500">
//           <h3 className="text-lg font-bold mb-4">Admin Calendar</h3>
//           <Calendar
//             onChange={setDate}
//             value={date}
//             className="rounded-lg6"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Admin;

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FaUserGraduate, FaSignOutAlt } from "react-icons/fa";
import { db } from "/config/firebase";
import { collection, addDoc } from "firebase/firestore";

function Admin({students, courses ,teachers, enrollments}) {
  const [date, setDate] = useState(new Date()); 


  return (
    <div className="flex">
 
      <div className="w-64 h-screen bg-purple-200 p-6 fixed">
        <div className="flex flex-col items-center">
          <FaUserGraduate className="text-4xl mb-4 text-purple-600" />
          <ul className="space-y-4 text-gray-700">
            <h1><b>You are now in the Admin Dashboard </b></h1>
            <li><a href="Students.jsx" className="block p-2 hover:text-purple-600">Student's Dashboard</a></li>
            <li><a href="Teachers.jsx" className="block p-2 hover:text-purple-600">Teacher's Dashboard</a></li>
            <li><a href="#" className="block p-2 hover:text-purple-600">Reports</a></li>
            <li><a href="Courses" className="block p-2 hover:text-purple-600">Courses</a></li>
          </ul>
        </div>
        <div className="absolute bottom-6 left-6">
          <FaSignOutAlt className="inline-block mr-2 text-gray-700" />
          <a href="#" className="text-gray-700 hover:text-red-600">Logout</a>
        </div>
      </div>


      <div className="ml-64 w-full p-6">

        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
          <input 
            type="text" 
            placeholder="Search..." 
            className="flex-grow p-2 border rounded-lg"
          />
          <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg">Search</button>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500 shadow-xl transition hover:shadow-2xl">
            <h3 className="text-lg font-bold">Students</h3>
            <ul className="text-gray-700 list-disc pl-5 space-y-1">
              {students.map((student, index) => (
                <li key={index}>{student}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500 shadow-xl transition hover:shadow-2xl">
            <h3 className="text-lg font-bold">Courses</h3>
            <ul className="text-gray-700 list-disc pl-5 space-y-1">
              {courses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500 shadow-xl transition hover:shadow-2xl">
            <h3 className="text-lg font-bold">Teachers</h3>
            <ul className="text-gray-700 list-disc pl-5 space-y-1">
              {teachers.map((teacher, index) => (
                <li key={index}>{teacher}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500 shadow-xl transition hover:shadow-2xl">
            <h3 className="text-lg font-bold">Enrollments</h3>
            <ul className="text-gray-700 list-disc pl-5 space-y-1">
              {enrollments.map((enrollment, index) => (
                <li key={index}>{enrollment}</li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* 🗓️ Calendar */}
        <div className="bg-white p-6 rounded-lg shadow-md mt-6 border-pink-500">
          <h3 className="text-lg font-bold mb-4">Admin Calendar</h3>
          <Calendar
            onChange={setDate}
            value={date}
            className="rounded-lg6"
          />
        </div>
      </div>
    </div>
  );
}

export default Admin;
