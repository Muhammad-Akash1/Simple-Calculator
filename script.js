let buttons = document.querySelectorAll("button");
console.log(buttons);
let expression = document.querySelector("input");
let str = "";

buttons.forEach( e => {
    e.addEventListener("click", () => {
        console.log(e.id, "was clicked");
        if(e.id == "clear"){
            expression.value = "";
        }
        else if(e.id == "back"){
            str = expression.value.toString();
            console.log(str);
            str = str.substring(0, str.length -1);
            console.log(str);
            expression.value = str;
        }
        else if(e.id !== "equal"){
        expression.value = expression.value + e.id; 
        } 
        else{
            str = eval(expression.value);
            expression.value = str;
        }
    })
})