const Router=require('express');
const router=new Router();
const userController=require('../controllers/userController.js');

router.get('/',userController.getAllUsers);
router.post('/setUser',userController.setNewUser);
router.get('/:id',userController.getOneUser);
router.get('/modifyUser/:id',userController.modifyUser);
router.get('/deleteUser/:id',userController.deleteUser);




module.exports=router;