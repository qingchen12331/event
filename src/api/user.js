import request from '@/utils/request'
export const userRegisterService=(registerData)=>{
    let params=new URLSearchParams();
    for(let key in registerData){
        params.append(key,registerData[key])
    }
    return request.post('/user/register',params)
}
export const userLoginService=(loginData)=>{
    let params=new URLSearchParams();
    for(let key in loginData){
        params.append(key,loginData[key])
    }
    return request.post('/user/login',params)
}
//获取个人信息
export const userInfoGetService = ()=>{
    return request.get('/user/userInfo');
}
//修改个人信息
export const userInfoUpdateService = (userInfo)=>{
    return request.put('/user/update',userInfo)
}
//修改头像
export const userAvatarUpdateService=(avatarUrl)=>{
    let url = new URLSearchParams();
    url.append('avatarUrl',avatarUrl)
    return request.patch('/user/updateAvatar',url)
}