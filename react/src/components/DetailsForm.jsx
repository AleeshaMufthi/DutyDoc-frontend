import React, {useState} from 'react'
import { addEducationalDetails } from '../api/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DetailsForm = () => {

  const navigate = useNavigate();

const user = useSelector((state) => state.user);

const userId = user.userId;
console.log(userId,'userID')
console.log(user, 'state.user');
 

  const [degree, setDegree] = useState('');
  const [isCompleted, setIsCompleted] = useState('');
  const [formData, setFormData] = useState({
    country: '',
    instituteName: '',
    medicalRegNo: '',
    year: '',
    pgDegree: '',
    speciality: '',
    fellowship: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async () => {
    if (!degree || !formData.instituteName || !formData.country) {
      alert('Please fill required fields');
      return;
    }

    try {
      const payload = {
        userId,
        degree,
        completion: isCompleted,
        ...formData
      };

      await addEducationalDetails(payload);
      navigate('/home');
    } catch (error) {
      console.error(error.message);
      alert('Something went wrong. Please try again.');
    }
  };


  const renderFields = () => {
    const fields = [];

    // Common field: Country (for all degrees)
    fields.push(

                <div key="country" className="relative">
            <select
              value={formData.country}
              onChange={(e) => handleInputChange('country', e.target.value)}
              className="w-full px-4 py-4 border-2 border-blue-900 rounded-full bg-white text-blue-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-800 appearance-none cursor-pointer"
              id="country"
            >
              <option value="">Select</option>
              <option value="1">India</option>
              <option value="2">America</option>
            </select>
            <label
              htmlFor="country"
              className="absolute -top-2 left-6 bg-white px-2 text-xs text-blue-800 font-medium"
            >
              Country
            </label>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <svg className="w-5 h-5 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
    );

    // Common field: Institute Name (for all degrees)
    fields.push(
      <div key="instituteName" className="relative">
        <input
          type="text"
          value={formData.instituteName}
          onChange={(e) => handleInputChange('instituteName', e.target.value)}
          className="w-full px-4 py-4 border-2 border-blue-900 rounded-full bg-white text-blue-800 font-medium placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-800"
          placeholder="Institute Name"
          id="instituteName"
        />
        <label
          htmlFor="instituteName"
          className="absolute -top-2 left-6 bg-white px-2 text-xs text-blue-800 font-medium"
        >
          Institute Name
        </label>
      </div>
    );

    // MBBS degree fields
    if (degree === 'mbbs') {
      if (isCompleted === 'yes') {
        // MBBS completed: medical reg no
        fields.push(
          <div key="medicalRegNo" className="relative">
            <input
              type="text"
              value={formData.medicalRegNo}
              onChange={(e) => handleInputChange('medicalRegNo', e.target.value)}
              className="w-full px-4 py-4 border-2 border-blue-900 rounded-full bg-white text-blue-800 font-medium placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-800"
              placeholder="Medical Registration Number"
              id="medicalRegNo"
            />
            <label
              htmlFor="medicalRegNo"
              className="absolute -top-2 left-6 bg-white px-2 text-xs text-blue-800 font-medium"
            >
              Medical Registration Number
            </label>
          </div>
        );
      } else if (isCompleted === 'no') {
        // MBBS ongoing: year
        fields.push(
          <div key="year" className="relative">
            <select
              value={formData.year}
              onChange={(e) => handleInputChange('year', e.target.value)}
              className="w-full px-4 py-4 border-2 border-blue-900 rounded-full bg-white text-blue-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-800 appearance-none cursor-pointer"
              id="year"
            >
              <option value="">Select</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
            </select>
            <label
              htmlFor="year"
              className="absolute -top-2 left-6 bg-white px-2 text-xs text-blue-800 font-medium"
            >
              Current Year
            </label>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <svg className="w-5 h-5 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        );
      }
    }

    // PG degree fields
    if (degree === 'pg') {
      // PG Degree field (for both completed and ongoing)
      fields.push(
        <div key="pgDegree" className="relative">
          <input
            type="text"
            value={formData.pgDegree}
            onChange={(e) => handleInputChange('pgDegree', e.target.value)}
            className="w-full px-4 py-4 border-2 border-blue-900 rounded-full bg-white text-blue-800 font-medium placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-800"
            placeholder="PG Degree"
            id="pgDegree"
          />
          <label
            htmlFor="pgDegree"
            className="absolute -top-2 left-6 bg-white px-2 text-xs text-blue-800 font-medium"
          >
            PG Degree
          </label>
        </div>
      );

      if (isCompleted === 'no') {
        // PG ongoing: year, speciality, medRegno
        fields.push(
          <div key="year" className="relative">
            <select
              value={formData.year}
              onChange={(e) => handleInputChange('year', e.target.value)}
              className="w-full px-4 py-4 border-2 border-blue-900 rounded-full bg-white text-blue-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-800 appearance-none cursor-pointer"
              id="year"
            >
              <option value="">Select</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
            </select>
            <label
              htmlFor="year"
              className="absolute -top-2 left-6 bg-white px-2 text-xs text-blue-800 font-medium"
            >
              Current Year
            </label>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <svg className="w-5 h-5 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        );

        fields.push(
          <div key="speciality" className="relative">
            <select
              value={formData.speciality}
              onChange={(e) => handleInputChange('speciality', e.target.value)}
              className="w-full px-4 py-4 border-2 border-blue-900 rounded-full bg-white text-blue-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-800 appearance-none cursor-pointer"
              id="speciality"
            >
              <option value="">Select</option>
              <option value="1">Heart Surgeon</option>
              <option value="2">Bone Surgeon</option>
            </select>
            <label
              htmlFor="speciality"
              className="absolute -top-2 left-6 bg-white px-2 text-xs text-blue-800 font-medium"
            >
              Speciality
            </label>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <svg className="w-5 h-5 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        );

        fields.push(
          <div key="medicalRegNo" className="relative">
            <input
              type="text"
              value={formData.medicalRegNo}
              onChange={(e) => handleInputChange('medicalRegNo', e.target.value)}
              className="w-full px-4 py-4 border-2 border-blue-900 rounded-full bg-white text-blue-800 font-medium placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-800"
              placeholder="Medical Registration Number"
              id="medicalRegNo"
            />
            <label
              htmlFor="medicalRegNo"
              className="absolute -top-2 left-6 bg-white px-2 text-xs text-blue-800 font-medium"
            >
              Medical Registration Number
            </label>
          </div>
        );
      } else if (isCompleted === 'yes') {
        // PG completed: medregistration no
        fields.push(
          <div key="medicalRegNo" className="relative">
            <input
              type="text"
              value={formData.medicalRegNo}
              onChange={(e) => handleInputChange('medicalRegNo', e.target.value)}
              className="w-full px-4 py-4 border-2 border-blue-900 rounded-full bg-white text-blue-800 font-medium placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-800"
              placeholder="Medical Registration Number"
              id="medicalRegNo"
            />
            <label
              htmlFor="medicalRegNo"
              className="absolute -top-2 left-6 bg-white px-2 text-xs text-blue-800 font-medium"
            >
              Medical Registration Number
            </label>
          </div>
        );
      }
    }

    // Super Speciality degree fields
    if (degree === 'super_speciality') {
      // Speciality field (for both completed and ongoing)
      fields.push(

          <div key="speciality" className="relative">
            <select
              value={formData.speciality}
              onChange={(e) => handleInputChange('speciality', e.target.value)}
              className="w-full px-4 py-4 border-2 border-blue-900 rounded-full bg-white text-blue-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-800 appearance-none cursor-pointer"
              id="speciality"
            >
              <option value="">Select</option>
              <option value="1">Heart Surgeon</option>
              <option value="2">Bone Surgeon</option>
            </select>
            <label
              htmlFor="speciality"
              className="absolute -top-2 left-6 bg-white px-2 text-xs text-blue-800 font-medium"
            >
              Speciality
            </label>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <svg className="w-5 h-5 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
      );

      // Medical Registration Number (for both completed and ongoing)
      fields.push(
        <div key="medicalRegNo" className="relative">
          <input
            type="text"
            value={formData.medicalRegNo}
            onChange={(e) => handleInputChange('medicalRegNo', e.target.value)}
            className="w-full px-4 py-4 border-2 border-blue-900 rounded-full bg-white text-blue-800 font-medium placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-800"
            placeholder="Medical Registration Number"
            id="medicalRegNo"
          />
          <label
            htmlFor="medicalRegNo"
            className="absolute -top-2 left-6 bg-white px-2 text-xs text-blue-800 font-medium"
          >
            Medical Registration Number
          </label>
        </div>
      );

      if (isCompleted === 'no') {
        // Super speciality ongoing: also needs year
        fields.push(
          <div key="year" className="relative">
            <select
              value={formData.year}
              onChange={(e) => handleInputChange('year', e.target.value)}
              className="w-full px-4 py-4 border-2 border-blue-900 rounded-full bg-white text-blue-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-800 appearance-none cursor-pointer"
              id="year"
            >
              <option value="">Select</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
            </select>
            <label
              htmlFor="year"
              className="absolute -top-2 left-6 bg-white px-2 text-xs text-blue-800 font-medium"
            >
              Current Year
            </label>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <svg className="w-5 h-5 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        );
      }
    }

    // Fellowship degree fields
    if (degree === 'fellowship') {
      // Fellowship field (for both completed and ongoing)
      fields.push(

            <div key="fellowship" className="relative">
            <select
              value={formData.fellowship}
              onChange={(e) => handleInputChange('fellowship', e.target.value)}
              className="w-full px-4 py-4 border-2 border-blue-900 rounded-full bg-white text-blue-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-800 appearance-none cursor-pointer"
              id="fellowship"
            >
              <option value="">Select</option>
              <option value="1">Academic</option>
              <option value="2">Clinical</option>
            </select>
            <label
              htmlFor="fellowship"
              className="absolute -top-2 left-6 bg-white px-2 text-xs text-blue-800 font-medium"
            >
              fellowship
            </label>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <svg className="w-5 h-5 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
      );

      // Medical Registration Number (for both completed and ongoing)
      fields.push(
        <div key="medicalRegNo" className="relative">
          <input
            type="text"
            value={formData.medicalRegNo}
            onChange={(e) => handleInputChange('medicalRegNo', e.target.value)}
            className="w-full px-4 py-4 border-2 border-blue-900 rounded-full bg-white text-blue-800 font-medium placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-800"
            placeholder="Medical Registration Number"
            id="medicalRegNo"
          />
          <label
            htmlFor="medicalRegNo"
            className="absolute -top-2 left-6 bg-white px-2 text-xs text-blue-800 font-medium"
          >
            Medical Registration Number
          </label>
        </div>
      );

      if (isCompleted === 'no') {
        // Fellowship ongoing: also needs year
        fields.push(
          <div key="year" className="relative">
            <select
              value={formData.year}
              onChange={(e) => handleInputChange('year', e.target.value)}
              className="w-full px-4 py-4 border-2 border-blue-900 rounded-full bg-white text-blue-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-800 appearance-none cursor-pointer"
              id="year"
            >
              <option value="">Select</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
            </select>
            <label
              htmlFor="year"
              className="absolute -top-2 left-6 bg-white px-2 text-xs text-blue-800 font-medium"
            >
              Current Year
            </label>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <svg className="w-5 h-5 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        );
      }
    }

    return fields;
  };

  return (
        <div className="bg-white rounded-3xl shadow-xl w-[430px] min-h-[460px] px-10 py-8 text-center">

       
          <div className="text-center mb-8">
            <h1 className="text-xl font-medium text-black text-left mb-2">
              Enter your Educational <br />
              Details
            </h1>
          </div>

      
          <div className="space-y-4">
            
        
        <div className="relative">
          <select
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            className="w-full px-4 py-4 border-2 border-blue-900 rounded-full bg-white text-blue-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-800 appearance-none cursor-pointer"
            id="degreeType"
          >
            <option value="">Select degree type</option>
            <option value="mbbs">MBBS</option>
            <option value="pg">PG</option>
            <option value="super_speciality">Super Speciality</option>
            <option value="fellowship">Fellowship</option>
          </select>
          <label
            htmlFor="degreeType"
            className="absolute -top-2 left-6 bg-white px-2 text-xs text-blue-800 font-medium"
          >
            Degree
          </label>
          <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
            <svg className="w-5 h-5 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <div className="relative">
          <select
            value={isCompleted}
            onChange={(e) => setIsCompleted(e.target.value)}
            className="w-full px-4 py-4 border-2 border-blue-900 rounded-full bg-white text-blue-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-800 appearance-none cursor-pointer"
            id="completion"
          >
            <option value="">Select status</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <label
            htmlFor="completion"
            className="absolute -top-2 left-6 bg-white px-2 text-xs text-blue-800 font-medium"
          >
            Completion
          </label>
          <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
            <svg className="w-5 h-5 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

         {degree && isCompleted && renderFields()}

          </div>

          {/* Continue Button */}
          <button
          onClick={handleSubmit}
            className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-4 px-6 rounded-full transition-colors duration-200 text-lg mt-8"
          >
            Continue
          </button>

      
        </div>
  )
}

export default DetailsForm
