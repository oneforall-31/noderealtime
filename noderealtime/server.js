const io = require("socket.io")(3100);

const users = {};

io.on("connection",socket=>{
    socket.on("name",name=>{
        users[socket.id] = name;
        socket.broadcast.emit("name",name);
    })
    socket.on("sendtext",text=>{
        socket.broadcast.emit("text",{text:text,name:users[socket.id]});
    })
    socket.on("disconnect",()=>{
        socket.broadcast.emit("name1",users[socket.id]);
        delete users[socket.id]
    })
});