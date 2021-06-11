<template>
  <div id="app">
    <part></part>
  </div>
</template>

<script>
import Part from './components/Part.vue'
export default {
  name: 'app',
  components: {
    Part
    }
  }
</script>

 // 
  // data () {
  //   return {
  //     name: 'Aman',
  //     tasks: [
  //     ],
  //     hideCompleted: true,
  //     newItemText: '',
  //     remindMeAfter:'',
  //     description: ''
  //   }
  // },
  // computed: {
  //   filteredTasks () {
  //     return this.hideCompleted ? this.tasks.filter(t => !t.done) : this.tasks
  //   },
  //   notfifyReminder(search) {
  //     console.log(search);
  //     const item = this.tasks.filter(tasc => tasc.newItemText == search);
  //     alert(item[0].newItemText + ' is pending. ');
  //   },
  //   delayAlert () {
  //     const searchItem = this.newItemText;
  //     const date = new Date();
  //     let h = date.getHours();
  //     let m =parseInt(date.getMinutes());
  //     m  = m + parseInt(this.remindMeAfter);
  //     console.log(date);
  //     console.log('before m', m, h);
  //     if(m>60){
  //       m = m-60;
  //       h++;
  //     }
  //     console.log('after m', m, h);
  //     let _time = (h > 12) ? (h-12 + ':' + m +' PM') : (h + ':' + m +' AM');
  //     alert('time '+ _time);
  //     console.log('search time', _time);
  //     setTimeout(notfifyReminder.bind(this, searchItem), this.remindMeAfter*1000)

  //   }
  // },
  // methods: {
  //   addNewTodo () {
  //     this.tasks.push({
  //       action: this.newItemText,
  //       when: this.remindMeAfter,
  //       description: this.description,
  //     })
  //     this.storeData()
    
  //     this.delayAlert();

  //   },
  //   storeData () {
  //     localStorage.setItem('actions', JSON.stringify(this.tasks))
  //   },
  //   deleteCompleted () {
  //     this.tasks = this.tasks.filter(t => !t.done)
  //     this.storeData()
  //   }
  // },
  // created () {
  //   let data = localStorage.getItem('actions')
  //   if (data != null) {
  //     this.tasks = JSON.parse(data)
  //   }
  // }
