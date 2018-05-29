module.exports = function(sequelize, DataTypes) {
    var user = sequelize("User", {
        email: DataTypes.String,
        password: DataTypes.String
    },{
        timestamps: false
    });
    return User;
}