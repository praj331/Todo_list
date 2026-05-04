let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    if (inp.value.trim() === "") return; 

    let item = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = inp.value;


    span.addEventListener("click", function () {
        span.classList.toggle("completed");
    });

   
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";

    delBtn.addEventListener("click", function () {
        item.remove();
    });

    item.appendChild(span);
    item.appendChild(delBtn);
    ul.appendChild(item);

    inp.value = ""; 
});