import React from 'react'
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaGlobe } from "react-icons/fa";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <footer className="bg-[#1A238E] text-white px-8 py-10">
         <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col lg:flex-row justify-between gap-10">
           
           {/* Logo + Social + App */}
           <div className="flex flex-col gap-6">
             {/* Logo */}
             <div className="flex items-center gap-2">
               <div className="w-10 h-10 bg-white text-[#1A238E] font-bold rounded-lg flex items-center justify-center text-2xl">D</div>
               <h2 className="text-xl font-semibold">
                 <span className="text-white">Duty</span> <span className="font-normal">Doctor</span>
               </h2>
             </div>
   
             {/* Connect With Us */}
             <div>
               <p className="font-semibold mb-2">Connect with us</p>
               <div className="flex gap-4 text-xl">
                 <FaInstagram />
                 <FaFacebookF />
                 <FaGlobe />
                 <FaLinkedinIn />
               </div>
             </div>
   
             {/* Download App */}
             <div>
               <p className="font-semibold mb-2">Download the app</p>
               <div className="flex gap-4 text-3xl">
                 <FaApple />
                 <FaGooglePlay />
               </div>
             </div>
           </div>
   
           {/* Footer Links */}
           <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-lg">
             <div className="flex flex-col gap-2">
               <a href="#">About us</a>
               <a href="#">Careers</a>
               <a href="#">Employer home</a>
               <a href="#">Sitemap</a>
               <a href="#">Credits</a>
             </div>
             <div className="flex flex-col gap-2">
               <a href="#">Help center</a>
               <a href="#">Notices</a>
               <a href="#">Grievances</a>
               <a href="#">Report</a>
               <a href="#">Issue</a>
             </div>
             <div className="flex flex-col gap-2">
               <a href="#">Privacy policy</a>
               <a href="#">Terms & conditions</a>
               <a href="#">Trust & safety</a>
               <a href="#">Fraud alert</a>
             </div>
           </div>
         </div>
   
        
       </footer>
        {/* Copyright */}
         <div className="text-lg text-black text-left mt-3">
           All rights reserved ©2025 Duty Doctors (India) Ltd.
         </div>
         </>
  )
}

export default Footer
