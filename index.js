import express from 'express';
const app = express();

app.get('/fruits',(req,res)=>
{
    res.json({
        msg:"data send sucessfully"
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