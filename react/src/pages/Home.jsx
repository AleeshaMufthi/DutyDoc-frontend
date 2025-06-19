import React, {useState, useEffect} from 'react'
import { User, MapPin, Clock, Users, Phone, Check, Briefcase, IndianRupee, Building, Search } from "lucide-react"
import Header from '../components/Header'
import { getProfile } from '../api/auth'
import girlImg from '../assets/dutydoc-home-removebg-preview.png'
import gridImg from '../assets/034e99c2184e82be247d1f588670da885d74d7fc.png'
import profilePic from '../assets/profile.png'
import RecommendedJobs from '../components/RecommendedJobs'
import Duty from '../components/Duty'
import ImmediateJobs from '../components/ImmediateJobs'
import MessageSection from '../components/MessageSection'
import workLogo from '../assets/workwiselogo.png'

import Footer from '../components/Footer'

const Home = () => {

  const [profile, setProfile] = useState({
  firstName: '',
  lastName: '',
  instituteName: '',
});

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile();
        setProfile(data);
      } catch (error) {
        console.error("Failed to fetch profile:", error.message);
      }
    };

    fetchProfile();
  }, []);


  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="flex max-w-7xl mx-auto">
        {/* Left Sidebar */}
        <aside className="w-64 mt-6 bg-white rounded-2xl p-6 min-h-screen border-r border-gray-200">
          {/* Profile Section */}
          <div className="text-center mb-8">
            <div className="relative inline-block">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <img
          src={profilePic}
          alt="Profile"
          className="w-full rounded-full h-full object-cover"
        />
              </div>
              <div className="absolute -top-1 -right-1 bg-blue-900 text-white text-xs px-2 py-1 rounded-full">75%</div>
            </div>
            <h3 className="font-semibold text-gray-800 flex items-center justify-center gap-1">
               {profile.firstName} {profile.lastName}
              <div className="w-4 h-4 bg-blue-900 rounded-full flex items-center justify-center">
                <Check className="w-2.5 h-2.5 text-white" />
              </div>
            </h3>
            <p className="text-sm text-gray-600">Duty Doctor</p>
            <p className="text-xs text-gray-500 mb-3">@{profile.instituteName}</p>
            <button className="bg-blue-900 hover:bg-blue-700 text-white px-4 py-2 rounded-md w-full transition-colors">
              Complete Profile
            </button>
          </div>

          {/* Profile Performance */}
          <div className="mb-8">
            <h4 className="font-medium text-gray-800 mb-3">Profile performance</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Search appearances</p>
                <p className="font-semibold">20 +</p>
              </div>
              <div>
                <p className="text-gray-600">Recruiter actions</p>
                <p className="font-semibold">15 +</p>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-2">
            <a
              href="#"
              className="flex items-center space-x-3 p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <div className="w-5 h-5 bg-gray-300 rounded"></div>
              <span>My Home</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <div className="w-5 h-5 bg-gray-300 rounded"></div>
              <span>Message</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <div className="w-5 h-5 bg-gray-300 rounded"></div>
              <span>Duties</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <div className="w-5 h-5 bg-gray-300 rounded"></div>
              <span>Wishlist</span>
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Banner */}
<div
  className="relative rounded-2xl overflow-hidden py-2"
  style={{
    background: 'linear-gradient(135deg, #6069b6 0%, #b0b4db 50%, #ffff 100%)',
  }}
>
  {/* Grid Background Image  */}
  <div 
    className="absolute left-0 top-0 w-1/3 h-full opacity-20"
    style={{
      backgroundImage: `url(${gridImg})`,
      backgroundRepeat: 'repeat',
      backgroundSize: '40px 40px',
      backgroundPosition: 'left center',
    }}
  />

  <div className="relative flex items-center justify-between h-full px-8">
    {/* Left Content */}
    <div className=" max-w-md z-10 flex-1">
      <h1 className="text-4xl lg:text-3xl font-bold mb-3" style={{color: '#f9d935'}}>
        Discover Jobs Across Popular Roles.!
      </h1>
      <p className="text-white mb-6 opacity-90 text-lg">
        Select a role and we'll show you <br />relevant jobs for it!
      </p>
          <div className="flex space-x-3">
            <button className="bg-white text-blue-800 hover:bg-gray-100 px-6 py-3 rounded-3xl font-medium transition-colors">
              Explore Jobs
            </button>
            <button className="bg-blue-900 text-white hover:bg-blue-700 px-6 py-3 rounded-3xl font-medium transition-colors">
              Register Now
            </button>
          </div>
    </div>

    {/* Right Image  */}
    <div className="hidden lg:flex justify-end items-end flex-1 relative">
      <div className="relative">
        <img
          src={girlImg}
          alt="Female professional doctor"
          className="h-72 w-auto object-contain"
          style={{
            filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.2))',
            transform: 'translateY(10px)'
          }}
        />
      </div>
    </div>
  </div>
</div>

          {/* Immediate Jobs */}

<ImmediateJobs />
          {/* Recommended Jobs */}
          <RecommendedJobs />
         
         {/* Message section */}

       <MessageSection />

 {/* Dutys section */}
 <Duty />


         </main>

        {/* Right Sidebar */}
        <aside className="w-80 p-6">
          {/* Job Search Journey */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">Where are you in your job search journey?</h3>
            <div className="space-y-3">
              {[
                "Actively searching jobs",
                "Preparing for interviews",
                "Received a job offer",
                "Casually exploring jobs",
              ].map((item, index) => (
                <label key={index} className="flex items-center space-x-3 cursor-pointer">
                  <input type="radio" name="journey" className="text-blue-600 focus:ring-blue-500" />
                  <span className="text-sm text-gray-700">{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Promotional Cards */}
         <div className="bg-white rounded-xl overflow-hidden shadow mb-4">
  {/* Top Image */}
  <img
    src={workLogo} // Replace with your actual logo/banner
    alt="Workwise with Naukri"
    className="w-full h-32 object-cover"
  />

  {/* Content */}
  <div className="p-4">
    {/* Text */}
    <h4 className="text-gray-900 font-semibold mb-2 text-sm leading-snug">
      How to Coach Managers on Effectively Leading Gen Z Employees
    </h4>
    <p className="text-gray-700 text-small mb-4">
      Generation Z, the digital natives entering the workforce, bring unique qualities, from an entrepreneurial
      mindset to a strong preference for financial stability.
    </p>

    {/* Know More Button */}
    <button className="text-[#1A238E] font-medium text-md hover:underline">
      Know More
    </button>
  </div>
</div>


         <div className="bg-white rounded-xl overflow-hidden shadow mb-4">
  {/* Top Image */}
  <Search 
    className="w-16 h-16 mt-3"
  />

  {/* Content */}
  <div className="p-4">
    {/* Text */}
    <h4 className="text-gray-900 font-semibold mb-2 text-md leading-snug">
      How to Coach Managers on Effectively Leading Gen Z Employees
    </h4>
    <p className="text-gray-700 text-small mb-4">
      Generation Z, the digital natives entering the workforce, bring unique qualities, from an entrepreneurial
      mindset to a strong preference for financial stability.
    </p>

    {/* Know More Button */}
    <button className="text-[#1A238E] font-medium text-sm hover:underline">
      Know More
    </button>
  </div>
</div>

        </aside>
      </div>
    

    
 {/* Footer*/}
<Footer />

    </div>
  )
}

export default Home


