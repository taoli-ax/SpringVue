import axios from "axios";

const britishCamp={
    getBritishCommander:function(context){
        const resp = axios({
            url:'/britishCommander',
            methods:'get'
        });
        return resp;

    }
    
}

export default britishCamp