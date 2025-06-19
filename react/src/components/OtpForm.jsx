import React, { useState, useRef, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { verifyOtp } from '../api/auth';
import { resendOtpAPI } from '../api/auth';

const OtpForm = () => {

const navigate = useNavigate();
const location = useLocation();
const email = location.state?.email;

const [timer, setTimer] = useState(60); // For countdown
const [canResend, setCanResend] = useState(false);

useEffect(() => {
  if (timer === 0) {
    setCanResend(true);
    return;
  }

  const countdown = setInterval(() => {
    setTimer((prev) => prev - 1);
  }, 1000);

  return () => clearInterval(countdown);
}, [timer]);



  const [otpDigits, setOtpDigits] = useState(new Array(6).fill(''));
  const inputRefs = useRef([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);


  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const updated = [...otpDigits];
    updated[index] = value;
    setOtpDigits(updated);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otpDigits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async () => {
    const otp = otpDigits.join('');
    if (otp.length !== 6 || !email) {
      alert('Please enter the full 6-digit OTP and make sure email is provided.');
      return;
    }

    try {
      setLoading(true);
      await verifyOtp(email, otp);
      navigate('/home');
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
  try {
    setLoading(true);
    await resendOtpAPI(email);
    setTimer(60);
    setCanResend(false);
    alert('OTP resent successfully!');
  } catch (err) {
    alert(err.message);
  } finally {
    setLoading(false);
  }
};


  return (
   <div className="bg-white rounded-3xl shadow-xl w-[430px] min-h-[460px] px-10 py-8 text-center">
    
        <div className="text-left pt-10">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">
            6 - digit code
          </h1>
          <p className="text-gray-800 text-md font-medium mb-10">
            Please enter the code we've sent to your<br />
            email dummyemail@gmail.com
          </p>
        </div>

        
        <div className="flex justify-center gap-3 mb-4">
              {otpDigits.map((digit, i) => (
          <input
            key={i}
            ref={(el) => (inputRefs.current[i] = el)}
            type="text"
            value={digit}
            maxLength={1}
            onChange={(e) => handleChange(e.target.value, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            className="w-10 h-12 bg-blue-900 text-white text-xl font-bold text-center rounded-3xl border-none outline-none focus:ring-2 focus:ring-blue-300"
          />
        ))}
        </div>

   
       <div className="text-center mb-8">
  {canResend ? (
    <button
      onClick={handleResend}
      disabled={loading}
      className="text-blue-900 hover:text-blue-600 font-medium"
    >
      Resend Code
    </button>
  ) : (
    <span className="text-gray-500">Resend code in 00:{timer}</span>
  )}
</div>

      
        <button
        onClick={handleSubmit}
        disabled={loading}
          className="w-full bg-blue-900 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-full transition-colors duration-200 text-lg"
        >
            {loading ? 'Verifying...' : 'Continue'}
        </button>
      </div>
    
  )
}

export default OtpForm
