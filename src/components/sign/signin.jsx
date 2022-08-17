import React from "react";
import './signin.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { login } from "../../services/userService";
import { useNavigate } from "react-router-dom";

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function Signin() {

    const navigate = useNavigate()
   const[userInput,setUserInput] = React.useState({email:"",password:""})
   const [regexobj,setRegExObj] = React.useState({emailBorder:false,emailHelper:"",pwdBorder:false,pwdHelper:""})

   const takeUserName=(event)=>{
        // setUserInput({
        //     email:event.target.value
        // })
        setUserInput(prevState => ({ ...prevState,
            email:event.target.value
        }))
        console.log(event.target.value)

   }

   const takepass = (event) =>{
     setUserInput(prevState => ({ ...prevState,
        password:event.target.value
     }))
     console.log(event.target.value)
 }

   const submit=()=>{
    // console.log(userInput)
    let emailTest=emailRegex.test(userInput.email)
    let pwdTest=passwordRegex.test(userInput.password)

    if(emailTest === false)
    {
        setRegExObj(prevState => ({...prevState,
              emailBorder:true,
              emailHelper: "Enter the correct email Id"
        }))
    }
    else if(emailTest === true)
    {
        setRegExObj(prevState => ({...prevState,
            emailBorder:false,
            emailHelper: ""
      }))
    }

    if(pwdTest === false)
         {
            setRegExObj(prevState => ({...prevState,
                   pwdBorder:true,
                   pwdHelper: "Enter the correct password"
             }))
         }
         else if(pwdTest === true)
         {
            setRegExObj(prevState => ({...prevState,
                 pwdBorder:false,
                 pwdHelper: ""
           }))
         }

    console.log(userInput)

     if(emailTest === true && pwdTest === true)
      {
        login(userInput).then((response) => 
            {console.log(response);
         localStorage.setItem("token",response.data.id)
         navigate('/DashBoard')
     }).catch((error) => {console.log(error)})

        console.log("Login Successful")
      }
  }

  const newAccount = () => {
    navigate('/Signup')
  }

    return(
    
        <div className="signin_page">
            <div className="main1">
                <div className="box1">
                     <div className="logo_img"> 
                         <img src="../../Assets/logo.png" height="30px" width="90px"></img>
                     </div> 
                </div>
                <div className="box2">
                        <p id="txt1">Sign in</p>
                </div>
                <div className="box3">
                    <p id="txt2">
                        Use your Google Account
                    </p>

                </div>
                <div className="box4">
                       <TextField id="outlined-basic" label="Email or Phone"  style={{width:'50ch'}} size="small" variant="outlined" onChange={takeUserName} 
                        error={regexobj.emailBorder} helperText={regexobj.emailHelper} />
                        <span id="sp2">Forget email?</span>
                </div>
                {/* <div className="box5">
                    <a>Forget email?</a>
                </div> */}
                

            </div>
            <div className="main2">
                <div className="box8">
                <TextField id="outlined-basic" label="Password" style={{width:'50ch'}} size="small" variant="outlined" onChange={takepass}
                        error={regexobj.pwdBorder} helperText={regexobj.pwdHelper}  />
                <span id="sp2">Forget Password?</span>

                </div>
                <div className="box6">
                    <p>Not your computer? Use Guest mode to sign in privately.</p>
                    <a id="a">Learn more</a>

                </div>
                <div className="box7">
                    <div className="b1">
                        {/* <a id="a">Create account</a> */}
                        <Button variant="text" id="a" onClick={newAccount}>Create Account</Button>
                    </div>
                    <div className="b2">
                        <Button variant="contained" onClick={submit}>Next</Button>
                    </div>
                    

                </div>

            </div>


        </div>
        
    )
    
}

export default Signin