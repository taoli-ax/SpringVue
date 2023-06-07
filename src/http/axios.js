import axios from "axios";
const instance = axios.create({
    baseURL:"http://localhost:3030",
    timeout:5000
})

instance.interceptors.request.use((config) => {
        const token= localStorage.token;
        config.headers.Authorization="Bearer" + token;
        return token;
},(err)=>{
    return err;
})

instance.interceptors.response.use((res) => {
    return err;
},(err)=>{
    if(err && err.response){
        switch(err.response.status){
            case 400: 
                err.message='请求错误(400)';
                break;
            case 401:
                err.message='身份认证失败(401)';
                break;
            case 403:
                err.message='请求方式不支持，拒绝访问(403)'
            case 404:
                err.message='客户端请求错误(404)';
                break;
            case 500:
                err.message='服务器内部错误';
                break;
            default:
                err.message=`连接出错(${err.response.status})`;
        }
        return{
            data:{
                status:0,
                type: err.response.status,
                message: err.message
            }
        }
    }else{
        err.message='服务器连接失败';
        return {
            data:{
                status:0,
                message:err.message
            }
        }
    }
})

export default instance;