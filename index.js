import express from 'express';
const app = express();

// const fruits = [ 'Mango','banana', 'Apple']
const fruits = [
    {
        id:1, name : "Apple", price : 100
    },
    {
        id:2, name : "banana", price : 50
    },
    {
        id:3, name: "mango", price:200
    },
    {
        id:4,name: "pineapple" , price:60
    }
]
app.get('/fruits',(req,res)=>
    
{
    const {price} = req.query
    const filtredfruits = fruits.filter((fruit)=>{
        if(fruits.price==price)
        {
            return fruits
        }

    })
    res.json({
        sucess:true,
        data:fruits,
        data2:filtredfruits, 
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