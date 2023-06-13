const {SpecialPosition}=require('../model/models')
const ApiError=require('../error/ApiError');
const uuid=require('uuid');
const path=require('path');


class SpecialPositionController{
    /* Получение всех специализаций */
    async getAllSpecial(req,res){
        const specials=await SpecialPosition.findAll();
        return res.json(specials);
        
    }
    /* получение специализации для редактирования */
    async getOneSpecial(req,res,next){
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
    async setNewSpecial(req,res,next){
        try {
            const {name}=req.body;
        const special=await SpecialPosition.create({name,positionId})
        return res.json(special);
        } catch (error) {
            next(ApiError.badRequest(error));
            
        }
        
        
    }
    async modifySpecial(req,res){
        
    }
    async deleteSpecial(req,res){
        
    }
}

module.exports=new SpecialPositionController();