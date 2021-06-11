import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

function showNotification () {
  const notification = new Notification('Welcome to the reminder application in function', {
    body: 'Here are the updates',
    image: '/src/assets/reminder.jpeg',
    vibrate: [500, 110, 500]
  })
  notification.onclick = (e) => {
    window.location.href = 'http://google.com'
  }
}

function displayNotification () {
  if (Notification.permission === 'granted') {
    showNotification()
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
