const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const port = 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');
const res = require("express/lib/response");

const uri = "mongodb+srv://gym-trainer:Q2y2oBbAerkZMyHe@cluster0.sa4vu.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try{


client.connect()
const serviceCollection=client.db('gym-trainer').collection('service')

app.get('/service',async (req,res)=>{
    const query={}
    const results=await serviceCollection.find(query).toArray()
    res.send(results)
})





    }
    finally{

    }
}
run().catch(console.dir)

app.get('/',(req,res)=>{
    res.send('Hello to gym trainer')
})
app.listen(port)