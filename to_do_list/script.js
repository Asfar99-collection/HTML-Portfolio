 const inputbox =document.getElementById("inputbox");
 const addbtn =document.getElementById("addbtn");
 const todoList =document.querySelector(".todoList");

 const addtodo = () => {
    const inputtext = inputbox.value.trim();

    if(inputtext.length <= 0){
        alert("write something!");
    }
    else
    {
        //creating tags
    const li = document.createElement("li");
    const p = document.createElement("p");

    p.innerHTML = inputtext;
    
    li.appendChild(p);
    todoList.appendChild(li);
    inputbox.value = "";

    const deletebtn = document.createElement("button");
    deletebtn.innerText = "remove" ;
     li.appendChild(deletebtn);

     const editbtn = document.createElement("button");
    editbtn.innerText = "edit" ;
     li.appendChild(editbtn);


    }

}

 addbtn.addEventListener("click",addtodo);

