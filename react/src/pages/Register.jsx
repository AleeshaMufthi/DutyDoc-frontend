import React from 'react'
import RegisterForm from '../components/RegisterForm'
import bImage from '../assets/51d6a907cf4d903c606fc0e1749b99b420206601.png' 

const Register = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <div
        className="w-full h-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${bImage})`, 
        }}
      >
     <RegisterForm />
      </div>
    </div>
  )
}

export default Register
