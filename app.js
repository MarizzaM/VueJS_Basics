const app = Vue.createApp({
    data() {
      return {
        showBooks: true,  
        title: 'The Way of Kings',
        author: 'Brandon Sanderson',
        age: 45
      }
    },
    methods: {
      changeTitle(title) {
        // this.title = 'Words of Radiance'
        this.title = title
      }
    }
  })
  
  app.mount('#app')