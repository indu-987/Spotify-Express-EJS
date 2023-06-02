const express = require('express')
const app= express();
const port=3000
app.set('view engine','ejs')

app.use(express.static('./views/Images'))
app.use(express.static('./views/Styles'))


app.get('/',(req,res)=>

{

    let track=[
        {imgs:'./dp.jpg',name:"Deep focus ",content:" Relax and induslge with beautiful piono peice"},
        {imgs:'./ff.jpg',name:"Focus flow",content:" keep calm and focus with ambient and post"},
        {imgs:'./pp.jpg',name:"Focus flow",content:"uptempo instrumental hip hop beats"},
        { imgs:'./dp.jpg',name:"rap carnival",content:"Lounge and chill out music for your workday"},
        {imgs:'./RC.jpg',name:"Deep focus ",content:"new music ice spice and hot chilly "},
        {imgs:'./rp.jpg',name:"Focus flow",content:"rock legent and epic songs continue"},
        {imgs:'./pp.jpg', name:"rap carnival",content:" kick back to the best new and recent"},
    ]
   


    res.render('pages/index1',{
        track
    })

})

app.listen(port,()=>{
    console.log(`app listeening at port ${port}`);
})