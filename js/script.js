

const app = new Vue({
  el: '#app',

  data: {

    emails: [],

    loaded: false,
  },

  mounted() {

    this.emailGenerator();
  
  },

  methods: {
    
    emailGenerator() {
      
      for(let i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((resp) => {

          this.emails.push(resp.data.response)
          
        });
      }

      setTimeout(() => {
        
        this.loaded = true;
        
      }, 3000)

    },

  }
})