<template>
     <div class="landing_page">
         <Landingpage />
         <socials />
     </div>
     <div class="project-wrapper"> 
         <Projects/>
     </div>
     <div class="blog-wrapper">
         <div class="title">
             <h1 class="text-wrapper">My Blog</h1>
             <div v-scrollanimation class="underline"/>
          </div>   
        <Blog/>
     </div>
     <div class="">
        <Expirience/>
     </div>
     <div class="flex flex-col align-items p-portfolio"> 
          <div>
             <h1 class="text-wrapper">My Portfolio</h1>
             <div v-scrollanimation class="underline"/>
          </div> 
     </div>
     <div class="my-portfolio">
          <Overview :project="project" v-for="(project , index) in projects" :key="index"/>
     </div>
     <PwaInstall/>
</template>

<script>
// @ is an alias to /src
import Landingpage from '../components/Landingpage.vue'
import Projects from '../components/Projects.vue'
import Overview from '../components/Overview.vue'
import socials from '../components/social.vue'
import Expirience from '../components/Expirience.vue'
import PwaInstall from '../components/PwaInstall.vue'
import Blog from '../components/Blog.vue';

export default {
  name:'Home',
     components:{
          Blog,
          Landingpage, 
          Projects, 
          Overview, 
          socials,
          Expirience,
          PwaInstall
     },
     data(){
          return{
               projects:[
                    {
                         projectName:'ProtektMe',
                         ProjectDesc:"ProtektMe is a forum app, that was built with vue.js on the frontend and nodejs on the backend. user can comment add, and also share post to all social media platform with this app.",
                         photoName:'pkme',
                         stalk:'Vue.Js, Vuex, Node.js, mongoDb', 
                         link:"https://master-project-01.netlify.app/",
                         github:"https://github.com/dev-makanju/project-A",
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
                         projectName:'Gooble',
                         ProjectDesc:'Gobble is a food ordering app , Features: cart system , checkout with modal pop up , landing page slider , sorting cart items... its built with a node js backend also has an admin panel, with a paystack payment integration.',
                         photoName:'goble',
                         stalk:'Vue.js', 
                         link:"https://goble.netlify.app",
                         github:"https://github.com/dev-makanju/Gobble",
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

     .blog-wrapper {
          height: 80vh;
          padding: 0px 3rem;

          @media (max-width: 450px) {
             padding: 0px 1rem;
             height: 65vh;
          }

          & .title {
               margin-bottom: 1rem;
          }
     }

     .overview{
          padding:  40px 0px;
          background:  #0b3b44 ;
          gap: 30px ;
          flex-direction: column;
          justify-content: center ;
          align-items: center;
     }

     .my-portfolio {
          padding-top: 2.5rem;
          padding-bottom: 6rem;
          width: 80%;
          margin: 0px auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px , 1fr));
          grid-gap: 2em;
     }

     .p-portfolio {
          @media (max-width: 800px) {
               margin-top: 13rem;
          }
     }

     .text-wrapper {
         font-size: 40px;
         font-weight: bold;
         color: #0b3b44;
         margin-bottom: 4px;
     }

</style>
