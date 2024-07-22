export const loginFormValidation = (loginData) =>{
    const errors = [];
    if(!loginData.username) error.push("Name is required.");
    if(!loginData.password) error.push("Password is required.");
    return errors;
}

export const registerFormValidation = (registerData) =>{
    let errors = [];
    if(!registerData.name) errors.push("Name");
    if(!registerData.email) errors.push("Email");
    if(!registerData.password) errors.push("Password");
    if(!registerData.mobile) errors.push("Mobile");
    return errors
}