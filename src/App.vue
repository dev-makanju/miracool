<template>
  <div id="nav">
        <Header/> 
           <router-view/>
        <Footer/>     
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  export default {
     components:{
          Header,Footer
     },
     data(){
        return{
            
        }
     },
     created(){

     },
     methods:{
        
     }
  }
</script>

<style lang="scss">
 
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');//@font-name:'Montserrat', sans-serif
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Playfair+Display:ital,wght@1,400;1,500&display=swap');//@font-family: 'Playfair Display', serif;
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Playfair+Display:ital,wght@1,400;1,500&family=Roboto+Mono:wght@500&display=swap');//font-family: 'Roboto Mono', monospace;
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Montserrat:wght@600&family=Playfair+Display:ital,wght@1,400;1,500&family=Roboto+Mono:wght@500&display=swap');//font-family: 'Abril Fatface', cursive;


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  margin: 0px;
  padding: 0px;
}


#app {
   display: flex;
   flex-direction: column;
   min-height: 100vh;
   position: relative;
}

.flex{
     display: flex ;
}


</style>
