import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"

// register API
export const registerAPI = async (users)=>{
    return await commonAPI("POST",`${BASE_URL}/users/register`,users,"")
}

// login
export const loginAPI = async (users)=>{
    return await commonAPI("POST",`${BASE_URL}/users/login`,users,"")
}