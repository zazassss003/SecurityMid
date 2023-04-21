module.exports = (sequelize, DataTypes) => {

    const Posts = sequelize.define("Posts",{
        username:{
            type: DataTypes.STRING,
            allowNull: false
        },
        text:{
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Posts
};