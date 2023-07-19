let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add(){
    if(inputs.value == ""){
        alert("please enter task")
    }else{
        let ul = document.createElement("ul");
        document.getElementById("inp").focus();
        ul.innerHTML=  inputs.value;
        text.appendChild(ul);
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        ul.appendChild(span);
        }
        inputs.value="";
    }
    text.addEventListener("click",function(e){
        
        if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();

        }
    }, false);

