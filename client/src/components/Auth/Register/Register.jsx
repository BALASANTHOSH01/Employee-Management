import React, { useState } from 'react';
import { InputField } from '../../reusableComponents';
import { Link, useNavigate } from 'react-router-dom';
import { registerFormValidation } from '../../../utils/validation/authValidation';

const Register = () => {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    mobile: '',
  });

  const handleRegisterData = (e) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const errors = registerFormValidation(registerData);
    if (errors.length > 0) {
      alert('Please fill all the fields');
    } else {
      console.log('Register Data:', registerData);
      // Optionally, navigate to another route after successful registration
      navigate('/dashboard');
    }
  };

  return (
    <div>
      <div className="w-[35%] md:w-[85%] md:px-[4%] md:mt-[20%] mx-auto my-[6%] px-[2%] py-[2%] bg-gray-100 rounded-[10px]">
        <h1 className="text-xl font-semibold uppercase text-center mb-[5%]">Register</h1>
        <form onSubmit={handleRegisterSubmit}>
          <InputField
            name="name"
            type="text"
            value={registerData.name}
            handleChange={handleRegisterData}
          />
          <InputField
            name="email"
            type="email"
            value={registerData.email}
            handleChange={handleRegisterData}
          />
          <InputField
            name="password"
            type="password"
            value={registerData.password}
            handleChange={handleRegisterData}
          />
          <InputField
            name="mobile"
            type="text"
            value={registerData.mobile}
            handleChange={handleRegisterData}
          />
          <button
            type="submit"
            className="w-[100%] my-[2%] border border-white mx-auto px-[17px] py-[10px] text-center font-semibold bg-[var(--primary-color)] text-white"
          >
            Submit
          </button>
        </form>
        <div className="flex flex-row items-center justify-between text-[14px]">
          <p>Already have an account ?</p>
          <Link to="/login" className="text-[var(--primary-color)] underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
