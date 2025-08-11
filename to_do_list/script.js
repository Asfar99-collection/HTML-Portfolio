const inputbox = document.getElementById("inputbox");
const addbtn = document.getElementById("addbtn");
const todoList = document.querySelector(".todoList");

let edittodo = null;
const addtodo = () => {

    const inputtext = inputbox.value.trim();

    if (inputtext.length <= 0) {
        alert("write something!");
    }
    else if (addbtn.value === "edit") {
        const oldText = edittodo.target.previousElementSibling.innerHTML; // get old text BEFORE updating
        edittodo.target.previousElementSibling.innerHTML = inputtext;
        editlocaltodos(oldText, inputtext);
        addbtn.value = "add";
        inputbox.value = "";
    }
    else {
        //creating tags
        const li = document.createElement("li");
        const p = document.createElement("p");

        p.innerHTML = inputtext;

        li.appendChild(p);


        //creating buttons
        const editbtn = document.createElement("button");
        editbtn.innerHTML = "edit";
        editbtn.classList.add("btn", "editbtn");
        li.appendChild(editbtn);

        const deletebtn = document.createElement("button");
        deletebtn.innerHTML = "remove";
        deletebtn.classList.add("btn", "removebtn");
        li.appendChild(deletebtn);

        
        todoList.appendChild(li);
        inputbox.value = "";

        savelocaltodos(inputtext);

    }

}

const updatetodo = (e) => {

    if (e.target.innerHTML === "remove") {
        todoList.removeChild(e.target.parentElement);
        deletelocaltodos(e.target.parentElement);
    }
    if (e.target.innerHTML === "edit") {
        inputbox.value = e.target.previousElementSibling.innerHTML;
        inputbox.focus();
        addbtn.value = "edit";
        edittodo = e;

    }
}

const savelocaltodos = (todo) => {
    let todos = [];
    todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));

}

const getlocaltodos = () => {
    let todos;

    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
        todos.forEach((todo) => {
            const li = document.createElement("li");
            const p = document.createElement("p");

            p.innerHTML = todo;

            li.appendChild(p);
            inputbox.value = "";

            //creating buttons
            const editbtn = document.createElement("button");
            editbtn.innerHTML = "edit";
            editbtn.classList.add("btn", "editbtn");
            li.appendChild(editbtn);

            const deletebtn = document.createElement("button");
            deletebtn.innerHTML = "remove";
            deletebtn.classList.add("btn", "removebtn");
            li.appendChild(deletebtn);

            todoList.appendChild(li);
        });
    }
}

const deletelocaltodos =(todo) =>{
     let todos;

    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
        let todotext = todo.children[0].innerHTML;
        let todoindex = todos.indexOf(todotext);
        todos.splice(todoindex,1);
        localStorage.setItem("todos", JSON.stringify(todos));

    }

}

const editlocaltodos = (oldText, newText) => {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    let todoindex = todos.indexOf(oldText);
    if(todoindex !== -1){
        todos[todoindex] = newText;
        localStorage.setItem("todos",JSON.stringify(todos));

    }
    

}

//event listeners for edit and delete buttons
document.addEventListener("DOMContentLoaded", getlocaltodos);
addbtn.addEventListener("click", addtodo);
todoList.addEventListener("click", updatetodo);
