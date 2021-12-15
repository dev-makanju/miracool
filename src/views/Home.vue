<template>
        <div class="landing_page">
             <Landingpage/>
        </div>
        <div class="project-wrapper">
             <Projects/>
        </div>
        <div class="overview flex">
             <h1 style="color:green;"># <span style="color:#eee">Projects</span></h1>
            <Overview :project="project" v-for="(project , index) in projects" :key="index" />
        </div>
</template>

<script>
// @ is an alias to /src

import Landingpage from '../components/Landingpage.vue'
import Projects from '../components/Projects.vue'
import Overview from '../components/Overview.vue'

export default {
  name:'Home',
     components:{
          Landingpage , Projects , Overview
     },
     data(){
          return{
               projects:[
                    {
                         projectName:'Vanilla',
                         ProjectDesc:'vanilla is web app build for transaction base purposes,and also used for product management',
                         photoName:'building-gf93f8b712_1920', 
                         stalk:'Vue | Node | express | mongo | veutify'
                    },
                    {
                         projectName:'Vanilla',
                         ProjectDesc:'vanilla is web app build for transaction base purposes,and also used for product management',
                         photoName:'building-gf93f8b712_1920',
                         stalk:'Vue | Node | express | mongo | veutify'
                    },
                    {
                         projectName:'Vanilla',
                         ProjectDesc:'vanilla is web app build for transaction base purposes,and also used for product management',
                         photoName:'building-gf93f8b712_1920',
                         stalk:'Vue | Node | express | mongo | veutify'
                    },
               ]
          }
     },
}

</script>

<style lang="scss" scoped>

     .project-wrapper{
          background:  #0b3b44 ;
          background-image: linear-gradient( 45deg , #092f36 25% , transparent 25% ,
          transparent 75% , #092f36 75% , #092f36 ), 
          linear-gradient( -45deg , #092f36 25% , transparent 25% ,
          transparent 75% , #092f36 75% , #092f36 );
          padding: 40px 0px;
     }

     .overview{
          padding:  40px 0px;
          background:  #0b3b44 ;
          gap: 10px;
          flex-direction: column;
          justify-content: center ;
          align-items: center;
     }
</style>
