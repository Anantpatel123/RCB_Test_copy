// module.exports = function (sequelize, DataTypes) {
//     var todo = sequelize.define("todo", {
//         text: DataTypes.STRING,
//         complete: DataTypes.BOOLEAN
//     }, {
//         timestamps: false
//     });
//     return todo;    
// }

module.exports = function(sequelize, DataTypes){
    var Todo = sequelize.define("todo",{
        text: {
          type:  DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1, 140]
          }
        },
        complete:{
           type: DataTypes.BOOLEAN,
           defaultValue: false
        }
        }, {
        timestamps: false
        
        });
        return Todo;
    }