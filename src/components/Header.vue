<template>
    <header>
         <div class="nav-1">
               <div class="nav-2 titles">
                    <h1>{{ this.Firstname }}</h1>
               </div>
               <div class="nav-2 titles">
                    <Hamburger @close-nav="isToggleNavigation"/>
               </div>
         </div>
            <div class="mobile-navbar">
             <div class="background__main"> 
                 <div>
                    <transition name="first-anime">
                        <div class="background-div"  v-if="NavActive"></div> 
                    </transition>  
                 </div>
                 <div>
                     <transition name="second-anime">
                         <div class="background-div" v-if="NavActive"></div>
                     </transition>
                 </div>
                 <div>
                    <transition name="third-anime">
                        <div class="background-div" v-if="NavActive"></div>
                    </transition> 
                 </div>
                 <div>
                    <transition name="fourth-anime">
                       <div class="background-div" v-if="NavActive"></div>
                    </transition>
                 </div>            
             </div>
             <div class="nav-text-overlay" id="overlay">
                <ul class="nav links">
                   <li>Home</li>
                   <li>Works</li>
                   <li>Projects</li>
                   <li>Contact</li>
                </ul>  
                <div class="social__buttons">
                   <ul class="social links">
                      <li>GH</li>
                      <li>TW</li>
                      <li>PB</li>
                  </ul>
                </div>     
             </div>  
           </div>
    </header>        
</template>

<script>
    import Hamburger from './Hamburger.vue'
    export default {
        name:'Header',
        components:{
            Hamburger
        },
        data(){
            return{
                Firstname:'Miracool',
                NavActive: null,
            }
        },
        created(){
            
        },
        methods:{
            isToggleNavigation(){
                this.NavActive = !this.NavActive
                const overlay = document.getElementById("overlay");
                if(this.NavActive){
                    overlay.className = 'nav-text-overlay open'
                }else{
                    overlay.className = 'nav-text-overlay leave' 
                }
                return;
            },
            addOverlayClass(){
                console.log(this.NavActive)
            }
        },
    }
</script>

<style lang="scss" scoped>

header{
    position: relative;
    background:#156373;

    .nav-1{
         width: 85%;    
         margin: 0px auto;
         display: flex ;
         justify-content: space-between;
         align-items: center;

         @media (min-width: 768px){
             width: 80%;
         }
    }

    .nav-2.titles h1{
        color: #eeee;
        font-family: 'Montserrat', sans-serif;
        span{
            font-size: 20px;
        }
    }

    .mobile-navbar{
        position: absolute;
        inset: 0px;
        display: flex;
        height: 100vh;
        width: 100vw ;
        justify-content: center ;
        align-items: center ;
        flex-direction: column ;
        overflow: hidden ;
        z-index: 11;

        li{
            list-style-type: none;
            padding: 20px 40px;
            cursor: pointer;
            font-weight: 600 ;
            font-size: 25px;
            font-family: 'Montserrat', sans-serif;
            color: #eee;

            &:hover{
                color: #156373;
            }
        }

        .background__main{
            display: flex;
            flex-direction:row ;
            width: 100vw;   

            div{
                height: 100vh;
                flex: 1;
            }

            .background-div{
                flex: 1;
                box-shadow: 0px 2px 5px rgba(110, 108, 108, 0.3) , 0px 2px 5px rgba(110, 108, 108, 0.3);
                height: 100vh;
                background: #071013;
            }
        }

        .nav-text-overlay{
            position: absolute;
            z-index: 11; 
            inset: 0;
            display: flex;
            flex-direction: column;
            justify-content:center;
            align-items: center;
            opacity: 0;
            transition: all .6s ease;

            &.open{
                 animation: slide-in 3s ease; 
                 opacity: 7;  
            }

            &.leave{
                 animation: slide-out 1s ease forwards; 
                 opacity: 7;  
            }

            @keyframes slide-in{
                0%{
                    transform: translateX(-1400px);
                }
                100%{
                    transform: translateX(0px);
                }
            }

            @keyframes slide-out{
                0%{
                    transform: translateX(0px);
                }
                100%{
                    transform: translateX(1400px);
                    opacity: 0;
                }
            }

            .social__buttons .social{
                display: flex;
                margin-top: 20px;
        
               li{
                    padding: 10px 5px;
                    border-radius: 27px;
                    background: #156373;
                    margin: 20px;
                    box-shadow: 0px 2px 5px rgba(56, 55, 55, 0.3) , 0px 2px 7px 5px rgba(56, 55, 55, 0.2);
                }
            }
        }
    }

    .first-anime-enter-active,
    .first-anime-leave-active{
        transition: all 1s ease ;
    }

    .first-anime-enter-from{
        transform: translateY(-1200px);
    }

    .first-anime-enter-to{
        transform: translateY(0px);
    }

    .first-anime-leave-to{
        transform: translateY(-1200px);
    }
    /**second ilteration***/
    .second-anime-enter-active,
    .second-anime-leave-active{
        transition: all 2s ease ;
    }

    .second-anime-enter-from{
        transform: translateY(-1200px);
    }

    .second-anime-enter-to{
        transform: translateY(0px);
    }

    .second-anime-leave-to{
        transform: translateY(-1200px);
    }

    /**third ilteration**/
    .third-anime-enter-active,
    .third-anime-leave-active{
        transition: all 3s ease ;
    }

    .third-anime-enter-from{
        transform: translateY(-1200px);
    }

    .third-anime-enter-to{
        transform: translateY(0px);
    }

    .third-anime-leave-to{
        transform: translateY(-1200px);
    }
    /**fourth iltration**/
    .fourth-anime-enter-active,
    .fourth-anime-leave-active{
        transition: all 4s ease;
    }

    .fourth-anime-enter-from{
        transform: translateY(-1200px);
    }

    .fourth-anime-enter-to{
        transform: translateY(0px);
    }

    .fourth-anime-leave-to{
        transform: translateY(-1200px);
    }
}

</style>