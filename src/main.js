import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

function showNotification () {
  const notification = new Notification('Welcome to the reminder application in function', {
    body: 'Here are the updates'
  })
  console.log('notification', notification)
  notification.onclick = (e)=> {
    window.location.href = "http://google.com"
  }
  alert(notification.title)
}

function displayNotification () {
  if (Notification.permission === 'granted') {
    showNotification()
    alert('Welcome to the reminder application')
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission(() => {
      showNotification()
    })
  }
}
displayNotification()

new Vue({
  render: h => h(App)
}).$mount('#app')
