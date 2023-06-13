const Router=require('express');
const router=new Router();
const projectRoute=require('./projectRoute.js');
const roleRoute=require('./roleRoute.js');
const userRoute=require('./userRoute.js');
const positionRoute=require('./positionRoute.js');

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


/* должности */
router.use('/positions',positionRoute);
router.use('/positions/:id',positionRoute);
router.use('/setPosition',positionRoute);


module.exports=router;