<template>
     <div class="landing_page">
         <Landingpage />
         <socials />
     </div>
     <div class="project-wrapper">
         <Projects/>
     </div>

     <div class="overview flex">
          <h1 style="color:green;"># <span style="color:#eee">Projects</span></h1>
          <Overview :project="project" v-for="(project , index) in projects" :key="index"/>
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
                         projectName:'Gooble',
                         ProjectDesc:'Gobble is a food ordering app , Features: cart system , checkout with modal pop up , landing page slider , sorting cart items... its built with a node js backend also has an admin panel, with a paystack payment integration.',
                         photoName:'goble',
                         stalk:'Vue.js', 
                         link:"https://goble.netlify.app",
                         github:"https://github.com/dev-makanju/Gobble",
                    },
                    {
                         projectName:'Exhnge',
                         ProjectDesc:'Implementing a quality design comes with great vision and quality way of making a pixel perfect design.. This is why i worked on the web3 landing page design. paying close attention to design rules',
                         photoName:'exhnge',
                         stalk:'Vue.js , Tailwind', 
                         link:"https://exhnge.netlify.app",
                         github:"https://github.com/dev-makanju/Web_3_landing_page",
                    },
                    {
                         projectName:'Task manager',
                         ProjectDesc:'This app helps all its users to magnage thier daily todos , all you have to do is create account and visit your dashboard to get started',
                         photoName:'tasks',
                         stalk:'Vue.js', 
                         link:"https://task-manager-a.netlify.app",
                         github:"https://github.com/dev-makanju/task-manager",
                    },
                    {
                         projectName:'Triangu',
                         ProjectDesc:'Triangu is a personal blog that was built for dev development and also to keep writing about my love for technological advancement.(outdated)',
                         photoName:'Triangu', 
                         stalk:'Vue.js | firebase',
                         link:"https://Triangu.ml",
                         github:"https://github.com/dev-makanju/Triangu",
                    },
               ]
          }
     },
}

</script>

<style lang="scss" scoped>
     .project-wrapper {
          width: 80%;
          margin: 0px auto;
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
