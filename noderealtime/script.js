const socket = io("http://localhost:3100");
const input = document.querySelector("#input1");
const form = document.querySelector(".form1");
const body = document.querySelector(".body");


const name = prompt("name");
appenddiv("you joined");
socket.emit("name",name);
socket.on("text",data=>{
    appenddiv(`${data.name}: ${data.text}`);
})
socket.on("name",data=>{
    appenddiv(data+"joined");
})
socket.on("name1",data=>{
    appenddiv(data+"disconnect");
})

form.addEventListener("submit",e=>{
    e.preventDefault();
    let text1 = input.value;
    appenddiv(`You: ${text1}`);
    socket.emit("sendtext",text1);
    input.value = '';
})

function appenddiv(x){
    let newdiv = document.createElement("div");
    newdiv.innerHTML = x;
    body.appendChild(newdiv);
}