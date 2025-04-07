import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaUserGraduate,
  FaHome,
  FaBookOpen,
  FaLayerGroup,
  FaMoneyBill,
  FaRegSun,
  FaSignOutAlt
} from 'react-icons/fa';

function Students() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-800">
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <nav className="flex-16 px-4 py-6">
          <div className="flex flex-col items-center">
            <FaUserGraduate className="text-4xl mb-4 text-purple-600" />
            <h1><b>Student Dashboard</b></h1>
            <br />
            <br />
            <ul className="space-y-4">
              <li>
                <Link to="#explore" className="flex items-center space-x-2 text-gray-600 hover:text-yellow-600">
                  <FaHome />
                  <span>Explore</span>
                </Link>
              </li>
              <li>
                <Link to="/courses" className="flex items-center space-x-2 text-gray-600 hover:text-yellow-600">
                  <FaBookOpen />
                  <span>Courses</span>
                </Link>
              </li>
              <li>
                <Link to="#category" className="flex items-center space-x-2 text-gray-600 hover:text-yellow-600">
                  <FaLayerGroup />
                  <span>Category</span>
                </Link>
              </li>
              <li>
                <Link to="#payments" className="flex items-center space-x-2 text-gray-600 hover:text-yellow-600">
                  <FaMoneyBill />
                  <span>Payments</span>
                </Link>
              </li>
              <li>
                <Link to="#settings" className="flex items-center space-x-2 text-gray-600 hover:text-yellow-600">
                  <FaRegSun />
                  <span>Settings</span>
                </Link>
              </li>
              <li className="mt-auto">
                <button 
                  onClick={handleLogout}
                  className="flex items-center space-x-2 text-gray-600 hover:text-red-600"
                >
                  <FaSignOutAlt />
                  <span>Logout</span>
                </button>
              </li>
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
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src="/data.jpg" alt="coding" className="w-full h-48 object-cover" id="data" />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">Software Development</h3>
              <Link to="/courses" className="text-gray-700 hover:text-purple-600 underline">
                View Course
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src="/Ai.jpg" alt="coding" className="w-full h-48 object-cover" id="ai" />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">Computer Science </h3>
              <Link to="/courses" className="text-gray-700 hover:text-purple-600 underline">
                View Course
              </Link>
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
              <h3 className="font-semibold text-gray-800">Cyber Security</h3>
              <Link to="/courses" className="text-gray-700 hover:text-purple-600 underline">
                View Course
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Students;







