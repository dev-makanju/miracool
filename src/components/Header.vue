<template>
    <header>
        <div class="nav-1">
               <div class="nav-2 titles">
                    <img src="@/assets/portfolio-icons/miracool-logo-removebg-preview.png" width="80" alt="">
               </div>
               <div class="nav-2 titles">
                    <div @click="isToggleNavbarIcon" :class="['menu-wrapper', isClickedNavIcon ? ' open' : '']" id="navbar">
                        <div class="menu-burger"></div>
                        <div class="menu-burger"></div>
                        <div class="menu-burger"></div>
                    </div>
               </div>
        </div>
            <div :class="['mobile-navbar',NavActive ? 'open' : '' ]">
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
             <div :class="['nav-text-overlay' , NavActive ? 'open' : 'leave']">
                <ul class="nav links">
                    <li @click="close"><router-link class="links" :to="{name:'Home'}">Home</router-link>
                </li>
                    <li @click="close" v-if="isProjectVisble">
                        <a class="links"  href="#project" v-smooth-scroll>project</a>
                    </li>
                    <li @click="close"> 
                        <a class="links"  href="#about" v-smooth-scroll>About</a> 
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
                                <a class="tar_link" href="https://twitter.com/_miracode" target="__blank" >
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

    export default {
        name:'Header',
        components:{
           //
        },
        data(){
            return{
                NavActive: null,
                isToggleNavbar: null,
                isClickedNavIcon:null,
                isProjectVisble:null,
            }
        },
        methods:{
            isToggleNavbarIcon(){
                this.NavActive = !this.NavActive
                this.isNavActive = !this.isNavActive
                this.isClickedNavIcon = !this.isClickedNavIcon
            },
            close(){
                this.isToggleNavbarIcon()
            },
            returnNavbarState(){
                this.isClickedNavIcon = !this.isClickedNavIcon
            },
            checkRoute(){
                if(this.$route.name === "Contact" || this.$route.name === "About"){
                    this.isProjectVisble = false
                    return;
                }this.isProjectVisble = true
            }
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
            $route(){
                this.checkRoute();
            }
        },
    }
</script>

<style lang="scss" scoped>

header{
    background: #225157;
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


    .mobile-navbar{
        position: absolute;
        inset: 0px;
        transform: translateY(-1200px);
        display: flex;
        height: 100vh;
        width: 100%;
        justify-content: center ;
        align-items: center ;
        flex-direction: column ;
        overflow: hidden ;
        z-index: 11;
        transition: .9s ease-in-out ;
        
        &.open{
            transform: translateY(0px);
        }

        li{
            list-style-type: none;
            padding: 20px 40px ;
            cursor: pointer;
            font-weight: 600;
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
                color: #156373;
                font-weight: bold;

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
                background: #fff;
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



/**Navbar***/
.menu-wrapper{
    position: relative;
    cursor: pointer ;
    width: 50px;
    height: 50px;
    display: flex ;
    justify-content: center ;
    flex-direction: column ;
    align-items: flex-end;
    z-index: 111;


    @media (min-width: 800px){
        max-width: 50px;
    }

    .menu-burger{
        width: 35px;
        height: 4px;
        border: 3px solid #eeee;
        border-radius: 3px;
        margin: 2px ;
        transition: all .3s ease;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, .3);

        @media (min-width: 800px){
             min-width: 35px;
        }

        &:nth-child(1){
            width: 45px;

            @media (min-width: 800px) {
                min-width: 45px;
            }
        }

        &:last-child{
            width: 25px;

            @media (min-width: 800px) {
                 min-width: 25px;
            }
        }
    }

    /*****this is at the bottom to override the style*****/
    /****when user click the navbar button****/

    &.open :nth-child(even){
        opacity: 0;
        margin-right: -10px;    
    }

    &.open :first-child{
        width: 45px;
        transform: rotateZ(-405deg) translate(-13px);
    }

    &.open :last-child{
        width: 45px;
        transform: rotateZ(405deg)  translate(-13px);
    }
}
</style>