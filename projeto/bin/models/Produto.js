module.exports = (connection, DataTypes) => {

    const model = connection.define('Produto', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Fornecedores_id: {
            type: DataTypes.INTEGER
        },
        nome: {
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
    // model.associate = models => {
    //     model.belongsTo(models.Categoria, {
    //         foreignKey: 'categoria_id',
    //         as: 'categoria'
    //     })

    //     model.belongsToMany(models.Usuario, {
    //         through: models.ProdutoFavoritoUsuario,
    //         foreignKey: 'produto_id',
    //         as: 'favoritador',
    //     })
    //     model.sync({ alter: true })
    // }

    return model
}
