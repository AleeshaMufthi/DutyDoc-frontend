import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../api/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/userSlice';

const RegisterForm = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await registerUser(formData);
      console.log(response, 'reponse from the handlesubmit in registerform')

      const user = response.user;
      console.log(user, 'user')
      const userId = response.user.userId;

  dispatch(setUser({
  userId: user.userId,
  firstName: user.firstName,
  lastName: user.lastName,
  email: user.email,
}));

      // navigate to education page with userId (you can use state or params)
      navigate('/eduDetails', { state: { userId } });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl w-[430px] min-h-[460px] px-10 py-8 text-center">

       
          <div className="text-center mb-8">
            <h1 className="text-xl font-medium text-black mb-2">
              Welcome Doctor.!
            </h1>
            <p className="text-black text-xl font-medium">
              Register your details and start
            </p>
          </div>

      
          <div className="space-y-6">
            
        
            <div className="relative">
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-4 border-2 border-blue-900 rounded-full bg-white text-blue-800 font-medium placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-800"
                placeholder="First Name"
              />
              <label
                htmlFor="firstName"
                className="absolute -top-2 left-6 bg-white px-2 text-xs text-blue-800 font-medium"
              >
                First Name
              </label>
            </div>

            <div className="relative">
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-4 border-2 border-blue-900 rounded-full bg-white text-blue-800 font-medium placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-800"
                placeholder="Last Name"
              />
              <label
                htmlFor="lastName"
                className="absolute -top-2 left-6 bg-white px-2 text-xs text-blue-800 font-medium"
              >
                Last Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-4 border-2 border-blue-900 rounded-full bg-white text-blue-800 font-medium placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-800"
                placeholder="Email I'd"
              />
              <label
                htmlFor="email"
                className="absolute -top-2 left-6 bg-white px-2 text-xs text-blue-800 font-medium"
              >
                Email I'd
              </label>
            </div>

          </div>

            {error && <p className="text-red-600 mt-4">{error}</p>}

          <button
          onClick={handleSubmit}
          className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-4 px-6 rounded-full transition-colors duration-200 text-lg mt-8"
          >
            Continue
          </button>

    
          <div className="text-center mt-6">
            <span className="text-gray-800 text-sm">
              Do you have an account?{' '}
              <button
              onClick={() => navigate('/login')}
              className="text-blue-900 hover:text-blue-700 font-medium underline"
              >
                Login
              </button>
            </span>
          </div>

        </div>
  )
}

export default RegisterForm
