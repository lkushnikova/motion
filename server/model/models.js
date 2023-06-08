const sequelize=require('../db');
const {DataTypes}=require('sequelize');

/* пользователи */
const User=sequelize.define('user',{
id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
lastName:{type:DataTypes.STRING,allowNull:false},
firstName:{type:DataTypes.STRING,allowNull:false},
middleName:{type:DataTypes.STRING,allowNull:false},
email:{type:DataTypes.STRING,unique:true,allowNull:false},
login:{type:DataTypes.STRING,unique:true,allowNull:false},
phone:{type:DataTypes.STRING,allowNull:false},
sex:{type:DataTypes.ENUM('мужской', 'женский'),defaultValue:'мужской'},
birthdate:{type:DataTypes.DATE,allowNull:false},
city:{type:DataTypes.STRING,allowNull:false},
education:{type:DataTypes.STRING,allowNull:false},
password:{type:DataTypes.STRING,allowNull:false},
photo:{type:DataTypes.STRING}

});
/* клиент */
const Client=sequelize.define('client',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING,allowNull:false},
    photo:{type:DataTypes.STRING},
    description:{type:DataTypes.TEXT,allowNull:false},
    website:{type:DataTypes.STRING,allowNull:false},
    });
/* роль */
const Role=sequelize.define('role',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING,allowNull:false,unique:true}   
    });
/* статус проекта */
    const ProjectStatus=sequelize.define('project_status',{
        id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
        name:{type:DataTypes.STRING,allowNull:false,unique:true},
        color:{type:DataTypes.STRING,allowNull:false,defaultValue:'желтый'}  
        });
/* руководитель проекта */
    const SuperVisor=sequelize.define('supervisor',{
        id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},       
        });
 /* исполнитель проекта */
    const Performer=sequelize.define('performer',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},       
    });
/* категория */
const Category=sequelize.define('category',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING,allowNull:false,unique:true},
    });
/* проекты */
const Project=sequelize.define('project',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING,allowNull:false},
    description:{type:DataTypes.TEXT,allowNull:false},
    image:{type:DataTypes.STRING,allowNull:false},
    address:{type:DataTypes.STRING,allowNull:false},
    show_link:{type:DataTypes.STRING},
    public_link:{type:DataTypes.STRING},
    password_link:{type:DataTypes.STRING},
    start_date:{type:DataTypes.DATE,allowNull:false},
    end_date:{type:DataTypes.DATE,allowNull:false},
    hashtag:{type:DataTypes.STRING},
    hide_from_client:{type:DataTypes.BOOLEAN,allowNull:false,defaultValue:false},
    hide_from_performers:{type:DataTypes.BOOLEAN,allowNull:false,defaultValue:false},
    hide_from_supervisors:{type:DataTypes.BOOLEAN,allowNull:false,defaultValue:false},
    performers_link:{type:DataTypes.STRING},
    clients_link:{type:DataTypes.STRING},
    creator_id:{type:DataTypes.INTEGER,allowNull:false}
    });

/* задачи */
const Task=sequelize.define('task',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    text:{type:DataTypes.TEXT,allowNull:false},
    parent_id:{type:DataTypes.INTEGER,defaultValue:null},
    agreement:{type:DataTypes.BOOLEAN,defaultValue:false}
    });

/* статус задачи */
const TaskStatus=sequelize.define('task_status',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.TEXT,allowNull:false},
    color:{type:DataTypes.STRING,allowNull:false,defaultValue:'желтый'}

    });
/* исполнитель задачи */
const TaskPerformer=sequelize.define('task_performer',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.TEXT,allowNull:false},
    color:{type:DataTypes.STRING,allowNull:false,defaultValue:'желтый'}

    });
/* индустрия */
const Industry=sequelize.define('industry',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.TEXT,allowNull:false},
    });

/* ниши */
const Niche=sequelize.define('niche',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.TEXT,allowNull:false},
    });
/* должность */
const Position=sequelize.define('position',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.TEXT,allowNull:false},
    });

/* должность исполнителя */
const UserPosition=sequelize.define('user_position',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.TEXT,allowNull:false},
    start_date:{type:DataTypes.DATE,allowNull:false},
    end_date:{type:DataTypes.DATE,defaultValue:null}
    });

/* специализация должностей */
const SpecialPosition=sequelize.define('special_position',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.TEXT,allowNull:false},
    });

/* клиенты-ниши */
const ClientNiche=sequelize.define('client_niche',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    });

/* пользователь-специализация должности */
const UserSpecialPosition=sequelize.define('user_special_position',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    });

Role.hasMany(User);
User.belongsTo(Role);

User.hasMany(SuperVisor);
SuperVisor.belongsTo(User);

Project.hasMany(SuperVisor);
SuperVisor.belongsTo(Project);

Project.hasMany(Performer);
Performer.belongsTo(Project);

User.hasMany(Performer);
Performer.belongsTo(User);

Client.hasMany(Project);
Project.belongsTo(Client);

User.hasMany(Project);
Project.belongsTo(User);

ProjectStatus.hasMany(Project);
Project.belongsTo(ProjectStatus);

Project.hasMany(Task);
Task.belongsTo(Project);

TaskStatus.hasMany(Task);
Task.belongsTo(TaskStatus);

Industry.hasMany(Niche);
Niche.belongsTo(Industry);

User.hasMany(UserPosition);
UserPosition.belongsTo(User);

Position.hasMany(UserPosition);
UserPosition.belongsTo(Position);

Client.belongsToMany(Niche,{through:ClientNiche});
Niche.belongsToMany(Client,{through:ClientNiche});

User.belongsToMany(SpecialPosition,{through:UserSpecialPosition});
SpecialPosition.belongsToMany(User,{through:UserSpecialPosition});

Position.hasMany(SpecialPosition);
SpecialPosition.belongsTo(Position);


module.exports={
    User,
    Role,
    SuperVisor,
    Client,
    ProjectStatus,
    Category,
    Performer,
    Project,
    Task,
    TaskStatus,
    TaskPerformer,
    Industry,
    Niche,
    Position,
    UserPosition,
    ClientNiche,
    SpecialPosition,
    UserSpecialPosition
}