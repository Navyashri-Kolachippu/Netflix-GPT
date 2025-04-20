export const checkValidData=(fullname,email,password)=>{
    const isFullNameValid=/^[A-Z][a-z]+(\s[A-Z][a-z]+)*$/.test(fullname);
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
    if(!isFullNameValid) return "Full Name is not valid"
    if(!isEmailValid) return "Email is not valid"
    if(!isPasswordValid) return "Password is not valid"
    return null;
}