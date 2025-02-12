export const validatePassword = (field, setFieldError) => {
    if(!field) {
        setFieldError("Password should not be empty!");
        return false;
    }
    return true;  
}

export const validateConfirmPassword = (field, password, setFieldError) => {
    if(!field) {
        setFieldError("Confirm Password should not be empty!");
        return false;
    }
    if(field !== password) {
        setFieldError("Password does not match!");
        return false;
    }
    return true;  
}

export const validateEmail = (field, setFieldError) => {
    if(!field) {
        setFieldError("Email should not be empty!");
        return false;
    }
    return true;  
}

export const validatePhoneNumber = (field, setFieldError) => {
    if(!field) {
        setFieldError("Phone number should not be empty!");
        return false;
    }

    if(field.toString())
    return true;   
}

export const validateField = (field, setFieldError) => {
    if(!field) {
        setFieldError("Field should not be empty!");
        return false;
    }
    return true;
}