const Router=require('express');
const router=new Router();
const specialPositionController=require('../controllers/specialPositionController.js');

router.get('/',specialPositionController.getAllSpecials);
router.post('/setSpecial',specialPositionController.setNewSpecial);
router.get('/:id',specialPositionController.getOneSpecial);
router.get('/modifySpecial/:id',specialPositionController.modifySpecial);
router.get('/deleteSpecial/:id',specialPositionController.deleteSpecial);




module.exports=router;