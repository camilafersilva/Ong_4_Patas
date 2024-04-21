const partners = (sequelize, DataTypes) => {
    const Parceiro = sequelize.define('animais', {
        nome: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        telefone: {
            type: DataTypes.STRING
        },
        mensagem: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'animais'
    });

    return Parceiro; 
}
module.exports=partners
