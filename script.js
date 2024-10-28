let body = document.querySelector("body");
let toggle_btn_container = document.getElementById("toggle_btn_container");
let circle_btn = document.getElementById("circle_btn");
let h1 = document.querySelector("h1");

let count = 0;

toggle_btn_container.addEventListener("click", function(){
    if(count % 2 == 0){
        circle_btn.style.marginLeft = "90px";
        count++;
        body.style.backgroundColor = "white";
        h1.style.color = "black";
    } else {
        circle_btn.style.marginLeft = "0";
        count--;
        body.style.backgroundColor = "black";
        h1.style.color = "white";
    }
})
