<template>
            <div class="objectives__goals txt">
                  <h1>{{ this.goal }}</h1>
                  <p>Bring your imagination to life...</p>
            </div> 
            <div class="objectives__goals flex">
                        <div class="objectives__goals aim">
                           <div class="objectives__goals wrapper">
                                  <ul class="header__icon">
                                        <li><i class="">A</i></li>
                                        <li><i class="">B</i></li>
                                        <li><i class="">C</i></li>
                                        <li><i class="">D</i></li>
                                        <li><i class="">F</i></li>
                                        <li><i class="">H</i></li>
                                  </ul>
                                  <div class="content-wrapper">
                                        <div class="text-content flex">
                                            <h3>{{ this.text }}</h3>
                                        </div>
                                  </div>
                            </div>
                       </div>
                       <div class="objectives__goals wrapper">
                            <div class="center__landing_page flex">
                                <div class="center__landing_page page flex">
                                   <div class="first_c flex">
                                        <h3>Resume</h3>
                                   </div>
                                </div>
                                <div class="center__landing_page page flex image-pix">
                                       <img class="hand" src="@/assets/portfolio-icons/Femfinger.png" alt="">                                    
                                </div>
                            </div>
                       </div>
                       <div class="objectives__goals wrapper">
                            <div class="objectives__goals idea">
                                <div class="objectives__goals aim">
                                  <ul class="header__icon">
                                      <div class="icon flex">
                                        <div class="button"></div>
                                        <div class="button"></div>
                                        <div class="button"></div>
                                      </div>
                                  </ul>
                               </div>
                           </div> 
                    </div>
            </div>
</template>

<script>

    export default {
        name:'Projects',
        components:{
           
        },
        data(){
            return{
                goal:'Convert your idea to code </>',
                text:'Amazing Landing Page'
            }
        
    }
        }
</script>

<style lang="scss" scoped>

.objectives{

    &__goals{
        justify-content: center ;
        flex-direction: column;
        align-items: center;
        gap: 4px ;
        color:rgb(50, 231, 213);

        @media (min-width: 768px) {
            flex-direction: row ;
        }

        &.txt{
            margin: 0px auto;
            display : flex;
            flex-direction: column;

            padding: 50px 0px;
            color: #ffffff;

            @media (max-width:500px) {
                padding: 20px 10px;
                font-size: 16px;
                font-weight: 600;
            }
        }

        .center__landing_page{
            width: 350px;
            height: 250px;
            justify-content: center;
            transition: transform .5s ;
            gap: 6px;
            overflow: hidden ;

            @media (min-width:768px){
                width: 350px;
                height: 600px;
            }

            .hand{
                width: 100px ;
                animation: zoom-zoom 5s ease-in-out infinite ;

                @keyframes zoom-zoom {
                    0%{
                       transform: scale(1 , 1);
                    }
                    50%{
                        transform: scale(.8 , .8);   
                    }
                    100%{
                        transform: scale(1 , 1);
                    }
                }
 
                @media (max-width:500px ) {
                    transform: rotate(180deg); 
                }
            }

            @media(min-width:768px){
                flex-direction: column ;
            }

            .page{
                justify-content: center ;
                align-items: center;
            }

            .first_c{
                width: 100px;
                height: 100px;      
                box-shadow: 0px 2px 5px rgba(0 , 0 , 0 , 3 );
                border-radius: 50%;
                background: green;
                box-shadow: 0 0 5px 10px hsl(129, 30%, 54% , .3),0 0 5px 15px hsl(92, 82%, 22% , .3);;
                justify-content: center;
                align-items: center;
                
                h3{
                    padding: 10px;
                }
            }
        }

        &.aim{
            max-width: 250px;
            background: #156373;
            border: 1px solid #156373;
            width: 350px;
            height: 250px;
            box-shadow:  inset 5px 5px 10px #09333b, 
              inset -5px -5px 10px #09333b;
            border-radius: 10px ;
            overflow: hidden ;

            .content-wrapper{
                padding: 40px 0px;
            }

            .header__icon{
                display: flex ;
                inset: 0px ;
                margin: 0px auto;
                background: #ffffff;
              
               .icon{
                   padding: 10px ;
                   gap: 2px;
               }

              & .button{
                  width: 10px;
                  height: 10px ;
                  background: rgb(13, 99, 13) ;
                  border-radius: 50% ;
              }  

              & li{
                 list-style-type: none;
                 width: 45px;
                 padding: 5px;
              }
            }

            .text-content{
                justify-content: center;
                align-items: center;
                margin: 0px auto ;
                border: 2px solid #eee;
                border-radius: 4px;
                padding: 30px 5px ;
                width: 150px ;

                h3{
                    color: #eee;
                    text-align: center ;
                }
            }
        }
    }
}


.image-pix{
    @media (max-width: 450px) {
        transform: rotate(280deg);   
    }
}
</style>    