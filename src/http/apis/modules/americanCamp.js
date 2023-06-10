import axios from "axios";

const americanCamp={
    getAmericanCommander:function(context){
        const resp = axios({
            url:'/americanCommander',
            methods:'get'
        });
        return resp;

    }
    
}

export default americanCamp