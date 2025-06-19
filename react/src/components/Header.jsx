import React, { useState, useRef, useEffect } from 'react'
import { Search, Bell, User, LogOut } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../api/auth';
import { clearUser } from '../features/userSlice';

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

const handleLogout = async () => {
  try {
    await logoutUser(); 
    alert('Are you sure want to logout?')   
    dispatch(clearUser());    
    navigate('/login');         
  } catch (error) {
    alert(error.message);
  }
};

  return (
    <div>
          {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <span className="text-xl font-semibold text-gray-800">Duty Doctor</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-black hover:text-blue-600 font-medium transition-colors">
              Home
            </a>
            <a href="#" className="text-black hover:text-blue-600 font-medium transition-colors">
              Academy
            </a>
            <a href="#" className="text-black hover:text-blue-600 font-medium transition-colors">
              Docs
            </a>
          </nav>

          {/* Search and Profile */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black w-4 h-4" />
              <input
                type="text"
                placeholder="Search jobs here..."
                className="pl-10 pr-4 py-2 w-64 text-black border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
              <Bell className="w-5 h-5 text-blue-800" />
            </button>

              <div className="relative">
            <button 
            onClick={handleLogout}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors">
              <User className="w-5 h-5 text-blue-800" />
            </button>
                         
               
            
            </div>
          </div>
        </div>
      </header>
      </div>
  )
}

export default Header
