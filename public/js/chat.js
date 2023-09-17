let socket = new WebSocket("ws://localhost:8081/");

socket.onopen = function(e) {
  socket.send(JSON.stringify({
    name : 'ahmed',
    job : 'web developer',
  }));
};


// send message from the form
document.forms.publish.onsubmit = function(e) {
  e.preventDefault()
  let outgoingMessage = this.message.value;
  console.log(outgoingMessage)
  document.getElementById('messages').append(outgoingMessage);
  socket.send(outgoingMessage);
};

socket.onclose = function(event) {
  if (event.wasClean) {
    alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
  } else {
    // e.g. server process killed or network down
    // event.code is usually 1006 in this case
    alert('[close] Connection died');
  }
};

socket.onerror = function(error) {
  alert(`[error]`);
};