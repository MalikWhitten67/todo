const app = new Router()
app.use('/')
app.bindRoot('app')
app.get('/', (req, res)=>{
     
     // append todos from localstorage

     let todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []
     res.render('main')
     res.return()
     todos.forEach((todo)=>{
        let el = dox.add('span', {class:'flex justify-between items-center   px-2 py-1 rounded mt-16 border-b-4 border-slate-300 '}).html(todo.todo)
        let btn = dox.add('button', {class:'btn btn-sm btn-error text-white', id:todo.id}).html('Delete')
        el.appendChild(btn)
        btn.on('click', (e)=>{
         let id = e.target.id
         el.remove()
         todos = todos.filter((todo)=>{
             return todo.id !=  id
         })
         
         localStorage.setItem('todos', JSON.stringify(todos))
      })
     dox.querySelector('#maps').prepend(el)
        
         
    })
    // add todos
     dox.querySelector('#add-todo').on('click', (e)=>{
         let todo = getState('todo')
         
         let id = Math.floor(Math.random() * 1000) + 1
         let el = dox.add('span', {class:'flex justify-between items-center   px-2 py-1 rounded mt-16 border-b-4 border-slate-300 '}).html(todo)
         let btn = dox.add('button', {class:'btn btn-sm btn-error text-white', id:todo.id}).html('Delete')
           
         el.appendChild(btn)
         btn.on('click', (e)=>{
            let id = e.target.id
            el.remove()
            todos = todos.filter((todo)=>{
                return todo.id !=  id
            })
        })   
       
         
         todos.push({
            id: 'delete'+id,
            todo: todo
         })
        localStorage.setItem('todos', JSON.stringify(todos))
        
        dox.querySelector('#maps').prepend(el)

    })
    
     
})

app.on('/', (req, res)=>{
    res.render('main')
    res.return()
})