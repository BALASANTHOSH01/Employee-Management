export const emp_CreateFormValidation = (emp_Data) => {
    let errors = [];
    if(!emp_Data.name) errors.push("Name");
    if(!emp_Data.email) errors.push("Email");
    if(!emp_Data.mobile) errors.push("Mobile");
    if(!emp_Data.designation) errors.push("Designation");
    if(!emp_Data.gender) errors.push("Gender");
    if(!emp_Data.course) errors.push("Course");
    if(!emp_Data.image) errors.push("Image");
    return errors;
};

