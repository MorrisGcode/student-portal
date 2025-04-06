import React from 'react';
<<<<<<< HEAD
import { Link, useNavigate } from 'react-router-dom';
import { FaUserGraduate, FaSignOutAlt } from "react-icons/fa";

function Students() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logout logic here
    navigate('/');
  };

  return (
    <div className='bar'>
      <div className='sidebar'>
        <nav className='nav'>
          <ul>
            <div className='logo'>
              <FaUserGraduate className='logo-icon' />
            </div>
            <br />
            <li><Link to="/students">Student's Dashboard</Link></li>
            <br />
            <li><Link to="/courses">Courses</Link></li>
            <br />
            <li><Link to="/reports">Reports</Link></li>
=======
import {
  FaUserGraduate ,
  FaHome,
  FaBookOpen,
  FaLayerGroup,
  FaMoneyBill,
  FaRegSun,
  FaSignOutAlt
} from 'react-icons/fa';





function StudentDashboard() {




    


  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-800">

      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
       

       
        <nav className="flex-16 px-4 py-6">
          <div className="flex flex-col items-center">
                    <FaUserGraduate className="text-4xl mb-4 text-purple-600 " />
                    <h1><b>Student Dashboard </b></h1>
                    <br />
                    <br />
         
          <ul className="space-y-4">
            <li>


              <a href="#explore" className="flex items-center space-x-2 text-gray-600 hover:text-yellow-600">
                <FaHome />
                <span>Explore</span>
              </a>
            </li>
            <li>
              <a href="#Courses.jsx" className="flex items-center space-x-2 text-gray-600 hover:text-yellow-600">
                <FaBookOpen />
                <span>Courses</span>
              </a>
            </li>
            <li>
              <a href="#category" className="flex items-center space-x-2 text-gray-600 hover:text-yellow-600">
                <FaLayerGroup />
                <span>Category</span>
              </a>
            </li>
            <li>
              <a href="#payments" className="flex items-center space-x-2 text-gray-600 hover:text-yellow-600">
                <FaMoneyBill />
                <span>Payments</span>
              </a>
            </li>
            <li>
              <a href="#settings" className="flex items-center space-x-2 text-gray-600 hover:text-yellow-600">
                <FaRegSun />
                <span>Settings</span>
              </a>
            </li>
>>>>>>> 9513575a01b6f4f640e42be7907ebb243b918599
            <br />
            <br />
            <br />
            <br />
            <br />
<<<<<<< HEAD
            <br />
            <div className="logout-section">
              <FaSignOutAlt />
              <li><button onClick={handleLogout}>Logout</button></li>
            </div>
          </ul>
        </nav>

        <div className="flex flex-col w-full p-6 space-y-6">
          <div className="w-full flex justify-center">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-3/4 p-3 border rounded-lg" 
            />
            <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
              Search
            </button>
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
  );
}

export default Students;
=======
           <div className="absolute bottom-6 left-6">
                    <FaSignOutAlt className="inline-block mr-2 text-gray-700" />
                    <a href="Login.jsx" className="text-gray-700 hover:text-red-600">Logout</a>
                  </div>
          </ul>
          </div>
        </nav>

      
      </aside>


      <main className="flex-1 p-6">

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl font-semibold text-gray-700">Hello , Welcome  <span className="wave">👋</span></h1>
          </div>
        
        </div>
        

     
        <div className="bg-purple-100 rounded-xl p-6 mb-6 flex flex-col lg:flex-row items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Learn from the best</h2>
            <p className="text-gray-700 mb-4">
              Choose from 130,000+ online video courses with new additions published every month.
            </p>
            <a
  href=" https://www.youtube.com/playlist?list=PLb0JrFN0MGZ3Lh64Y8Wm5b4g2VNEtHFSv"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white border border-purple-500 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-100 transition inline-block text-center"
>
  Explore
</a>

          </div>
          
        </div>

      
        <div className="bg-purple-200 rounded-xl p-6 mb-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-800 mb-2">How to Design for a Beginner</h2>
              <p className="text-gray-700 mb-4">
                Get tips and resources to become a better app designer with advanced design patterns.
              </p>
            </div>
            <a
  href=" https://medium.com/@Vincentxia77/how-to-design-an-app-in-10-steps-ee81997bf7e1"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white border border-purple-500 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-100 transition inline-block text-center"
>
  Read the article
</a>

          </div>
        </div>

    
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-800">Featured Courses</h2>
          <p className="text-gray-600">Explore popular courses tailored for you</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
       
<div class="bg-white rounded-xl shadow-md overflow-hidden">
  <img src="/data.jpg" alt="coding"   className="w-full h-48 object-cover"id="data" />
  <div class="p-4">
    <h3 class="font-semibold text-gray-800">Software Development</h3>
    <a href="Courses.jsx" className="text-gray-700 hover:text-purple-600 underline">View Course</a>
    

  </div>
</div>

     
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src="/Ai.jpg" alt="coding"  className="w-full h-48 object-cover" id="ai" />
          
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">Computer Science </h3>
              <a href="Courses.jsx" className="text-gray-700 hover:text-purple-600 underline">View Course</a>
            </div>
          </div>

          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img 
              src="/matrix-356024_1280.webp"
              alt="coding"
              className="w-full h-48 object-cover"
              id="cyber"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">  Cyber Security</h3>
              <a href="Courses.jsx" className="text-gray-700 hover:text-purple-600 underline">View Course</a>
            </div>
          </div>
        </div>
      </main>
    </div>

    
  );
}

export default StudentDashboard;

 
  

  


>>>>>>> 9513575a01b6f4f640e42be7907ebb243b918599
