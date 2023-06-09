import axios from "axios";

const germanCamp={
    getGermanyCommander:function(context){
        const resp = axios({
            url:'/germanCommander',
            methods:'get'
        });
        return resp;

    }
    
}

export default germanCamp