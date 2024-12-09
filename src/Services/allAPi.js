import { commonApi } from "./commonApi"
import {serverUrl} from './serverUrl'

// add product api
export const addProductApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/Products`,reqBody)
}

// api to get all products

export const getProductApi = async()=>{
    return await commonApi('GET',`${serverUrl}/Products`,"")
}

// api to remove a video

export const removeProductApi = async(id)=>{
    return await commonApi('DELETE', `${serverUrl}/Products/${id}`, {} )
}