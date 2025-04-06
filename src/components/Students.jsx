import React from 'react'
import { FaUserGraduate , FaHome, FaBook, FaClipboardList, FaCalendar, FaSignOutAlt } from "react-icons/fa";

function Students() {

  return (

    
        <div className='bar'>
        <div className='sidebar'>
            
            <nav className='nav'>
                
                <ul>
                <div className='logo'>
                 < FaUserGraduate className='logo-icon' />
                 </div>
                    <br />
                    <li><a href="Students.jsx"> Student's Dashboard</a></li>
                    <br />
                    <li><a href="Teachers.jsx">Teacher's Dashboard</a></li>
                    <br />
                    <li><a href="#">Reports</a></li>
                    <br />
    
                    <li><a href="Courses">Courses</a></li>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <FaSignOutAlt />
                   <li><a href="#">Logout</a></li>
    
                </ul>
            </nav>
    
            <div className="flex flex-col w-full p-6 space-y-6">
  
  <div className="w-full flex justify-center">
    <input type="text" placeholder="Search..." className="w-3/4 p-3 border rounded-lg" />
    <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg">Search</button>
  </div>


  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-bold">Finance</h3>
      <p>Total Payable: <span className="font-semibold">$10,000</span></p>
    </div>


    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-bold">Courses</h3>
      <p>Web Development</p>
    </div>


    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-bold">Upcoming Exams</h3>
      <p>April 10 - Math</p>
    </div>
  </div>
</div>
    </div>
 
  </div>    

  )
}

export default Students
