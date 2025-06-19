import API from "./axios";

export const registerUser = async (userData) => {
    try {
        const response = await API.post('/api/auth/register', userData);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Registration failed');
    }
};

// Add educational details
export const addEducationalDetails = async (educationData) => {
    try {
        const response = await API.post('/api/auth/education', educationData);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to save education details');
    }
};

// Login - send OTP
export const loginUser = async (email) => {
    try {
        const response = await API.post('/api/auth/login', { email });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Login failed');
    }
};

// Verify OTP
export const verifyOtp = async (email, otp) => {
    try {
        const response = await API.post('/api/auth/verify-otp', { email, otp });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'OTP verification failed');
    }
};

export const resendOtpAPI = async (email) => {
  try {
    const response = await API.post('/api/auth/resend-otp', { email });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to resend OTP');
  }
};


export const getProfile = async () => {
    try {
        const response = await API.get('/api/auth/profile');
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'OTP verification failed');
    }
};

export const logoutUser = async () => {
  try {
    const response = await API.post('/api/auth/logout');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Logout failed');
  }
};