import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"

// register API
export const registerAPI = async (users) => {
    return await commonAPI("POST", `${BASE_URL}/users/register`, users, "")
}

// login
export const loginAPI = async (users) => {
    return await commonAPI("POST", `${BASE_URL}/users/login`, users, "")
}

//getallhospitals

export const getallhospitalsAPI = async (reqHeader) => {
    return await commonAPI("GET", `${BASE_URL}/users/hospital`, "", reqHeader)
}

//insertdonateStatus

export const insertdonatestatusAPI = async (reqbody, reqHeader) => {
    return await commonAPI("POST", `${BASE_URL}/donate/donatestatus`, reqbody, reqHeader)
}

//getpersondonatestatus

export const getpersondonatestatusAPI = async (reqHeader) => {
    return await commonAPI("GET", `${BASE_URL}/donate/getpersondonatestatus`, "", reqHeader)
}

//requestblood

export const requestbloodAPI = async (reqbody, reqHeader) => {
    console.log(reqbody, reqHeader);
    return await commonAPI("POST", `${BASE_URL}/request/bloodrequest`, reqbody, reqHeader)
}

//actions

export const actionAPI = async (reqHeader) => {
    console.log(reqHeader);
    return await commonAPI("GET", `${BASE_URL}/actions/actionstatus`, "", reqHeader)

}


