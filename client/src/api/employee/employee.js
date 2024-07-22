import { convertToBase64 } from "../../utils";
import axiosInstance from "../axios/axios";

export const getAllEmployee = async () => {
  try {
    const response = await axiosInstance.get("api/employee/employee-list");

    Object.values(response.data).forEach((data) => {
      console.log("response received:", data);
    });

    if (!response || !response.data) {
      return "No employees found.";
    }

    return response;
  } catch (error) {
    console.error("Error:", error.message);
    return "Error fetching employees.";
  }
};

export const updateEmployee = async (email, updatedData) => {
  try {
    const response = await axiosInstance.patch(
      `/api/employee/${email}`,
      updatedData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response && response.data) {
      return response.data; // Return the response data or success message as needed
    } else {
      throw new Error("Update failed. No response data.");
    }
  } catch (error) {
    console.error("Error:", error.message);
    throw new Error("Error updating employee: " + error.message);
  }
};

export const searchEmployee = async (query) => {
  try {
    const response = await axiosInstance.get(
      `/api/employee/search?query=${query}`
    );

    if (!response) {
      return "No response.";
    }

    return response;
  } catch (error) {
    console.error("Error:", error.message);
    return "Error fetching employees.";
  }
};

export const createEmployee = async (data) => {
  try {
    const response = await axiosInstance.post(
      "/api/employee/create-employee",
      data
    );
    if (!response) {
      return "Employee creation error";
    }

    return response;
  } catch (error) {
    console.error("Error:", error.message);
    return "Error fetching employees.";
  }
};
