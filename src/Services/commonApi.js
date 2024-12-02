import axios from "axios";

export const commonApi = async (httprequest,Url,reqBody)=>{

    const reqConfig ={
        method:httprequest,
        Url,
        data:reqBody,
        headers:{"Content-Type":"application/json"}
    }

    return await axios(reqConfig).then((result)=>{
        return result
    }).catch((err)=>{
        return err
    })
}