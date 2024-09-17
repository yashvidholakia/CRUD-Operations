const mongoose=require('mongoose')

async function connectMongoDb(url){
    return mongoose.connect(url)
    .then(() => console.log("Mongodb connected"))
    .catch((err) => console.log("error in connecting", err))

}
module.exports={
    connectMongoDb,
}
