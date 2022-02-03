<template>
     <div class="landing_page">
            <Landingpage/>
          <socials />
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
import socials from '../components/social.vue'

export default {
  name:'Home',
     components:{
          Landingpage , Projects , Overview , socials
     },
     data(){
          return{
               projects:[
                    {
                         projectName:'Triangu',
                         ProjectDesc:'Triangu is a personal blog that was built for dev development and also to keep writing about my love for technological advancement.',
                         photoName:'Triangu', 
                         stalk:'Vue.js | firebase',
                         link:"https://Triangu.ml",
                         github:"https://github.com/dev-makanju/Triangu",
                    },
                    {
                         projectName:'Task manager',
                         ProjectDesc:'This app helps all its users to magnage thier daily todos , all you have to do is create account and visit your dashboard to get started',
                         photoName:'tasks',
                         stalk:'Vue.js', 
                         link:"https://task-manager-a.netlify.app",
                         github:"https://github.com/dev-makanju/task-manager",
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
     }

     .overview{
          padding:  40px 0px;
          background:  #0b3b44 ;
          gap: 30px ;
          flex-direction: column;
          justify-content: center ;
          align-items: center;
     }
</style>
