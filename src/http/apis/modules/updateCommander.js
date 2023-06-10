import axios from "axios"

const updateCommander={
    async update(context){
        console.log(context.state.commander)
        return await axios({
            url:'/updateCommander',
            method:'post',
            data:context.state.commander,
        })
    }
}

export default updateCommander