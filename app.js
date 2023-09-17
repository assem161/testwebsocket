const ws = require('ws');

const wss = new ws.Server({port: 8081});

wss.on('connection', ws=> {
    
    ws.on("message",(message)=>{
        //var data = JSON.parse(message);
        //console.log(data)
        //console.log(data.name)

        message = message.slice(0, 50); // max message length will be 50
        console.log(message)

    }) 

});