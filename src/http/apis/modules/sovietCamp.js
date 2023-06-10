import axios from "axios";

const SovietCamp={
    getSovietCommander:function(context){
        const resp = axios({
            url:'/sovietCommander',
            methods:'get'
        });
        return resp;

    }
    
}

export default SovietCamp