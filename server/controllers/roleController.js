const {Role}=require('../model/models')
const ApiError=require('../error/ApiError');


class RoleController{
    async getAllRoles(req,res){
        const roles=await Role.findAll();
        return res.json(roles);
        
    }
    async getOneRole(req,res,next){
        const {id}=req.query;
        if(!id){
           return next(ApiError.badRequest('Не задан id роли'));
        }
        res.json(id);
        
    }
    async setNewRole(req,res){
        const {name}=req.body;
        const role=await Role.create({name});
        return res.json({role})
        
    }
    async modifyRole(req,res){
        
    }
    async deleteRole(req,res){
        
    }
}

module.exports=new RoleController();