const {MongoClient} = require('mongodb')

let dbConnection

mondule.exports={
    connectToDb: (cb)=>{
        MongoClient.connect('mongodb://localhost:27017/Recipes')
        .then((client)=>{
            dbConnection=client.db()
            return cb()
        })
        .catch(err=>{
            console.log(err)
            return cb(err)
        })
    },
    getDb:()=>{}
}