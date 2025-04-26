const express=require("express")
const app=express()
app.use(express.json())
const PORT=3000;

const users=[
    {username:"alice",age:"25",email:"alice@example.com"},
    {username:"bob",age:"30",email:"bob@example.com"},
    {username:"charlie",age:"28",email:"charlie@example.com"}
]

app.post("/create",()=>{
    const {username,age,email}=req.body
    if(username.trim()===''||age.trim()===''||email.trim===''){
        return res.status(404).json("User parameter cannot be empty")
    }
    const existuser=users.some(user=>user.email===email)
    if(existuser){
        return res.status(404).json({message:"user already exists"})
    }
    else{
    users.push({username,age,email})
    res.status(201).json({result:"success",message:"User created sucessfully"})
    }
})




app.get("/",async(req,res)=>{

if(!users){
    return res.status(404).json({message:"User not found"})
}
else{
    res.status(200).json({message:"User found",data:users})
}
})


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})