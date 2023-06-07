import axios from 'axios';
export default {
    namespaced:true,
      // 相当于data
    state: {
      pageNation:{
        pageNum:1,
        pageSize:3,
        pages:0,
        hasPrevious:false,
        hasNextPage:true
    
      },
      campList:[],
      },
    // 相当于 methods,修改state中的变量
      mutations: {
        // 默认第一个参数state对象
        responseData(state,resp){
          state.campList=resp.list;
          state.pageNation.pages=resp.pages
          state.pageNation.pages=resp.pageSize
          state.pageNation.hasPrevious=resp.hasPreviousPage
          state.pageNation.hasPrevious=resp.hasNextPage
        },
        changePageSize(state,size){
          state.pageNation.pageSize=size
        },
        changeCurrentPage(state,page){
          if(page==0){
            return
          };
          if(page==state.pageNation.pages+1){
           return
          }
          state.pageNation.pageNum=page;
         
          console.log('page changed:',page,state.pageNation.pageNum)
        }
    
      },
      actions: {
    
        // context 代表 仓库本身store
        async getCoh2(context){
          const {data}=await axios({
              url:`/CoH2/${context.state.pageNation.pageNum}/${context.state.pageNation.pageSize}/`,
              method:'get',
          });
          if(data.success){
            // 响应的数据竟然必须要通过mutations的方法才能修改state中的属性，这样未免太麻烦了吧
            context.commit('responseData',data.data)
          }
      },
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