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
         <transition name="drop-down">
            <div class="mobile-navbar" v-if="NavActive">
             <div class="background__main">                
                <div class="background-div"></div>
                <div class="background-div"></div>
                <div class="background-div"></div>
                <div class="background-div"></div>
             </div>
             <div class="nav-text-overlay">
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
         </transition>
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
        methods:{
            isToggleNavigation(){
                this.NavActive = !this.NavActive
            }
        }    
    }
</script>

<style lang="scss" scoped>

header{
    position: relative ;
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
}

</style>