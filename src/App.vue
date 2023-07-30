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

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&family=Plus+Jakarta+Sans&family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,800;1,300&family=Plus+Jakarta+Sans&display=swap');


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.flex{
  display: flex;
}

.items-center {
  justify-content: center;
}

.align-items {
  align-items: center;
}

.flex-col {
  flex-direction: column;
}

.underline {
    border: 2px solid #225157;
    height: 3px;
    border-radius: 5px;
    width: 60px;

    &.before-enter{
      width: 1px;
      transition: 1s ease-in-out all; 
    }

    &.enter{
      width: 60px;
    }
}

h1,h2,h3,h4,h5,h6{
  font-family: 'Open Sans', sans-serif;
}

span, p, li {
  font-family: 'Plus Jakarta Sans', sans-serif;
}

ul, ol {
  list-style-type: none;
}

html{
  min-height: 100vh;
}

#app{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
}

.main-container{
   height: 100%;
   min-height: 100vh;
   overflow-x: hidden ;
   position: relative ;
   max-width: 1440px;
   margin: 0 auto;
}

.flex{
     display: flex ;
}

.footer-main{
     background:  #225157;
     padding: 40px 0px;
     max-width: 1440px;
     margin: 0px auto;
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
