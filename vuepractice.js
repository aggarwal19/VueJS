var app = new Vue({
  el: '#app',
  data: {
    message2: 'Hello Vue!'
  }
})
var app2 = new Vue({
  el: '#app-2',
  data: {
          message1: 'You loaded this page on ' + new Date().toLocaleString() 
         }
})