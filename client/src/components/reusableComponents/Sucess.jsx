import { MdOutlineDone as DoneIcon } from "react-icons/md";


const Sucess = () => {
  return (
    <div className=" bg-green-500 text-white rounded-[50%] text-[30px] p-3 mx-auto w-[50px] h-[50px] my-[17%]">
        <DoneIcon/>
        <p className=" text-[18px] ">Process Done</p>
    </div>
  )
}

export default Sucess;