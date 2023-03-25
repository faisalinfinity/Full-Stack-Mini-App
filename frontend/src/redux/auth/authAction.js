import axios from "axios"
import { Base_Url } from "../../../constants/BaseUrl"
export const loginAction=(payload)=>(dispatch)=>{
    axios.post(`${Base_Url}/login`,payload)
    .then((res)=>{
        console.log(res)
    })
    

}