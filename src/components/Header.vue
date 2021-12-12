    <template>
    <header>
         <div class="nav-1">
               <div class="nav-2 titles">
                    <img src="@/assets/portfolio-icons/miracool-logo-removebg-preview.png" width="80" alt="">
               </div>
               <div class="nav-2 titles">
                    <Hamburger :isClickedNavbar="isClickedNavbar" @close-nav="isToggleNavigation"/>
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
             <div :class="['nav-text-overlay' , isToggleNavbar ? 'open' : 'leave']" >
                <ul class="nav links">
                    <li @click="close"><router-link class="links" :to="{name:'Home'}">Home</router-link>
                </li>
                    <li>
                        <a class="links" href="#sec-project" v-smooth-scroll>project</a>
                    </li>
                    <li @click="close"> 
                        <router-link class="links" :to="{name:'Contact'}">Contact</router-link> 
                    </li>
                </ul>  
                <div class="social__buttons">
                   <ul class="social links">
                      <li>
                            <BreadcrumbItem>
                                <a class="tar_link" href="https://github.com/dev-makanju" target="__blank" >
                                    <font-awesome-icon :icon="['fab' , 'github']"/>
                                </a>
                            </BreadcrumbItem>
                      </li>
                      <li>
                            <BreadcrumbItem>
                                <a class="tar_link" href="https://twitter.com/mira_code" target="__blank" >
                                    <font-awesome-icon :icon="['fab' , 'twitter']"/>
                                </a>
                            </BreadcrumbItem>
                      </li>
                      <li>
                            <BreadcrumbItem>
                                <a class="tar_link" href="https://www.linkedin.com/in/makanju-oluwafemi-emmanuel-2060bb184/" target="__blank">
                                    <font-awesome-icon :icon="['fab' , 'linkedin-in']"/>
                                </a>
                            </BreadcrumbItem>
                      </li>
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
                Firstname:'M',
                NavActive: null,
                isToggleNavbar: null,
            }
        },
        methods:{
            isToggleNavigation(){
                this.NavActive = !this.NavActive
                this.isToggleNavbar = !this.isToggleNavbar
            },
            close(){
                this.isToggleNavigation()
            },
        },
        watch:{
            NavActive: function(){
                if(this.NavActive){
                     document.documentElement.style.overflow = 'hidden'  
                }else{
                     document.documentElement.style.overflow = 'auto'
                }
                return;
            },
        },
    }
</script>

<style lang="scss" scoped>

header{
    position: relative;
    background:#156373;
    width: 100%;

    .nav-1{
         width: 90% ;    
         margin: 0px auto ;
         display: flex ;
         justify-content: space-between;
         align-items: center;

         @media (min-width:768px){
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
        width: 100%;
        justify-content: center ;
        align-items: center ;
        flex-direction: column ;
        overflow: hidden ;
        z-index: 11;

        li{
            list-style-type: none;
            padding: 20px 40px ;
            cursor: pointer;
            font-weight: 600 ;
            font-size: 20px;
            font-family: 'Abril Fatface', cursive ;
            color: #eee;

            a{
                color: #fff;
            }

            &:hover{
                color: #156373;
            }

            .links{
                text-decoration: none;
                color: #eee;

                &:hover{
                    color:#0c2f36;
                }
            }
        }

        .background__main{
            display: flex;
            flex-direction:row ;
            width: 100%;   

            div{
                height: 100vh;
                flex: 1;
            }

            .background-div{
                flex: 1;
                box-shadow: 0px 0px .2px .1px rgba(110, 108, 108, 0.3) ;
                height: 100vh;
                background-color: #071013;
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
            transition: all .6s ease ;

            &.open{
                 animation: slide-in 1.3s ease; 
                 opacity: 7;  
            }

            &.leave{
                 animation: slide-out 1s ease forwards; 
                 opacity: 7;  
            }

            @keyframes slide-in{
                0%{
                    transform: translateX(-1200px);
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
        transition: all .5s ease ;
    }

    .first-anime-enter-from{
        transform: translateY(-1400px);
    }

    .first-anime-enter-to{
        transform: translateY(0px);
    }

    .first-anime-leave-to{
        transform: translateY(-1400px);
    }
    
    /**second ilteration***/
    .second-anime-enter-active,
    .second-anime-leave-active{
        transition: all 1s ease ;
    }

    .second-anime-enter-from{
        transform: translateY(-1400px);
    }

    .second-anime-enter-to{
        transform: translateY(0px);
    }

    .second-anime-leave-to{
        transform: translateY(-1400px);
    }

    /**third ilteration**/
    .third-anime-enter-active,
    .third-anime-leave-active{
        transition: all 1.5s ease ;
    }

    .third-anime-enter-from{
        transform: translateY(-1400px);
    }

    .third-anime-enter-to{
        transform: translateY(0px);
    }

    .third-anime-leave-to{
        transform: translateY(-1400px);
    }
    /**fourth iltration**/
    .fourth-anime-enter-active,
    .fourth-anime-leave-active{
        transition: all 2s ease;
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