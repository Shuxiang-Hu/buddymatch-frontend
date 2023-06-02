import bm_axios from "../plugin/buddymatch-axios";
import { showFailToast } from "vant";
import {getLoginUser, setLoginUser} from "../state/user";

export const getCurrentUser = async () => {
    // const curUser = getLoginUser();
    // if(curUser){
    //     return curUser;
    // }


    const res = await bm_axios.get('/user/current');
    console.log(res);
    if (res.code === 0) {
        // setLoginUser(res.data);
        return res.data;
    } else {
        showFailToast("获取用户信息失败");
        return null;
    }
};
