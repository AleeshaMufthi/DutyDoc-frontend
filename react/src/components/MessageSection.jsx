import React from 'react'
import logoImg from '../assets/kmch.logo.png'
import richmondLogo from '../assets/richmond.logo.png'
import fimsLogo from '../assets/fims.logo.png'

const MessageSection = () => {
  return (
             <div className="border border-gray-200 p-5 rounded-2xl mt-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Message</h2>
            <button className="text-blue-900 hover:underline text-sm font-medium">View all</button>
          </div>
    
          {/* Message Item 1 */}
          <div className="flex items-center justify-between py-4 border-t border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-md overflow-hidden">
                <img src={logoImg} alt="KMCH Hospital" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">KMCH Hospital</h3>
                <p className="text-sm text-gray-500">Thank you for your inter....</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs text-gray-500 block">08:20</span>
              <div className="mt-1 w-5 h-5 rounded-full bg-blue-900 text-white text-[10px] flex items-center justify-center">
                2
              </div>
            </div>
          </div>
    
          {/* Message Item 2 */}
          <div className="flex items-center justify-between py-4 border-t border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-md overflow-hidden">
                <img src={richmondLogo} alt="Richmond Hospital" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Richmond Hospital</h3>
                <p className="text-sm text-gray-500">Hey hai..</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs text-gray-500 block">07:20</span>
            </div>
          </div>
    
          {/* Message Item 3 */}
          <div className="flex items-center justify-between py-4 border-t border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-md overflow-hidden">
                <img src={fimsLogo} alt="FIMS Hospital" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">FIMS Hospital</h3>
                <p className="text-sm text-gray-500">Thank you for your inter....</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs text-gray-500 block">08:20</span>
              <div className="mt-1 w-5 h-5 rounded-full bg-blue-900 text-white text-[10px] flex items-center justify-center">
                2
              </div>
            </div>
          </div>
        </div>
  )
}

export default MessageSection
