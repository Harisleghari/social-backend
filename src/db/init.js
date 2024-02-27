import commentModel from "../model/comment/index.js";
import postModel from "../model/post/index.js";
import userModel from "../model/user/index.js";

const dbInit = async ()=>{
    try {
        await userModel.sync({
            alter: true,
            force: false
        })
        await postModel.sync({
            alter: true,
            force: false
        })
        await commentModel.sync({
            alter: true,
            force: false
        })
    }
    catch(e){
        console.log(e)
    }
}

export default dbInit;