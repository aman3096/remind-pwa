<template>
    <div class="part">
    <h1>Seeti maar</h1>
    <button v-on:click="notifyMe()">Notify me!</button>
    </div>
</template>

<script>
    export default {
  name: 'part',
  methods: {
        notifyMe () {
          console.log('notify me')
          if (!('Notification' in window)) {
        alert('This browser does not support desktop notification')
              }
              else if (window.Notification && Notification.permission === 'granted') {
        var i = 0;
        var interval = window.setInterval(function () {
            var n = new Notification('Hi! '+ i, { tag: 'soManyNotification' })
            if ( i++==9 ) {
                window.clearInterval(interval);
            }
        }, 200);
            }

              else if (window.Notification && Notification.permission !== 'denied') {
                Notification.requestPermission().then(function (permission) {
                // If the user accepts, let's create a notification
                if (permission === 'granted') {
                    var i = 0;
                    var interval = window.setInterval(function (){
                        var n = new Notification('Hi! '+ i, { tag:'soManyNotification' });
                        if (i++ == 9) {
                            window.clearInterval(interval)
                        }
                    }, 200)
                }
                else{
                    alert('Hi');
                }
                })
            }
            else {
                alert('Hi!');
            }
        }
  }
    }
</script>
    
<style>
    
</style>