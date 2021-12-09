<template>
  <div class="container">
    <div class="contain">
        <div class="home-dash">
            <div class="home-dash__text-wrapper">
                 <h4>{{ this.stalk }}</h4>
                 <h1>{{ this.firstname}}</h1>
            </div>
            <div class="home-dash__text-wrapper">
                 <div>{{ this.homeText }}</div>
            </div>
            <p>{{ this.info }}</p>
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
    <div class="overlay"></div>
    <div class="icons-wrapper">
         <div class="images first"></div>
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
        stalk:'Front-end Developer',
        homeText:'Can we talk about your project ?',
        info:'I design and code beautifully simple things , and i love what i do...'
    }
  }
}
</script>


<style lang="scss" scoped>
  .container{
      background:  #156373;

      //position: relative;
      .contain{
          position: relative; 
          display: flex;
          flex-direction: column-reverse ;
          width: 90%;
          margin: 0px auto;
          padding: 30px 2px;
          @media (min-width:768px) {
               flex-direction: row;
               justify-content: center;
               align-items: center;
               height: 500px;
               width: 80%;
          }  
          .home-dash{
               padding: 40px 10px;
               margin: 0px auto ;
               

               @media (max-width: 320px){
                    width: 100%;
               }

               &__text-wrapper{
                    h1{
                        font-family: 'Roboto Mono', monospace ;
                        color: #eee;
                        font-weight: 600;
                        font-size: 60px;

                        span{
                             font-size: 20px;
                        }

                         @media (max-width: 450px){
                              font-size: 60px;
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
                         font-size: 17px;
                    }

                    div{
                        font-size: 28px;
                        color: #eee;
                        font-weight: 600;
                        margin-top: 1em;

                         @media (max-width: 450px){
                              font-size: 22px;
                         }
                    }
               }

               p{
                    color: rgb(189, 183, 183);
                    margin-top: 1em;
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

               @media (max-width:450px) {
                    max-width: 300px;
               }
               
               @media (max-width: 320px){
                     max-width: 300px;
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
               opacity: .1;
               transform: translateY(-250px) translateX(-250px);

               img{
                    width: 80px;
               }
          }
      }

      .overlay{
           width: 100%;
           height: 500px;
           position: absolute;
           top: 0px;
      }

      .icons-wrapper{
          width: 100%;
          height: 550px;
          position: absolute;
          top: 0px;
      }
  }
</style>