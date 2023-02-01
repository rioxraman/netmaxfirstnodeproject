const express = require('express')
const path = require('path')
const app = express()
const port = 3000

var contactList = [
  {
      name: "Rio",
      phone: "1111111111",
  },
  {
      name: "Tony Stark",
      phone: "1234567890"
  },
  {
      name: "Richard",
      phone: "12131321321"
  }
]

app.set('view engine','ejs')
app.set('views',path.join(__dirname, 'views'))

app.use(express.urlencoded())
app.use(express.static('assets'))

app.get('/', (req, res) => {
  res.render('index',{
    title:"nodeclass",
    user:{
      name: "Raman"
    } 
  })
})

app.post('/contact',(req,res)=>{
  console.log("expected error :",req.body);
  contactList.push(req.body)
  return res.redirect('/viewlist')
})
// app.post('/contact',function name(params) {
  
// })

app.get('/viewlist', (req, res) => {
  res.render('project',{
    title:"contact",
    
    name:contactList
    
  })
})

app.get('/delete', (req, res) => {
  console.log(req.query);
  let phone = req.params.phone
  let index = contactList.findIndex(e=>e.phone == phone)
  if(index != -1){

    contactList.splice(index,1)
  }
  return res.redirect('back');
 
})


app.get("/success/:tarun",(req,res)=>{
    console.log(req.params);
})

app.post('/create', function(req, res){
    
  // contactList.push({
      
  //     name: req.body.name,
  //     phone: req.body.phone,
  // })
  contactList.push(req.body);
  console.log(req.body);
  return res.redirect('back');

});
// app.use(path.join(__dirname, 'public'))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})