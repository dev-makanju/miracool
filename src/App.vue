<template>
  <div id="nav">
        <div class="main-container">
            <Header/> 
            <router-view/>
        </div>

        <div class="footer-main">
              <Footer/>    
        </div>    
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  export default {
     components:{
          Header,Footer
     },
  }
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');//@font-name:'Montserrat', sans-serif
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Playfair+Display:ital,wght@1,400;1,500&display=swap');//@font-family: 'Playfair Display', serif;
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Playfair+Display:ital,wght@1,400;1,500&family=Roboto+Mono:wght@500&display=swap');//font-family: 'Roboto Mono', monospace;
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Montserrat:wght@600&family=Playfair+Display:ital,wght@1,400;1,500&family=Roboto+Mono:wght@500&display=swap');//font-family: 'Abril Fatface', cursive;
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

html{
  min-height: 100vh;
}

body{
    overflow-x: hidden ;
}

#app {
   display: flex;
   flex-direction: column;
   min-height: 100vh;
   position: relative;
}

.main-container{
   height: 100%;
}

.flex{
     display: flex ;
}

.footer-main{
     background:  #071013;
     padding: 40px 0px;
}

.tar_link{
    color: #eee;
    &:hover{
        color:  #092a31;
    }
}

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgb(50, 147, 182); 
    border-radius: 17px;
}

::-webkit-scrollbar-thumb {
    border-radius: 17px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
    background:#15687a;
} 

</style>
