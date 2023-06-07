
import axios from 'axios';

const campApi={
    getCoH2:function(context){
        console.log(`${context.state.pageNation.pageNum}`+"   "+`${context.state.pageNation.pageSize}`);
        const resp=axios({
            url:`/CoH2/${context.state.pageNation.pageNum}/${context.state.pageNation.pageSize}/`,
            method:'get',
        });
        return resp;
    
    },
    addOne: function(context,coh2camp){
        console.log("send:",coh2camp)
        const {data}= axios({
            url:'/CoH2/new',
            method:'post',
            data:{
                camp:coh2camp.camp,
                commander_count:coh2camp.commander_count,
            }
        });
}
}
export default campApi;