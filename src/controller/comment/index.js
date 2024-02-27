import commentModel from "../../model/comment/index.js";
import postModel from "../../model/post/index.js";
import userModel from "../../model/user/index.js";

const commentController = {
    create: async (req, res)=> {
        const payload = req.body;
        const createComment = await commentModel.create({
            comment: payload.comment,
            UserId: payload.UserId,
            PostId: payload.PostId
        })

        res.json({
            message: "commented",
            createComment
        })
    },
    get: async (req, res)=> {
        const getComment = await commentModel.findAll({
            indclude: [postModel, userModel]
        })

        res.json({
            message: "comment retrieved",
            getComment
        })
    },
    update: async (req, res)=> {
        const payload = req.body;
        const params = req.params;
        const updateComment = await commentModel.findByPk(params.commentId)
        updateComment.comment = payload.comment;
        await updateComment.save();

        res.json({
            message: "commente updated",
            updateComment
        })
    },
}

export default commentController