import { useState } from "react";
import InputField from "../reusableComponents/InputField";
import Radio from "../reusableComponents/Radio";
import { emp_CreateFormValidation } from "../../utils/validation/employeeFormValidation";
import { useNavigate } from "react-router-dom";
import { Button } from "../reusableComponents";
import { createEmployee as createEmployeeAPI } from "../../api/employee/employee";
import { convertToBase64 } from "../../utils";

const CreateEmployee = () => {
  const navigate = useNavigate();
  const [employeeData, setEmployeeData] = useState({
    name: "",
    email: "",
    mobile: "",
    designation: "",
    gender: "",
    course: "",
    image: null, // Store base64 string
  });

  const handleEmployeeData = (e) => {
    const { name, value, type, checked } = e.target;
    setEmployeeData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    setEmployeeData((prev) => ({
      ...prev,
      image: e.target.files[0]
    }))
  };

  const handleCreateEmployee = async (e) => {
    e.preventDefault();
    const errors = emp_CreateFormValidation(employeeData);
    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      try {
        const binaryImage = convertToBase64(employeeData.image);
        const data = {
          name: employeeData.name,
          email: employeeData.email,
          mobile: employeeData.mobile,
          designation: employeeData.designation,
          gender: employeeData.gender,
          course: employeeData.course,
          image: binaryImage,
        }
        await createEmployeeAPI(data);
        navigate("/dashboard/done");
      } catch (error) {
        console.error("Failed to create employee:", error);
        alert("Failed to create employee. Please try again.");
      }
    }
  };

  return (
    <div>
      <form
        onSubmit={handleCreateEmployee}
        className="w-[40%] px-[2%] py-[2%] mx-auto mt-[3%] bg-gray-100 rounded-[10px] md:w-[95%]"
      >
        <p className="text-xl font-semibold uppercase text-center mb-[5%]">
          Create Employee
        </p>
        <InputField
          name="name"
          handleChange={handleEmployeeData}
          type="text"
          value={employeeData.name}
        />
        <InputField
          name="email"
          handleChange={handleEmployeeData}
          type="email"
          value={employeeData.email}
        />
        <InputField
          name="mobile"
          handleChange={handleEmployeeData}
          type="text"
          value={employeeData.mobile}
        />
        <div className="flex flex-row items-center gap-2">
          <label htmlFor="designation" className="w-[25%]">
            Designation
          </label>
          :
          <select
            name="designation"
            id="designation"
            value={employeeData.designation}
            onChange={handleEmployeeData}
            className="border outline-none px-[10px] py-[5px] w-[70%]"
          >
            <option value="" disabled>
              Select Your Designation
            </option>
            <option value="hr">HR</option>
            <option value="manager">Manager</option>
            <option value="sales">Sales</option>
          </select>
        </div>

        <div className="my-[2%] md:my-[3%] flex flex-row items-center gap-2">
          <label className="w-[25%]">Gender </label>:
          <div className="flex flex-row items-center gap-2 w-[70%]">
            <Radio
              name="Male"
              group="gender"
              handleChange={handleEmployeeData}
              value={employeeData.gender}
            />
            <Radio
              name="Female"
              group="gender"
              handleChange={handleEmployeeData}
              value={employeeData.gender}
            />
            <Radio
              name="Trans"
              group="gender"
              handleChange={handleEmployeeData}
              value={employeeData.gender}
            />
            <Radio
              name="Others"
              group="gender"
              handleChange={handleEmployeeData}
              value={employeeData.gender}
            />
          </div>
        </div>

        <div className="flex flex-row items-center gap-2 my-[2%] md:my-[3%]">
          <label htmlFor="course" className="w-[25%]">
            Course
          </label>
          :
          <select
            name="course"
            id="course"
            value={employeeData.course}
            onChange={handleEmployeeData}
            className="border outline-none px-[10px] py-[5px] w-[70%]"
          >
            <option value="" disabled>
              Select Your Course
            </option>
            <option value="mca">MCA</option>
            <option value="bca">BCA</option>
            <option value="bsc">BSC</option>
          </select>
        </div>

        <div>
          <div className="flex flex-row items-center gap-2">
            <label className="w-[25%]">Image</label>:
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              className="outline-none px-[10px] py-[5px] w-[70%]"
            />
            <p className="text-end text-[var(--primary-color)] text-[13px]">
              *jpg/png&#160;only
            </p>
          </div>
        </div>

        <Button text="Submit" onClickFunction={handleCreateEmployee} />
      </form>
    </div>
  );
};

export default CreateEmployee;
