const { createApp } = Vue;

createApp({
  data() {
    return {
      newTask: {
        name: '',
        done: false
      },
      errorMessage: false,
      tasks: [
        {
          name: 'learn php',
          done: false
        },
        {
          name: 'learn js',
          done: false
        },
        {
          name: 'learn mysql',
          done: false
        }
      ]
    }
  },
  methods: {
    /* 
        addTask() {
          if (this.newTask.name.length > 3) {
    
            this.tasks.unshift(this.newTask);
    
            this.errorMessage = false;
    
            this.newTask = { name: '', done: false };
    
          } else {
    
            this.errorMessage = 'Error! You must add at least 4 characters';
    
          }
    
        }, */
    addTask() {
      if (this.newTask.name.length > 3) {

        this.tasks.unshift(this.newTask);

        this.errorMessage = false;

        this.newTask = { ...this.newTask, name: '' };

      } else {

        this.errorMessage = 'Error! You must add at least 4 characters';

      }

    },

    completeTask(index) {

      this.tasks[index].done = !this.tasks[index].done;

    },


    removeTask(taskId) {

      this.tasks.splice(taskId, 1);

    }

  }
}).mount('#app')