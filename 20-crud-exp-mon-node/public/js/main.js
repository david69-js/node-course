/*
let url = "http://localhost:3000/"
const getTodos = async () =>{
    let response = await fetch(url+'get-all-todo');
    let data = await response.json();
    let todos = data
    return todos;
}

const updateTodo = async (id) =>{
    const res = await fetch(url+`update-todo/${id}`)
    .then(res => res.json())
    return res;
}
window.addEventListener('DOMContentLoaded', async  (e) =>{
    let todo  = await getTodos();
    let itemtodos = todo.todos;
    document.querySelector('#todos').innerHTML = '';
    itemtodos.forEach(item =>{
        document.querySelector('#todos').innerHTML += `
            <div class="todo" id="${item._id}">
                <div class="checkbox-container">
                    <input type="checkbox" class="complete-checkbox" ${(item.completed == true) ? 'checked' : ''}>
                </div>
                <div class="text-container ${(item.completed == true) ? 'completed' : ''} ">${item.text}</div>
                <div class="actions-container">
                    <a href="/delete-todo/${item._id}">X</a>
                </div>
            <div> 
        `
    })

    document.querySelector('#form').addEventListener('submit',  e  =>{
        e.preventDefault();
        const text = document.querySelector('#text').value;
        if(text == '') return false; 
        fetch(url+'add', {
            method: 'POST',
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
            body: JSON.stringify({text: text})
        })
        .then(res => res.json())
        .then(todos =>{
            if(todos.response === 'success'){ 
                getTodos()
            }
        })
    })
    
});
*/
let form  = document.querySelector('#form')
window.addEventListener('DOMContentLoaded', (e) =>{
    updatetodos();
});

const mapCheckboxes = () =>{
    document.querySelectorAll('.complete-checkbox').forEach(item =>{
        item.addEventListener('click', async e => {
            const id = e.target.parentNode.parentNode.id;
            let classes = e.target.parentNode.parentNode.childNodes[3].className.replace('completed', '').trim();
            const completed = e.target.checked;

            const res = await updateTodo(id, form);

            if(res){
                if(completed){
                    e.target.parentNode.parentNode.childNodes[3].className += 'completed';
                   }else{
                    e.target.parentNode.parentNode.childNodes[3].className = classes;
                   }
            }
        });
     });
}

const updateTodo = async (id, form) =>{
    const res = await fetch('http://localhost:3000/update-todo/'+id, form)
            .then(res => res.json());
    return res;
}
const updatetodos = () =>{
    fetch('http://localhost:3000/get-all-todo')
    .then(res => res.json())
    .then(todo =>{
        if(todo.response === 'success'){
            const todos = todo.todos;
            document.querySelector('#todos').innerHTML = '';
            todos.forEach(item =>{
                document.querySelector('#todos').innerHTML += `
                <div class="todo" id="${item._id}">
                    <div class="checkbox-container">
                        <input type="checkbox" class="complete-checkbox" ${(item.completed == true) ? 'checked' : ''}>
                    </div>
                    <div class="text-container ${(item.completed == true) ? 'completed' : ''} ">${item.text}</div>
                    <div class="actions-container">
                        <a href="/delete-todo/${item._id}">X</a>
                    </div>
                <div> 
            `;
            });
        }

        mapCheckboxes();

        
    })
    .catch(err => console.error(err));
}


form.addEventListener('submit',  e  =>{
    e.preventDefault()
    const text = document.querySelector('#text').value;
    if(text == '') return false; 
    fetch("http://localhost:3000/add", {
        method: 'POST',
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify({text: text})
    })
    .then(res => res.json())
    updatetodos()    
    form.reset()
});
