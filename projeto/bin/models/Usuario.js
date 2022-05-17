module.exports = (connection, DataTypes) => {

    const model = connection.define('Usuario', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nome: {
            type: DataTypes.STRING(50)
        },
        email: {
            type: DataTypes.STRING(200)
        },
        password: {
            type: DataTypes.DECIMAL(20)
        }
    }, {
        timestamps: false,
        tableName: 'usuarios'
    })
    model.sync({ alter: true })
    return model
}
