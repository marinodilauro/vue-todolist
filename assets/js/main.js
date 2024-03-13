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

    addTask() {
      if (this.newTask.name.length > 3) {

        this.tasks.unshift(this.newTask);

        this.errorMessage = false;

        this.newTask = { name: '', done: false };

      } else {

        this.errorMessage = 'Error! You must add at least 4 characters';

      }

    },

    completeTask(taskIndex) {

      this.tasks[taskIndex].done = !this.tasks[taskIndex].done;

    },


    removeTask(taskId) {

      this.tasks.splice(taskId, 1);

    }

  }
}).mount('#app')