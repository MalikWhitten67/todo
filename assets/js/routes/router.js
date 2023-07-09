const app = new Router()
app.get('/', (req)=>{
     let todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []
     
     dox.setVar('todos', todos)
     dox.querySelector('#add-todo').on('click', (e)=>{
         
        let todo = getState('todo')
        let el = dox.add('span', {class:''})
        el.add('span', {class:'text-gray-700 mt-5 flex flex-col text-start border-b border-gray-300'}).html(todo)
        
        el.id =  `todo-${Math.floor(Math.random() * 1000) + 1}`
        let btn = el.add('button', {class:'bg-red-500 text-white mt-2 w-full px-2 py-1 rounded '}).html('Delete')
        todos.push({
            todo: todo,
            id: el.id
        })
        localStorage.setItem('todos', JSON.stringify(todos))
        btn.on('click', (e)=>{
            console.log(e.target)
            el.remove()
            todos = todos.filter((todo)=>{
                return todo.id != el.id
            })
        })
        el.appendChild(btn)
        setState('todo', '')
        dox.querySelector('#maps').prepend(el)
        

     })
     effect(('delete'), (val)=>{
 
        console.log(val)
        dox.querySelector(`#container-${val}`).remove()
 
        todos = todos.filter((todo)=>{
            return todo.id !=  val
        })
        console.log(todos)
        localStorage.setItem('todos', JSON.stringify(todos))
     })
})
app.route()