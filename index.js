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

const Weafers = [
    {
        id:1, name : "Tede-Mede", price : 100
    },
    {
        id:2, name : "moog-dal", price : 50
    },
    {
        id:3, name: "chataka-pataka", price:200
    },
    {
        id:4,name: "pineapple" , price:60
    }
]

app.get("/fruits",(req,res)=>
    
{
    const {price} = req.query
    const filtredfruits = fruits.filter((fruit)=>{
       
        if(fruit.price == price)
        {
            return fruit;
        }

    })
    res.json({
        sucess:true,
        data:filtredfruits, 
        msg:"data Fetch sucessfully"

      
    })

})
// path parameter
app.get("/fruits/1",(req,res)=>
{
  const fruit = fruits.find((fruit)=>{
    if(fruit.id == 1)
    {
        return true;
    }
    res.json({
        sucess:true,
        data:fruit, 
        msg:"data Fetch sucessfully"
      });
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