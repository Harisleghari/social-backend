import Joi from "joi"
const postValidator = {
    create: (req, res, next) => {
        const schema = Joi.object({
            title: Joi.string().max(90).required(),
            description: Joi.string().max(950),
            UserId: Joi.number()
        })
        
        const response =  schema.validate(req.body)
        if(response.error){
            return res.status(400).json({
                message: "Bad Request"
            })
        }
        next()
        
    }
}


export default postValidator