import axios from "axios";

export const login = (loginObj) => {
    let response= axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/login",loginObj)
    return response

    console.log("Login in process")
}

export const register = (registerObj) => {
     let response= axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",registerObj)
    //  let response= axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/SignUp",registerObj)
    return response

    console.log("Registration in process")
}
