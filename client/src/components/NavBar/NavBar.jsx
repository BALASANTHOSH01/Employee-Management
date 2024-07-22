import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { getAllEmployee } from '../../api/employee/employee';


const NavItem = ({to,text,className,handleActiveNav,activeNav}) =>{
    return(
        <Link to={to} className={`cursor-pointer ${className}`} onClick={()=>handleActiveNav(text)}>
            {text}
            {activeNav === text && <hr className='h-[2px] bg-gray-500 w-[100%]'/>}
        </Link>
    )
};

const NavBar = () => {
    const [activeNav,setActiveNav] = useState('Home');
    const handleActiveNav=(navItem)=>{
        setActiveNav(navItem);
    };

    return (
        <div className=' flex flex-row items-center justify-between px-[7%] py-[15px] bg-gray-100 z-50'>
            <div className=' flex flex-row items-start w-[35%] justify-between'>
                
               <NavItem text="Logo" />
               <NavItem activeNav={activeNav} handleActiveNav={handleActiveNav} to={"/dashboard"} text="Home" />
               <NavItem activeNav={activeNav} handleActiveNav={handleActiveNav} to={"/dashboard/employees-list"} text="Employee List" />

            </div>
            <div className=' flex flex-row items-start w-[25%] justify-between'>

            <NavItem activeNav={activeNav} handleActiveNav={handleActiveNav} to={"/"} text="Santhosh" />
            <NavItem activeNav={activeNav} handleActiveNav={handleActiveNav} to={"/"} text="Logout" />
               
            </div>
        </div>
    )
}

export default NavBar;