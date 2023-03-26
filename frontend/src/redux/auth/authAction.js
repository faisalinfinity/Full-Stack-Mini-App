import axios from "axios"
import { Base_Url
 } from "../../constants/BaseUrl" 
import { LOGIN, LOGOUT } from "./authTypes"
export const loginAction=(payload)=>(dispatch)=>{
   return axios.post(`${Base_Url}/login`,payload)
    .then((res)=>{
        console.log(res.data.user)
       dispatch({type:LOGIN,payload:res.data.user})
       localStorage.setItem("notes/login",JSON.stringify({...res.data.user,isLoggedIn:true}))
    })
    

}

export const signupAction=(navigate,payload)=>()=>{
    axios.post(`${Base_Url}/register`,payload)
    .then((res)=>{
        console.log(res)
       alert("Sign Up Succesfull")
       navigate("/login")
    }).catch((err)=>{
        console.log(err)
    })
}

export const logoutAction=()=>{
    localStorage.setItem("notes/login",null)
    return{
        type:LOGOUT,
    }
}