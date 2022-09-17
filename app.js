console.log("hello hamo");

const log = require('./logger');

const expres =  require('express');


const app = expres();

app.use(expres.json())


const courses = [
    {
        id:1,
        name:"History",
        teachers: 34
    },
    {
        id:2,
        name:"Physics",
        teachers: 13
    },
    {
        id:3,
        name:"Mathematics",
        teachers: 29
    },
    {
        id:4,
        name:"Biology",
        teachers: 69
    }


]

app.get("/amo/api/get",(req,res)=>{
     res.send(courses)
})

app.get('/amo/api/get/:id',(req,res) => {
    const cou = courses.find(
        (c)  => c.id === parseInt(req.params.id)
        
        )
    
    if(!cou)res.status(404).send("no student with that id");
    res.send(cou)
})

app.post("/amo/api",(req,res)=>{
    const data = req.body
    const course = {
        id: courses.length+1,
        name: data.name,
        teachers: parseInt(data.teachers)
        
    };
    courses.push(course)
    res.send(course)
    res.json().status(200).end()
     
})



app.listen(3000,()=>{
    console.log("listening on port 3000...")
})