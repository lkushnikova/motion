const Router=require('express');
const router=new Router();
const positionController=require('../controllers/positionController.js');

router.get('/',positionController.getAllPositions);
router.post('/setPosition',positionController.setNewPosition);
router.get('/:id',positionController.getOnePosition);
router.get('/modifyPosition/:id',positionController.modifyPosition);
router.get('/deletePosition/:id',positionController.deletePosition);




module.exports=router;