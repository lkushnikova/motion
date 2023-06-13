const {Position}=require('../model/models')
const ApiError=require('../error/ApiError');
const uuid=require('uuid');
const path=require('path');


class PositionController{
    /* Получение всех пользователей */
    async getAllPositions(req,res){
        const positions=await Position.findAll();
        return res.json(positions);
        
    }
    /* получение должности для редактирования */
    async getOnePosition(req,res,next){
        try {
            const id=parseInt(req.params.id);
            const position = await Position.findOne({
                where: { id: id }
            })
            
            res.json(position);

        } catch (error) {
           
                return next(error);
        }
        
  
        
    }
    /* Добавление новой должности */
    async setNewPosition(req,res,next){
        try {
            const {name}=req.body;
        const position=await Position.create({name})
        return res.json(position);
        } catch (error) {
            next(ApiError.badRequest(error));
            
        }
        
        
    }
    async modifyPosition(req,res){
        
    }
    async deletePosition(req,res){
        
    }
}

module.exports=new PositionController();