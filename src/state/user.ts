import {UserType} from "../models/user";


let loginUser: UserType;

const setLoginUser =(user:UserType) =>{
    loginUser = user;

}

const getLoginUser =() =>{
    return loginUser;
}

export {
    getLoginUser,
    setLoginUser
}