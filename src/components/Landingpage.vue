<template>
  <div class="container">
      <!-- <img v-lazy="require(`@/assets/portfolio-icons/mountains.jpg`)"> -->
     <div class="background-image">
        <img v-lazy="require(`@/assets/portfolio-icons/mountains.jpg`)">
     </div>
     <div class="parent-body">
         <BallOverlay/>
     </div>
     <div class="overlay"></div>
     <div v-scrollanimation class="move-bar"></div>
     <div class="contain">
          <div class="img">
               <img v-lazy="require(`@/assets/portfolio-icons/test-image.png`)"> 
          </div>
          <div class="main-text">
            <h1>{{ name}}</h1>
            <p>A creative frontend engineer and technical writer</p>
          </div>   
    </div>
  </div>
</template>

<script>

import BallOverlay from '../components/OverlayBall.vue';

// @ is an alias to /src

export default {
  name:'Home',
  components:{
      BallOverlay
  },
  data(){
    return{
        name:'Oluwafemi Makanju',
        stalk:'Software Developer',
        homeText:"let's talk about your project.",
    }
  }
}
</script>


<style lang="scss" scoped>
  .main-text {
    margin-top: .7rem;
    text-align: center;
    h1 {
      color: rgba(238, 238, 238, 0.9333333333);
      font-size: 40px;
      font-weight: bolder;
      
      @media (max-width: 450px) {
        font-size: 25px;
      }

    }

    p {
      color: #4dd6f5da;

      @media (max-width: 450px) {
        font-size: 16px;
      }
    }
  }
  .background-image img{
      width: 100vw;
      height: 535px;
      object-fit: cover;
  }

  .container{
      overflow: hidden ;

      //position: relative;
      .contain{
          position: absolute;
          top: 0px;
          display: flex;
          width: 100%;
          height: 600px;
          justify-content: center;
          align-items: center;
          flex-direction: column;

          & .img{
              background: linear-gradient(#4dd6f5da , #000000);
              border-radius: 50%;
              overflow: hidden;
              display: flex;
              justify-content: center;
              padding: 10px 10px 0 0;
              width: 200px;
              height: 200px;

              @media (max-width: 450px) {
                width: 150px;
                height: 150px;
              }

          }
      }

      .overlay{
          background: rgba(0, 0, 0, 0.515);
          width: 100vw;
          height: 600px ;
          position: absolute;
          top: 0px;  
      }

      .move-bar{
           @media (min-width:768px){
              width: 10%;
              height: 600px ;
              position: absolute;
              background: #000;
              box-shadow: 0px 2px 5px rgba(56, 55, 55, 0.3) , 0px 2px 7px 5px rgba(56, 55, 55, 0.2);
              top: 0px ;
              transition: .9s ease ;

              &.before-enter{
                 opacity: 0 ;
                 transform: translateX(-20px );
              }

               &.enter{
                 opacity: .5 ;
                 transform: translateX(1800px);
               }
              
           }
           width: 20% ;
           height: 600px ;
           background: #000;
           opacity: .1;
           position: absolute;
           top: 0px;
           transition: 2s ease ;

          &.before-enter{
              opacity: 0 ;
              transform: translateX(-20px );
          }
          &.enter{
              opacity: .5 ;
              transform: translateX(1800px);
          }

           &.before-enter{
               opacity: 0 ;
           }

           &.enter{

               opacity: .5 ;
           }
      }
  }

</style>