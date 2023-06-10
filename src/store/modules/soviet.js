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
        async getSovietCommanders(context){
            console.log("状态机");
            const {data}= await apis.sovietCamp.getSovietCommander(context);
            if(data.success){  
                context.commit('responseData',data.data)
            }
           
        }
    }
}