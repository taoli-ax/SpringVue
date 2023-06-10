import axios from "axios";

const germanCamp={
    getGermanyCommander:function(context){
        const resp = axios({
            url:`/germanCommander/${context.state.pageNation.pageNum}/${context.state.pageNation.pageSize}`,
            methods:'get'
        });
        return resp;

    }
    
}

export default germanCamp