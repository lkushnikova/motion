const Router=require('express');
const router=new Router();
const roleController=require('../controllers/roleController.js');

router.get('/',roleController.getAllRoles);
router.post('/setRole',roleController.setNewRole);
router.get('/:id',roleController.getOneRole);
router.get('/modifyRole/:id',roleController.modifyRole);
router.get('/deleteRole/:id',roleController.deleteRole);




module.exports=router;