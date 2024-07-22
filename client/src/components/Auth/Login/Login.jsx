import { useState } from 'react';
import InputField from '../../reusableComponents/InputField'; // Ensure the correct import path
import { loginFormValidation } from '../../../utils';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    });

    const handleLoginData = (e) => {
        const { name, value } = e.target;
        setLoginData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const error = loginFormValidation(loginData);
        if(error.length > 0){
            alert("Invalid Credentials");
        } else {
            navigate("/dashboard");
            console.log("LoginData:", loginData);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='w-[35%] md:w-[85%] px-[2%] md:px-[4%] py-[2%] bg-gray-100 rounded-[10px] mx-auto mt-[7%] md:mt-[20%]'>
                <h1 className="text-xl font-semibold uppercase text-center mb-[5%]">Login</h1>

                <InputField name="username" type="text" value={loginData.username} handleChange={handleLoginData} />
                <InputField name="password" type="password" value={loginData.password} handleChange={handleLoginData} />

                <div>
                    <button type='submit' className="w-[100%] my-[2%] border border-white mx-auto px-[17px] py-[10px] text-center font-semibold bg-[var(--primary-color)] text-white">Submit</button>
                </div>

                <div className=' flex flex-row items-center justify-between text-[14px]'>
                <p>Don&apos;s have an account ?</p>
                <Link to={"/register"} className='text-[var(--primary-color)] underline'>Register</Link>
            </div>
            </form>
        </div>
    )
}

export default Login;
