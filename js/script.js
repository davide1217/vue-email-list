

const app = new Vue({
  el: '#app',

  data: {

    emails: [],

    emailsNumber: 10,

  },

  mounted() {

    this.emailGenerator();
  
  },

  methods: {
    
    emailGenerator() {
      
      for(let i = 0; i < this.emailsNumber; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((resp) => {

          this.emails.push(resp.data.response)
          
        });
      }

    },

  }
})