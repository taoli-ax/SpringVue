import apis from "../../http/apis/apis";

export default{
    namespaced:true,
    state:{
        commanders_list:[]
    },
    mutations:{
        responseData(state,respData){
            state.commanders_list=respData;
        }
    },
    actions:{
        async getGermanCommanders(context){
            console.log("状态机");
            const {data}= await apis.germanCamp.getGermanyCommander(context);
            if(data.success){  
                context.commit('responseData',data.data)
            }
           
        }
    }
}