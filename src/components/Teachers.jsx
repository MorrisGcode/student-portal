import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';



import { FaUserGraduate, FaSignOutAlt } from 'react-icons/fa'



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
                    <li><Link to="/courses">Courses</Link></li>
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
   

      
      <div className="flex-1 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Course Statistics</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Total Courses</span>
                <span className="font-bold">5</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Active Students</span>
                <span className="font-bold">150</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Average Score</span>
                <span className="font-bold">85%</span>
              </div>
            </div>
          </div>

      
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Upcoming Classes</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-3">
                <p className="font-medium">Web Development</p>
                <p className="text-sm text-gray-600">Today - 10:00 AM</p>
              </div>
              <div className="border-l-4 border-green-500 pl-3">
                <p className="font-medium">Database Design</p>
                <p className="text-sm text-gray-600">Tomorrow - 2:00 PM</p>
              </div>
            </div>
          </div>

        
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Recent Submissions</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Project Report</p>
                  <p className="text-sm text-gray-600">by John Doe</p>
                </div>
                <button className="text-blue-600 hover:text-blue-700">Review</button>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Final Assignment</p>
                  <p className="text-sm text-gray-600">by Jane Smith</p>
                </div>
                <button className="text-blue-600 hover:text-blue-700">Review</button>
              </div>
            </div>
          </div>

         
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-3 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200">
                Create Assignment
              </button>
              <button className="p-3 bg-green-100 text-green-600 rounded-lg hover:bg-green-200">
                Schedule Class
              </button>
              <button className="p-3 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-200">
                Send Announcement
              </button>
              <button className="p-3 bg-yellow-100 text-yellow-600 rounded-lg hover:bg-yellow-200">
                Grade Submissions
              </button>
            </div>
          </div>

       
          <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Student Progress</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Student</th>
                    <th className="text-left py-2">Course</th>
                    <th className="text-left py-2">Progress</th>
                    <th className="text-left py-2">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">John Doe</td>
                    <td className="py-2">Web Development</td>
                    <td className="py-2">75%</td>
                    <td className="py-2">A</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Jane Smith</td>
                    <td className="py-2">Database Design</td>
                    <td className="py-2">90%</td>
                    <td className="py-2">A+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

 
  </div>    

  )
}

export default Teachers
