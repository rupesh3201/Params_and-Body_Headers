import express from 'express';
const app = express();

// const fruits = [ 'Mango','banana', 'Apple']
const fruits = [
    {
        id:1 ,  name:apple , price : 100
    },
    {
        id:2
    }
]
app.get('/fruits',(req,res)=>
{
    res.json({
        sucess:true,
        data:fruits,
        msg:"data Fetch sucessfully"
      
    })

})
app.get('/health',(req,res)=>
    {
        res.json({
            msg:"Api Fetch sucessfully"
        })
    
    })
const Port= 5000;
app.listen(Port,()=>
{
    console.log(`server is running on http//${Port}`)
})