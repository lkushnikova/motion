const {User}=require('../model/models')
const ApiError=require('../error/ApiError');
const uuid=require('uuid');
const path=require('path');


class UserController{
    /* Получение всех пользователей */
    async getAllUsers(req,res){
        const users=await User.findAll();
        return res.json(users);
        
    }
    /* получение одного пользователя для личных настроек профиля */
    async getOneUser(req,res,next){
        const {id}=req.query;
        if(!id){
           return next(ApiError.badRequest('Не задан id роли'));
        }
        res.json(id);
        
    }
    /* Регистрация пользователя в системе */
    async setNewUser(req,res,next){
        try {
            const {lastName,firstName,middleName,email,login,phone,sex,birthdate,city,education,password,photo,roleId}=req.body;
        //const {photo}=req.files;
        /* let fileName=uuid.v4()+'.jpg';
        photo.mv(path.resolve(__dirname,'..','static',fileName)); */
        const user=await User.create({lastName,firstName,middleName,email,login,phone,sex,city,education,password,photo,roleId,birthdate})
        return res.json(user);
        } catch (error) {
            next(ApiError.badRequest(error));
            
        }
        
        
    }
    async modifyUser(req,res){
        
    }
    async deleteUser(req,res){
        
    }
}

module.exports=new UserController();