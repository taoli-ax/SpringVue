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
        async getAmericanCommanders(context){
            console.log("状态机");
            const {data}= await apis.americanCamp.getAmericanCommander(context);
            if(data.success){  
                context.commit('responseData',data.data)
            }
           
        }
    }
}