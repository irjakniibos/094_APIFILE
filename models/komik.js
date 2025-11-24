  module.exports = (sequelize, DataTypes) => {
    const Komik = sequelize.define("Komik", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
            imageType: DataTypes.STRING,
            imageName: DataTypes.STRING,
            imageData: DataTypes.BLOB('long'),
        },
        {
            tableName: 'komik',
        }
    );

    return Komik;
};