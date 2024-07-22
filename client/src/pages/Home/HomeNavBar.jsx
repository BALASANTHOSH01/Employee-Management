import { RiMenuLine as MenuIcon } from "react-icons/ri";
import { Link } from "react-router-dom";


const HomeNavBar = () => {
  return (
    <div className=" flex flex-row items-center justify-between py-[1%]">
      <div className=" flex flex-row items-center justify-between w-[60%] px-[2%] md:px-[3%] ">
        <div className=" cursor-pointer">
          <p>Logo</p>
        </div>
        <div className="md:hidden cursor-pointer hover:text-[var(--primary-color)]">
          <p>How it works</p>
        </div>
        <div className="md:hidden cursor-pointer hover:text-[var(--primary-color)]">
          <p>Support</p>
        </div>
        <div className="md:hidden cursor-pointer hover:text-[var(--primary-color)]">
          <p>About Us</p>
        </div>
        <Link to={"/login"} className="md:hidden cursor-pointer hover:text-[var(--primary-color)]">
          <p>Login</p>
        </Link>
      </div>

      <div className="md:hidden flex flex-row items-end  w-[25%] ">
        <Link to={"/register"} className="px-[5px] py-[5px] text-white cursor-pointer hover:shadow-xl w-[40%] text-center rounded-[10px] bg-[var(--primary-color)]">
          <p>Register</p>
        </Link>
      </div>

      <div className="hidden md:block cursor-pointer text-[20px] px-[4%]">
        <MenuIcon/>
      </div>
    </div>
  );
};

export default HomeNavBar;
