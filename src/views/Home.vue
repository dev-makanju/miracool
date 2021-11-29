<template>
  <div class="container">
    <div class="contain">
        <div class="home-dash">
            <div class="home-dash__text-wrapper">
                 <h4>{{ this.stalk }}</h4>
                 <h1>{{ this.firstname}} <span>{{ this.lastname }}</span></h1>
            </div>
            <div class="home-dash__text-wrapper">
                 <div>{{ this.homeText }}</div>
            </div>
            <p>{{ this.info }}</p>
        </div>
        <div class="home-dash image-wrapper">
             <div class="home-dash__image">
                  <img src="@/assets/portfolio-icons/test-image.png" alt="">
             </div>
        </div>
    </div>
    <div class="overlay"></div>
    <div class="icons-wrapper">
         <i></i>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name:'Home',
  data(){
    return{
        firstname:'Makanju',
        lastname:'oluwafemi',
        stalk:'Front-end Developer',
        homeText:'Can We talk about your project ?',
        info:'i design and code beautifully simple things , and i love what i do...'
    }
  }
}
</script>


<style lang="scss" scoped>
  .container{
      background:  #156373;
      //position: relative;
      .contain{
          display: flex;
          flex-direction: column-reverse ;
          width: 100%;
          margin: 0px auto;
          padding: 30px 2px;
          @media (min-width:768px) {
               flex-direction: row;
               justify-content: center;
               align-items: center;
          }  
          .home-dash{
               padding: 40px 10px;
               margin: 0px auto;
               &__text-wrapper{
                    h1{
                        font-family:'Montserrat', sans-serif;
                        color: #eee;
                        font-weight: 600;

                        span{
                             font-size: 22px;
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
                    }

                    div{
                        font-size: 28px;
                        color: #eee;
                        font-weight: 600;
                        margin-top: 1em;
                    }
               }

               p{
                    color: #081418;
                    margin-top: 1em;
                    font-weight: 400;
               }

          }  

          .home-dash  .home-dash__image{
               background: #1a96af;
               border-radius: 50%;
               box-shadow: 0px 2px 7px 5px rgba(33, 94, 90, 0.544), 0px 5px 7px 5px  rgba(33, 94, 90, 0.544) , 0px 5px 7px 5px  rgba(33, 94, 90, 0.544);
               overflow: hidden;
          }
      }
  }
</style>