
import apis from "../../http/apis/apis";

export default{
    namespaced:true,
    state:{
        commanders_list:[],
        pageNation:{
            pageNum:1,
            pageSize:3,
            pages:0,
            total:0,
            hasPrevious:false,
            hasNextPage:true
        
          },
    },
    mutations:{
        responseData(state,resp){
            
            state.commanders_list=resp.list;
            state.pageNation.pages=resp.pages;
            state.pageNation.total=resp.total;
            state.pageNation.pageSize=resp.pageSize;
            state.pageNation.hasPrevious=resp.hasPreviousPage;
            state.pageNation.hasPrevious=resp.hasNextPage;
        },
        changeCurrent(state,val){
            console.log(val)
            state.pageNation.pageNum=val
        }
    },
    actions:{
        async getGermanCommanders(context){
            console.log("状态机");
            const {data}= await apis.germanCamp.getGermanyCommander(context);
            if(data.success){  
                context.commit('responseData',data.data)
            }
           
        },
        async updateCommander(context){
                
        }
    }
}