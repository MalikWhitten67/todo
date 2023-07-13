 
const app = new Router()
app.bindRoot('app')
app.use('/')
app.root('/', (req,res)=>{
    res.render('car')
    res.return()
})
app.get('/:hello', (req,res)=>{
    console.log(req.params.hello)
  res.render('car')
  res.return()
}) 
app.on('/', (req,res)=>{
    res.render('car')
    res.return()
})
 
 