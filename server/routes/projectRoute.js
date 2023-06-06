const Router=require('express');
const router=new Router();

router.use('/project');
router.use('/performer');
router.use('/user');
router.use('/supervisor');
router.use('/creator');
router.use('/projectStatus');





module.exports=router;