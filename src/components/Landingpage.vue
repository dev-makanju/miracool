<template>
  <div class="container">
     <!--container-overlay-->
     <div v-scrollanimation class="icons-wrapper">
        <div class="images first"></div>
     </div>
     <div class="overlay"></div>
     <div v-scrollanimation class="move-bar"></div>
     <!---background overlay--->
     <!---top layer-->
     <div class="contain">
        <div class="main-wrapper">
            <div class="home-dash">
            <div class="home-dash__text-wrapper">
                 <h4>{{ this.stalk }}</h4>
                 <h1 class="animate__animated animate__zoomInLeft">{{ this.firstname}}</h1>
            </div>
            <div class="home-dash__text-wrapper">
                 <div>{{ this.homeText }}</div>
            </div>

            <h3 class="skil-main">Skills</h3>

            <h4 class="skil-tags"><span style="color:green">#</span>programming language</h4>
            <!---languages-->
            <p class="lang-style" v-for="language in languages" :key="language">
               {{ language }}
            </p>
            <!--framework-->
            <h4 class="skil-tags"><span style="color:green">#</span>framework</h4>
            <p class="frame-style" v-for="framework in frameworks" :key="framework">
               {{ framework }}
            </p>
            <!--storage-->
            <h4 class="skil-tags"><span style="color:green">#</span>storage</h4>
            <p class="lang-style" v-for="storage in storages" :key="storage">
               {{ storage }}
            </p><br>

            <div class="pic-icon-wrapper">
               <div class="images first">
                    <img src="@/assets/icons/html.png" alt="">
               </div>
               <div class="images second">
                    <img src="@/assets/icons/javascript.svg" alt="">
               </div>
               <div class="images third">
                    <img src="@/assets/icons/laravel.png" alt="">
               </div>
               <div class="images last">
                    <img width="50" src="@/assets/icons/vue.svg" alt="">
               </div>
             </div>
        </div>
        <div class="home-dash image-wrapper">
             <div class="home-dash__image">
                  <img src="@/assets/portfolio-icons/test-image.png" alt="">
             </div>
        </div>
       </div>    
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name:'Home',
  data(){
    return{
        firstname:'Miracool',
        stalk:'Full stack Developer',
        homeText:"let's talk about your project.",
        languages:{
          Js:'Javascript',
          php:'php',
          py: 'python',
          html:'Html',
          css:'Css',
          scss:'Scss',
        },
        frameworks:{
          vue:'Vue',
          veut:'veutify',
          nuxt: 'Nuxt',
          node: 'node js',
        },
        storages:{
          sql: 'Mysql',
          nosql: 'mongodb'
        },
    }
  }
}
</script>


<style lang="scss" scoped>

     .skil-main{
         color: #fff;
         margin-top: 2rem;
     }
    .skil-tags{
        color: #eee;
    }

    .frame-style{
         display: inline-flex;
         margin: 2px 2px ;
         padding: 4px 4px ;
         border: 2px solid #e74e3c;
         box-shadow: 0px 2px 5px rgba(56, 55, 55, 0.3) , 0px 2px 7px 5px rgba(56, 55, 55, 0.2);
         border-radius: 15px;
         margin-top: 10px;
    }

    .lang-style{
         display: inline-flex;
         margin: 2px 2px ;
         padding: 4px 4px ;
         border: 2px solid green;
         box-shadow: 0px 2px 5px rgba(56, 55, 55, 0.3) , 0px 2px 7px 5px rgba(56, 55, 55, 0.2);
         border-radius: 15px;
         margin-top: 10px;
     }
    .store-style{
         display: inline-flex;
         margin: 2px 2px ;
         padding: 4px 4px ;
         border: 2px solid blue;
         box-shadow: 0px 2px 5px rgba(56, 55, 55, 0.3) , 0px 2px 7px 5px rgba(56, 55, 55, 0.2);
         border-radius: 15px;
         margin-top: 10px;
    }

  .container{
      @media (min-width:768px){            
          background:  #156373;
          height: 600px ;
          overflow: hidden ;
      } 
      height: 100%;
      background:  #156373;
      overflow: hidden ;

      //position: relative;
      .contain{
          @media (min-width:768px) {
             position: absolute;
             top: 0px;
             display: flex;
             width: 100%;
             height: 600px ;
          } 
          display: flex;
          height: 100%;
          padding: 30px 2px ;
          
          .main-wrapper{
              @media (min-width:768px){   
                 display: flex;    
                 flex-direction: row ;
                 align-items: center;
                 justify-content: space-between ;
                 height: 600px ;
                 width: 80% ;  
                 margin: 0px auto ;
              }  
               display: flex ;
               flex-direction: column-reverse;
               align-items: center;
               height: 100%; 
               margin: -0px auto;
            }

          .home-dash{
               padding: 40px 20px;

               @media (max-width: 768px){
                    padding: 5px 20px;
               }
               
               @media (max-width: 320px){
                    width: 100%;
               }

               &__text-wrapper{
                    h1{
                        font-family: 'Roboto Mono', monospace ;
                        color: #eee;
                        font-weight: 600;
                        font-size: 45px;

                        span{
                             font-size: 20px;
                        }

                         @media (max-width: 450px){
                              font-size: 40px;
                         }
                    }


                    h4{
                         font-family:'Playfair Display', serif;
                         color: #30afc9 ;
                         padding: 5px;
                         margin-bottom: 10px;
                         background: #142e36 ;
                         max-width: 180px;
                         border-radius: 5px;
                         text-align: center;
                         font-size: 15px;
                    }

                    div{
                        font-size: 20px;
                        color: #eee;
                        font-weight: 600;

                         @media (max-width: 450px){
                              font-size: 18px;
                              margin-top: 10px;
                         }
                    }
               }

               p{
                    color: rgb(189, 183, 183);
                    margin-top: 2px;
                    font-weight: 400;
                    font-family: 'Roboto Mono', monospace;

                    @media (max-width: 450px){
                         font-size: 14px;
                    }
               }


               .pic-icon-wrapper{
                    display: inline-flex;
                    gap: 4px;
                    margin-top: 15px;

                    .images img{
                         width: 45px;
                         padding: 4px;
                    }

                    .first{
                          padding: 2px;
                          border-radius: 17px;
                          background: #081418;
                          display: flex;
                          box-shadow: 0px 2px 5px rgba(56, 55, 55, 0.3) , 0px 2px 7px 5px rgba(56, 55, 55, 0.2);
                    }

                    .second{
                          padding: 2px;
                          border-radius: 17px;
                          background: #081418;
                          display: flex ;
                    }

                    .third{
                          padding: 2px;
                          border-radius: 17px;
                          background: #081418;
                          display: flex ;
                    }

                    .last{
                          padding: 2px;     
                          border-radius: 17px;
                          background: #081418;
                          display: flex;
                    }
               }

          }

          .home-dash  .home-dash__image{
               background: #1a96af;
               border-radius: 50%;
               box-shadow: 0px 2px 7px 5px rgba(33, 94, 90, 0.544), 0px 5px 7px 5px  rgba(33, 94, 90, 0.544) , 0px 5px 7px 5px  rgba(33, 94, 90, 0.544);
               overflow: hidden;
               display: flex;
               justify-content: center;
               padding: 10px 10px 0 0;
               width: object-fit;
               height: 300px;


               @media (max-width:450px) {
                    height: 250px ;
                    max-width: 250px;
               }
               
               @media (max-width: 320px){
                     max-width: 250px;
               }

               @media (max-width: 280px){
                     max-width: 260px;
               }
          }
      }

      .icons-wrapper .images{
          padding: 10px;
          background: #081418;
          border-radius: 50%;
          width: 50px;
          display: flex ;

          &.first{
               width: 400px;
               height: 400px;
               opacity: 2;
               transform: translateY(-250px) translateX(-250px);

               img{
                    width: 80px;
               }
          }
      }

      .overlay{
           @media (min-width:768px){
              width: 100%;
              height: 600px ;
              position: absolute;
              top: 0px;
           }
           width: 100% ;
           height: 100% ;
           position: absolute ;
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

      .icons-wrapper{
          @media (min-width:768px){ 
             width: 100%;
             height: 600px;
             position: absolute;
             top: 0px;
             background: #000 ;
             transition:all .5s ease;

          &.before-enter{
               opacity: 0 ;
          }

          &.enter{
            transform: scale(1) ;
            opacity: .4 ;
          }
          }
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0px;
          background: #000;
          transition:all .5s ease;

          &.before-enter{
               opacity: 0 ;
          }

          &.enter{
            transform: scale(1) ;
            opacity: .2 ;
          }
      }
  }
</style>