<template>
    <div class="part">
          <h1 id="heading">Reminders</h1>
          <div class="row col-12 py-2">
            <div class="col-6">
              <input v-model="newItemText" id="reminder" placeholder="Enter a reminder">
            </div>
        <div class="col-3">
          <input v-model="remindMeAfter" type="text" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');" id="minutes" class="form-control" placeholder="Remind after how many minutes">
        </div>
        <div>
          <input v-model="description" type="text" id="description" placeholder="Enter description"/>
        </div>
        <div class="col-3">
          <button class="btn btn-primary" id="save" v-on:click="addNewTodo">Save</button>
        </div>
      </div>
    <div class="container-fluid p-4">
        <div class="row col-12 filtered" id="tasksTemplate" v-for="t in filteredTasks" v-bind:key="t.action">
          <div class="col-4 action" id="action">{{t.action}}</div>
          <div class="col-4 " id="when">{{t.description}}</div>
          <span id="time">{{t.time}}</span>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
  name: 'part',
  data(){
    return {
      tasks: [
      ],
      hideCompleted: true,
      newItemText: '',
      remindMeAfter:'',
      description: ''
    }
  },
    computed: {
      filteredTasks () {
        return this.hideCompleted ? this.tasks.filter(t => !t.done) : this.tasks
      },
      Notify(){

      }
  },
  methods: {
          showNotification(){
          const notification = new Notification('Task is pending.', {
              body: 'Here are the updates',
              image: '/src/assets/reminder.jpeg',
              vibrate: [500, 110, 500]
            })
            notification.onclick = (e) => {
              window.location.href = 'http://google.com'
            }

        },


              notifyMe () {
          if (!('Notification' in window)) {
              alert('This browser does not support desktop notification')
          }
          else if (window.Notification && Notification.permission === 'granted') {
              showNotification()

            }

              else if (window.Notification && Notification.permission !== 'denied') {
                Notification.requestPermission().then(function (permission) {
                // If the user accepts, let's create a notification
                if (permission === 'granted') {
                   showNotification()
                }
                else{
                    alert('Hi')
                }
                })
            }
            else {
                alert('Hi!')
            }
        },
        addNewTodo () {
          let date = new Date()
          let h = parseInt(date.getHours())
          let m = parseInt(date.getMinutes())+ parseInt(this.remindMeAfter)
          if(m>60){
            m= m-60
            h++;
          }
          if(h<10){
            h= '0'+h;
          }
          if(m<10){
            m ='0'+m
          }
          let _time = h+ ':' + m;
          alert('time '+ _time);
              this.tasks.push({
                action: this.newItemText,
                when: this.remindMeAfter,
                description: this.description,
                time: _time
              })
            const notification = new Notification(this.tasks[this.tasks.length-1].action +' is pending.', {
              body: 'Here are the updates',
              image: '/src/assets/reminder.jpeg',
              vibrate: [500, 110, 500]
            })
            notification.onclick = (e) => {
              window.location.href = 'http://google.com'
            }
          this.storeData()
          setTimeout(notifyMe(),_time*1000); 
    },
    storeData () {
      localStorage.setItem('actions', JSON.stringify(this.tasks))
    },
    deleteCompleted () {
      this.tasks = this.tasks.filter(t => !t.done)
      this.storeData()
    }
  },
  created () {
    let data = localStorage.getItem('actions')
    if (data != null) {
      this.tasks = JSON.parse(data)
    }
        
  }
    }
</script>
    
<style>
#heading{
  font-family: sans-serif;
  margin: 3rem;
  font-size: 3rem;
  font-weight: bold;
}
#id{
  width: 100%;
}
#time {
  margin: 1rem;
  border: 1px solid black;
  padding: 1rem;

}
#reminder {
  margin: 2rem;
  width: 30rem;
  height: 20px;
  margin: 1rem;
  padding: 1rem;
  border-radius: 1em;
  font-size: 1rem;
  font-family: sans-serif;
}
#description {
  margin: 2rem;
  width: 30rem;
  height: 20px;
  margin: 1rem;
  padding: 1rem;
  border-radius: 1em;
  font-size: 1rem;
  font-family: sans-serif;
}
#minutes {
  width: 30rem;
  height: 20px;
  padding: 1rem;
  margin: 1rem;
  border-radius: 1em;
  font-size: 1rem;
  font-family: sans-serif;
}
#save {
    background-color: #ffa447;
    border-radius: 1rem;
    width: 8rem;
    font-size: 1rem;
    margin: 1rem;
    height: 3rem;
    border: none;
    font-family: sans-serif;
}
#tasksTemplate {
    background-color: #1eccc3;
    height: 200px;
    border-radius: 2rem;
    width: 300px;
    display: inline-block;
    margin: 2rem;
    padding: 1rem;
    font-family: sans-serif;
}
#action {
    font-size: 2rem;
    font-weight: 800;
    padding: 1rem;
}
#when {
  padding: 1rem;
}

</style>
