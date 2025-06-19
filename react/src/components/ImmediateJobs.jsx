import React from 'react'
import { Briefcase } from 'lucide-react'

const ImmediateJobs = () => {
  return (
              <div className="mb-8 mt-5 rounded-2xl border border-gray-200 p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Immediate jobs</h2>
              <button className="text-blue-600 hover:text-blue-700 font-medium">View all</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { city: "Coimbatore", jobs: "5.5K", openings: "1.5K" },
                { city: "Chennai", jobs: "12.3K", openings: "1.5K" },
                { city: "Madurai", jobs: "15.3K", openings: "1.5K" },
                { city: "Thiruvannam", jobs: "12.3K", openings: "1.5K" },
              ].map((location, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Briefcase className="w-6 h-6 text-blue-900" />
                    </div>
                    <h3 className="font-medium text-gray-800 mb-1">{location.city}</h3>
                    <p className="text-sm text-gray-600">
                      {location.jobs} + Jobs
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
  )
}

export default ImmediateJobs
