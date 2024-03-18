import  express  from "express";

const app=express();
const port=3000;

app.get('/', async(req,res)=>{
    res.status(200).json({msg:"Welcome to Main Backend Route"})
})

app.get('/home', async(req,res)=>{
    res.status(200).json({msg:"Welcome to Home Route"})
})


app.listen(port, ()=>{
    console.log(`Example App listening on http://localhost:${port}`);
})