import React from "react";
import './signup.css'
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
// import { login } from "../../services/userService";
import { register } from "../../services/userService";

const fnameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const lnameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const confirmpassRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;


function Signup(){

    const[userValue,setUserValue] = React.useState({firstName:"",lastName:"",email:"",password:"",service:"advance"})
    const [regobj,setRegObj] = React.useState({fnameBorder:false,fnameHelper:"",lnameBorder:false,lnameHelper:"",usernBorder:false,usernHelper:"",
                                               pwdBorder:false,pwdHelper:"",conpwdBorder:false,conpwdHelper:""})

    const takefname = (event) =>{
        setUserValue(prevState => ({ ...prevState,
            firstName:event.target.value
        }))
        console.log(event.target.value)
    }

    const takelname = (event) =>{
        setUserValue(prevState => ({ ...prevState,
            lastName:event.target.value
        }))
        console.log(event.target.value)
    }

    const takeusername = (event) =>{
        setUserValue(prevState => ({ ...prevState,
            email:event.target.value
        }))
        console.log(event.target.value)
    }

    const takepass = (event) =>{
        setUserValue(prevState => ({ ...prevState,
            password:event.target.value
        }))
        console.log(event.target.value)
    }

    const takeconfirm = (event) =>{
        setUserValue(prevState => ({ ...prevState,
            conpwd:event.target.value
        }))
        console.log(event.target.value)
    }


    const submit=()=>{
        // console.log(userInput)
        let fnameTest=fnameRegex.test(userValue.firstName)
        let lnameTest=lnameRegex.test(userValue.lastName)
        let usernameTest=emailRegex.test(userValue.email)
        let pwdTest=passwordRegex.test(userValue.password)
        let conpwdTest=passwordRegex.test(userValue.conpwd)
    
        if(fnameTest === false)
        {
            setRegObj(prevState => ({...prevState,
                  fnameBorder:true,
                  fnameHelper: "Enter the first name"
            }))
        }
        else if(fnameTest === true)
        {
            setRegObj(prevState => ({...prevState,
                fnameBorder:false,
                fnameHelper: ""
          }))
        }

        if(lnameTest === false)
        {
            setRegObj(prevState => ({...prevState,
                  lnameBorder:true,
                  lnameHelper: "Enter the last name"
            }))
        }
        else if(lnameTest === true)
        {
            setRegObj(prevState => ({...prevState,
                lnameBorder:false,
                lnameHelper: ""
          }))
        }

        if(usernameTest === false)
        {
            setRegObj(prevState => ({...prevState,
                usernBorder:true,
                  usernHelper: "Enter the username"
            }))
        }
        else if(usernameTest === true)
        {
            setRegObj(prevState => ({...prevState,
                usernBorder:false,
                usernHelper: ""
          }))
        }

        if(pwdTest === false)
        {
            setRegObj(prevState => ({...prevState,
                  pwdBorder:true,
                  pwdHelper: "Enter the correct password"
            }))
        }
        else if(pwdTest === true)
        {
            setRegObj(prevState => ({...prevState,
                pwdBorder:false,
                pwdHelper: ""
          }))
        }

        if(conpwdTest === false)
        {
            setRegObj(prevState => ({...prevState,
                  conpwdBorder:true,
                  conpwdHelper: "please check the password"
            }))
        }
        else if(conpwdTest === true)
        {
            setRegObj(prevState => ({...prevState,
                conpwdBorder:false,
                conpwdHelper: ""
          }))
        }


        if(fnameTest ===true && lnameTest === true && usernameTest === true && pwdTest === true )
      {
        register(userValue).then((response) => 
            {console.log(response);
        
     }).catch((error) => {console.log(error)})

        console.log("Register Successful")
      }

    
      }

    


    return(
        <div className="signup">
            <div className="block1">
                <div className="part1">
                    <div className="tab1">
                        <img src="../../Assets/logo.png" height="30px" width="90px"></img>
                    </div>
                    <div className="tab2">
                        <p>Create your Google Account</p>

                    </div>
                    <div className="tab3">
                         <TextField id="outlined-basic" label="First name" style={{width:'22ch'}} size="small" variant="outlined" onChange={takefname}
                         error={regobj.fnameBorder} helperText={regobj.fnameHelper}/>
                         <TextField id="outlined-basic" label="Last name" style={{width:'22ch'}} size="small" variant="outlined" onChange={takelname}
                         error={regobj.lnameBorder} helperText={regobj.lnameHelper}/>
                    </div>
                    <div className="tab4">
                      
                        <TextField id="outlined-basic" label="Username"  style={{width:'50ch'}}  size="small" variant="outlined" onChange={takeusername}
                        error={regobj.usernBorder} helperText={regobj.usernHelper}/>
                        <span id="sp">You can use letters,numbers and periods</span>
                        <span id="sp2">Use my current email address instead</span>
                        
                           
                    </div>
                    <div className="tab5">
                        <div className="user1">
                        <TextField id="outlined-basic" label="Password" style={{width:'22ch'}} size="small" variant="outlined" onChange={takepass}
                        error={regobj.pwdBorder} helperText={regobj.pwdHelper} />

                         <TextField id="outlined-basic" label="Confirm" style={{width:'22ch'}} size="small" variant="outlined" onChange={takeconfirm}
                          error={regobj.conpwdBorder} helperText={regobj.conpwdHelper}/>
                        </div>
                        <div className="user2">
                         <span id="sp">Use 8 or more characters with a mix of letters, numbers & symbols</span>
                         <FormControlLabel control={<Checkbox default />} label="show Password" id="check" />
 
                         </div>

                    </div>

                </div>
                <div className="part2">
                <div className="b1">
                        <a id="a">Sign in instead</a>
                    </div>
                    <div className="b3">
                        <Button variant="contained" onClick={submit}>Next</Button>
                    </div>

                </div>

            </div>
            <div className="block2">
                <img src="../../Assets/signup.png" height="250px" width="250px"></img>
                <p id="p">One account. All of Google</p><p id="p"> working for you.</p>
            </div>

        </div>
    )
}

export default Signup