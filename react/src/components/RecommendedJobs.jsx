import React from 'react'
import logoImg from '../assets/kmch.logo.png'
import { Building, IndianRupee, MapPin } from 'lucide-react';

const RecommendedJobs = () => {

      const jobs = [
  {
    title: "Duty Doctor / Medical Officer",
    company: "Kovai Medical Center and Hospitals",
    location: "Coimbatore, Tamil Nadu",
    experience: "10-15 lakhs",
    type: "Cardiology",
    description:
      "We are seeking experienced Doctors with a minimum of 5+ years of clinical experience to join now. read more",
    logo: "KMCH",
  },
  {
    title: "Duty Doctor",
    company: "Kovai Medical Center and Hospitals",
    location: "Coimbatore, Tamil Nadu",
    experience: "10-15 lakhs",
    type: "Cardiology",
    description:
      "We are seeking experienced Doctors with a minimum of 5+ years of clinical experience to join now. read more",
    logo: "KMCH",
  },
];

  return (
     <div className='border border-gray-200 p-5 rounded-2xl'>
             <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Recommended jobs for you</h2>
        <button className="text-blue-600 hover:text-blue-700 font-medium">View all</button>
      </div>

      <div className="flex space-x-4 overflow-x-auto no-scrollbar">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="min-w-[320px] max-w-sm flex-shrink-0 bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start space-x-3 mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center font-bold text-blue-900 text-sm">
               <img src={logoImg} alt="Logo" className="h-10 w-auto" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">{job.title}</h3>
                <p className="text-sm text-gray-500">{job.company}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-3">
              <div className="flex items-center gap-1">
                <Building className="w-4 h-4 text-blue-900" />
                <span>{job.type}</span>
              </div>
              <div className="flex items-center gap-1">
                <IndianRupee className="w-4 h-4 text-blue-900" />
                <span>{job.experience}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-blue-900" />
                <span className="truncate max-w-[120px]">{job.location}</span>
              </div>
            </div>

            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              {job.description}
            </p>

            <div className="flex gap-3">
              <button className="flex-1 border border-blue-900 text-blue-900 rounded-full py-3 text-sm font-medium hover:bg-blue-50 transition-colors">
                Direct Call
              </button>
              <button className="flex-1 bg-blue-900 text-white rounded-full py-3 text-sm font-medium hover:bg-blue-800 transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
          </div>

  )
}

export default RecommendedJobs
