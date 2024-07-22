import React from 'react'
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>

        {/** Create Employee btn */}
        <Link to={"/dashboard/create-employee"} className=' w-[180px] text-center px-[15px] py-[8px] text-white font-semibold bg-[var(--primary-color)] absolute z-10 right-[4%] cursor-pointer top-[18%]'>
            <p>Create Employee</p>
        </Link>

        <div className='text-center my-[5%] text-[20px]'>
            <p>Welcome to our application🙌</p>
        </div>

    </div>
  )
}

export default Dashboard;