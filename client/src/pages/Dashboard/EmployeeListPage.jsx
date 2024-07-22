import { useState, useEffect } from "react";
import { getAllEmployee, searchEmployee } from "../../api/employee/employee";
import { TableHead, TableRows } from "../../components/reusableComponents/index";
import { BiEdit as EditIcon } from "react-icons/bi";
import { Link } from "react-router-dom";

const EmployeeListPage = () => {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState(""); // Initialize as an empty string
  
  // fetch All employee data
  useEffect(() => {
    const fetchAllEmployees = async () => {
      try {
        const response = await getAllEmployee();
        setEmployees(response.data.employees || response.data); // Adjust based on your API response
        console.error("Image :", response.data.employees.image);
      } catch (err) {
        console.error("Failed to fetch employees:", err);
      }
    };
    fetchAllEmployees();
  }, []);

  useEffect(() => {
    const fetchEmployee = async () => {

      // Avoid fetching when search is empty
      if (search.trim() === "") return;

      try {
        // searching
        const response = await searchEmployee(search);
        setEmployees(response.data.employees || response.data);
      } catch (err) {
        console.error("Failed to fetch employees:", err);
      }
    };
    fetchEmployee();
  }, [search]);

  // handle searching
  const handleSearch = async (e) => {
    // Set search value directly
    setSearch(e.target.value);
  };

  return (
    <div>
      <div>
        {/** Create Employee btn */}
        <Link
          to={"/dashboard/create-employee"}
          className="w-[180px] text-center px-[15px] py-[8px] text-white font-semibold bg-[var(--primary-color)] absolute z-10 right-[4%] cursor-pointer top-[15%]"
        >
          <p>Create Employee</p>
        </Link>

        {/** Search option */}
        <div className="flex flex-row items-center gap-1 w-[400px] text-center px-[15px] py-[8px] absolute z-10 right-[23%] cursor-pointer top-[14%] bg-gray-200">
          <label className="font-semibold">Search</label>
          :
          <input
            type="text"
            className="outline-none border w-[90%] bg-white px-[10px] py-[5px]"
            placeholder="Enter search keywords"
            value={search} // Ensure input value is controlled
            onChange={handleSearch} // Corrected the onChange handler
          />
        </div>
      </div>

      <h1 className="font-semibold my-[2%] text-[20px] text-start px-[2%]">
        Employee List
      </h1>

      <div>
        <table className="min-w-full divide-y divide-gray-200 text-[14px] my-[2%]">
          <thead className="bg-gray-50">
            <tr>
              <TableHead name="ID" />
              <TableHead name="Image" />
              <TableHead name="Name" />
              <TableHead name="Email" />
              <TableHead name="Mobile" />
              <TableHead name="Designation" />
              <TableHead name="Gender" />
              <TableHead name="Course" />
              <TableHead name="Create date" />
              <TableHead name="Action" />
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {Array.isArray(employees) &&
              employees.map((employee) => (
                <tr key={employee.id}>
                  <TableRows data={employee.id} />
                  <td>
                    {employee.image && (
                      <img
                        src={`data:image/jpeg;base64,${employee.image}`}
                        alt="Employee"
                        width="100"
                        height="100"
                      />
                    )}
                  </td>
                  <TableRows data={employee.name} />
                  <TableRows data={employee.email} />
                  <TableRows data={employee.mobile} />
                  <TableRows data={employee.designation} />
                  <TableRows data={employee.gender} />
                  <TableRows data={employee.course} />
                  <TableRows data={employee.createdAt} />

                  <td className="px-4 py-4 whitespace-nowrap flex flex-row items-center gap-1 justify-center">
                    <Link to={`/dashboard/edit-employee/${employee.email}`} className="hover:underline cursor-pointer">Edit</Link>-
                    <p className="hover:underline cursor-pointer">Delete</p>
                  </td>

                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeListPage;
