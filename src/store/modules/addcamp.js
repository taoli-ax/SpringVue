import axios from 'axios';
export default {
    actions: {
        async addOne(context,coh2camp){
            console.log("send:",coh2camp)
            const {data}=await axios({
                url:'/CoH2/new',
                method:'post',
                data:{
                    camp:coh2camp.camp,
                    commander_count:coh2camp.commander_count,
                }
            });
            if(data.success){
                
            }
        }
      },

}