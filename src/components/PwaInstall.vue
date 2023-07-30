<template>
  <div :class="['pwa-wrapper', shown ? 'is-active':'' ]">
    <!--  -->
   <h1 class="text-black font-bold pt-2 pb-2 text-center">Add app to home screen ?</h1>
   <div class="button-wrapper">
      <button class="btn-pwa" @click="installPWA">
         Install!
      </button>
      <button class="btn-pwa" @click="dismissPrompt">
         No, thanks
      </button>
   </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    shown: false,
  }),
  beforeMount(){
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      this.installEvent = e
      this.shown = true
    })
  },
  methods: {
    dismissPrompt() {
      this.shown = false
    },

    installPWA() {
      this.installEvent.prompt()
      this.installEvent.userChoice.then((choice) => {
        this.dismissPrompt() // Hide the prompt once the user's clicked
        if (choice.outcome === 'accepted') {
          // Do something additional if the user chose to install
        } else {
          // Do something additional if the user declined
        }
      })
    },
  }
}
</script>

<style lang="scss">
   .pwa-wrapper {
     background: #FFF; 
     padding: 7px;
     border-radius: 5px;
     position: fixed;
     bottom: 3px;
     display: flex;
     flex-direction: column;
     transition: .5s ease ;
     transform: translateX(-400px); 
     box-shadow: 0px 2px 5px rgba(0, 0, 0, .2);

     &.is-active {
        transform: translateX(0px); 
     }

     h1 {
        color: #225157;
        font-weight: bold;
        padding-top: 4px;
        padding-bottom: 2px;
        text-align: center;
        font-size: 16px;
     }
   }  
   
   .button-wrapper {
      display: flex;
      flex-direction: row;
      gap: 4px;
      align-items: center;
      justify-content: space-between;
      margin-top: 1rem;
      cursor: pointer;
   }

   .btn-pwa {
      padding: 7px;
      border-radius: 5px;
      background: #225157;
      border: none;
      font-weight: light;
      color: #FFF;
      width: 100%;
   }
</style>