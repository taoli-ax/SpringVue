import apis from "../../http/apis/apis";
export default{
    namespaced:true,
    state:{
        commander:{
            name:'',
            description:'',
            image:''
        }
    },
    mutations:{
        responseData(state,respData){
            state.commanders_list=respData;
        }
    },
    actions:{
        async updateCommander(context){
            console.log("状态机");
            const {data}= await apis.updateCommander.update(context);
            if(data.success){  
                context.commit('responseData',data.data)
            }
           
        }
    }
}