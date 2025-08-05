let inputbox = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");


let input = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "AC") {
            input = "";
            inputbox.value = input;
        }
        else if (e.target.innerHTML == "DEL") {
            input = input.slice(0, -1);
            inputbox.value = input;
        }
        else if (e.target.innerHTML == "=") {
            inputbox.value = eval(input);
            input = inputbox.value;

        }
        else {
            input += e.target.innerHTML;
            inputbox.value = input;
        }

    })
    }); 