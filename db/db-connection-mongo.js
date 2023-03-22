const mongoose = require('mongoose');

const getConnection = async () => {
   
    try{
        const url = 'mongodb://user_iud:MWOxBJZWfcU30JJx@ac-tvc9bh0-shard-00-00.t9yohxv.mongodb.net:27017,ac-tvc9bh0-shard-00-01.t9yohxv.mongodb.net:27017,ac-tvc9bh0-shard-00-02.t9yohxv.mongodb.net:27017/inventario_IUD?ssl=true&replicaSet=atlas-jjn80r-shard-0&authSource=admin&retryWrites=true&w=majority';

        await mongoose.connect(url);

        console.log('conexion exitosa');
    }catch(error){
        console.log(error)
    }

}

module.exports = {
    getConnection,
}