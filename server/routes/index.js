const Router=require('express');
const router=new Router();
const projectRoute=require('./projectRoute.js');
const roleRoute=require('./roleRoute.js');
const userRoute=require('./userRoute.js');
/* проекты */
router.use('/projects',projectRoute);






/* роли */
router.use('/roles',roleRoute);
router.use('/roles/:id',roleRoute);
router.use('/setRole',roleRoute);


/* пользователи */
router.use('/users',userRoute);
router.use('/users/:id',userRoute);
router.use('/setUser',userRoute);


module.exports=router;