module.exports = (connection, DataTypes) => {

    const model = connection.define('Produto', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING(50)
        },
        marca: {
            type: DataTypes.STRING(50)
        },
        descricao: {
            type: DataTypes.STRING(100)
        },
        valor: {
            type: DataTypes.DECIMAL(10, 2)
        }
    }, {
        timestamps: false,
        tableName: 'produtos'
    })
    model.sync({ alter: true })
    return model
}
