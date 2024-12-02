import { commonApi } from "./commonApi";
import { serverUrl } from "./serverUrl";


// api to add videos

export const addProductApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/videos`,reqBody)
}