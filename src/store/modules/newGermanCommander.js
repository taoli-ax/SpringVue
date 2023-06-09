import axios from 'axios';
export default {
    actions: {
        async newGermanCommander(context,commander){
            console.log("send:",commander)
            const {data}=await axios({
                url:'',
                method:'post',
                data:{
                    name:commander.name,
                    description:commander.description,
                    image:commander.image
                }
            });
            if(data.success){
                
            }
        }
      },

}