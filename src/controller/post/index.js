import postModel from "../../model/post/index.js";
import userModel from "../../model/user/index.js";

const 

postController = {
    create: async (req, res)=>{
        try {
            const payload = req.body;
            const userId = req.user.id
            console.log("Payload", payload);
            const createPost = await postModel.create({
                title: payload.title,
                description: payload.description,
                UserId: userId
            })

            res.json({
                message: "Post Created",
                createPost
            })
        } catch (error) {
            console.log(error);
        }
    },
    get: async (req, res)=>{
        try {
            const getPost = await postModel.findAll({
                include: [userModel]
            })

            res.json({
                message: "Post Retrieved",
                getPost
            })
        } catch (error) {
            console.log(error);
        }
    },
    update: async (req, res)=>{
        try {
            const payload = req.body;
            const params = req.params;
            const updatePost = await postModel.findByPk(params.postId)
            updatePost.title = payload.title;
            updatePost.description = payload.description;
            await updatePost.save();

            res.json({
                message: "Post Updated",
                updatePost
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export default postController;