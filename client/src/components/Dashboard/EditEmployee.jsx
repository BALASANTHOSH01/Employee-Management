import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { InputField, Button } from "../reusableComponents";
import Radio from "../reusableComponents/Radio";
import { getAllEmployee, updateEmployee } from "../../api/employee/employee";

const EditEmployee = () => {
  const { email } = useParams();
  const navigate = useNavigate();
  const [employeeData, setEmployeeData] = useState({
    name: "",
    email: "",
    mobile: "",
    designation: "",
    gender: "",
    course: "",
    image: null, // Update to store file object
  });

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await getAllEmployee();
        const employee = response.data.employees.find(
          (emp) => emp.email === email
        );

        if (employee) {
          setEmployeeData(employee);
        } else {
          console.log("Employee not found");
        }
      } catch (err) {
        console.error("Failed to fetch employee data:", err);
      }
    };
    fetchEmployeeData();
  }, [email]);

  const handleEmployeeUpdate = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64String = reader.result.replace(/^data:.+;base64,/, '');
        setEmployeeData((prev) => ({
          ...prev,
          image: base64String,
        }));
      };

      reader.readAsDataURL(file); // Convert image to base64
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    Object.values(employeeData).map((data)=>{
      console.log("data:"+data);
    })

    const newErrors = [];
    Object.keys(employeeData).forEach((key) => {
      if (!employeeData[key] && key !== "image") {
        newErrors.push(`${key} is required.`);
      }
    });

    if (newErrors.length > 0) {
      alert(newErrors.join("\n"));
      return;
    }

    try {
      const response = await updateEmployee(email,employeeData);
      if (response.status === 200) {
        navigate("/dashboard/done");
      }
    } catch (err) {
      console.error("Failed to update employee:", err);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleUpdate}
        className="w-[40%] px-[2%] py-[2%] mx-auto mt-[3%] bg-gray-100 rounded-[10px] md:w-[95%]"
      >
        <p className="text-xl font-semibold uppercase text-center mb-[5%]">
          Edit Employee
        </p>
        <InputField
          name="name"
          handleChange={handleEmployeeUpdate}
          type="text"
          value={employeeData.name}
        />
        <InputField
          name="email"
          handleChange={handleEmployeeUpdate}
          type="email"
          value={employeeData.email}
        />
        <InputField
          name="mobile"
          handleChange={handleEmployeeUpdate}
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
            onChange={handleEmployeeUpdate}
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
              handleChange={handleEmployeeUpdate}
              value={employeeData.gender}
            />
            <Radio
              name="Female"
              group="gender"
              handleChange={handleEmployeeUpdate}
              value={employeeData.gender }
            />
            <Radio
              name="Trans"
              group="gender"
              handleChange={handleEmployeeUpdate}
              value={employeeData.gender }
            />
            <Radio
              name="Others"
              group="gender"
              handleChange={handleEmployeeUpdate}
              value={employeeData.gender }
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
            onChange={handleEmployeeUpdate}
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

        <Button text="Update" onClickFunction={handleUpdate} />
      </form>
    </div>
  );
};

export default EditEmployee;
