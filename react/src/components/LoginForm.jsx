import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/auth';


const LoginForm = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
    e.preventDefault();
      if (!email) {
      alert('Please enter your email');
      return;
    }
    try {
      setLoading(true);
      const res = await loginUser(email);
      console.log(res, 'response from the login')
      // You can store email temporarily in localStorage or global state
      // localStorage.setItem('emailForOtp', email);

      navigate('/otp', { state: { email }}); // Assuming you have an OTP page
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl w-[430px] min-h-[460px] px-10 py-8 text-center">

          <h2 className="text-xl font-bold text-gray-800 mb-1">
            Welcome to Duty Doctor <span className="">👋</span>
          </h2>
          <p className="text-sm text-gray-500 mb-10">Sign in to your account</p>

          <form className="mb-2" onSubmit={handleSubmit}>
            <div className="text-left">
              <label htmlFor="email" className="block text-2xl font-semibold text-black mb-6">
                Enter your email address to get otp
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="dummyemail@gmail.com"
                className="w-full px-4 py-3 border border-blue-950 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-950 mb-5"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-900 text-white py-3 rounded-full font-medium hover:bg-blue-800 transition mb-4"
            >
             {loading ? 'Sending OTP...' : 'Get OTP'}
            </button>

            <p className="text-sm text-gray-500 mb-7">
              By clicking, I accept the{" "}
              <a href="#" className="underline text-black">
                terms of services
              </a>{" "}
              and{" "}
              <a href="#" className="underline text-black">
                privacy policy
              </a>
            </p>

            <p className="text-sm text-black">
  If you don’t have an account?{" "}
  <button
    onClick={() => navigate('/register')}
    className="text-blue-800 font-medium hover:underline"
  >
    Register Now
  </button>
</p>
          </form>
        </div>
  )
}

export default LoginForm
