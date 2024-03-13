const { createApp } = Vue;

createApp({
  data() {
    return {
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

    removeTask(taskId) {

      this.tasks.splice(taskId, 1);

    }

  }
}).mount('#app')