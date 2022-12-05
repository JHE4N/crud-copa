const mongo = require("mongoose");
const { Schema } = mongo;

const userSchema = new Schema({
    posicao:{
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    Telefone: { //idade
        type: String,
        required: true
    },
    created: {
        type: Date,
        required: true,
        default: Date.now
    }
});

//telefone  = idade
module.exports = mongo.model('User',userSchema);