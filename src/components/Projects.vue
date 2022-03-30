<template>
        <div class="objectives__goals txt">
                <h1>{{ this.goal }}</h1>
                <p>Bring your imagination to life...</p>
        </div> 
        <div class="objectives__goals flex">
                        <div class="objectives__goals aim">
                           <div class="objectives__goals wrapper">
                                  <ul class="header__icon">
                                        <li><font-awesome-icon :icon="['fas' , 'edit']"/></li>
                                        <li><font-awesome-icon :icon="['fas' , 'user-edit']"/></li>
                                        <li><font-awesome-icon :icon="['far' , 'calendar-times']"/></li>
                                        <li><font-awesome-icon :icon="['fas' , 'underline']"/></li>
                                        <li><font-awesome-icon :icon="['fas' , 'paragraph']"/></li>
                                        <li><font-awesome-icon :icon="['fas' , 'pencil-alt']"/></li>
                                  </ul>
                                  <div class="content-wrapper">
                                        <div class="text-content position">
                                            <h3>{{ this.text }}</h3>
                                            <div class="overlay-anime"></div>
                                        </div>
                                  </div>
                            </div>
                       </div>
                       <div class="objectives__goals wrapper">
                            <div class="center__landing_page flex">
                                <div class="center__landing_page page flex">
                                   
                                        <BreadcrumbItem>
                                            <a class="tar_link_resume" href="/files/makanju.pdf" download="Makanju-Oluwafemi">
                                                <div class="first_c flex">
                                                     <h3>Resume</h3>
                                                </div> 
                                            </a>
                                         </BreadcrumbItem>
                                   
                                </div>
                                <div class="center__landing_page page flex image-pix">
                                       <img class="hand" v-lazy="require(`@/assets/portfolio-icons/Femfinger.png`)" alt="">                                    
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
                                  <div class="inner-text">
                                        <img class="code-image" v-lazy="require(`@/assets/portfolio-icons/code-image.png`)" alt="">
                                  </div>
                               </div>
                           </div> 
                    </div>
            </div>
</template>

<script>

    export default {
        name:'Projects',
        data(){
            return{
                goal:"Let's talk about your project </>",
                text:'Amazing Landing Page'
            }
        
    }
        }
</script>

<style lang="scss" scoped>

.code-image{
    object-fit: cover ;
    width: 100%;
    height: 250px;
}

.position{
    position: relative;
}


.objectives{

    &__goals{
        justify-content: center ;
        flex-direction: column;
        align-items: center;
        gap: 4px ;
        color:rgb(50, 231, 213);
        overflow: hidden;

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
                padding: 20px 3px;
                font-size: 10px;
                font-weight: 400;
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
                box-shadow: 0 0 5px 10px hsl(129, 30%, 54% , .3),0 0 5px 15px hsl(92, 82%, 22% , .3);
                justify-content: center;
                align-items: center;
                z-index: 2 ;
                cursor: pointer ;
                
                

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
                 color: rgb(49, 47, 47);
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

.tar_link_resume{
    text-decoration: none;
    color: #eeee;
}
</style>    