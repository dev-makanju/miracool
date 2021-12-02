<template>
  <div class="container">
       <Landingpage/>
       <div class="project-wrapper">
             <Projects/>
       </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Landingpage from '../components/Landingpage.vue'
import Projects from '../components/Projects.vue'
//import Overview from '../components/Overview.vue'

export default {
  name:'Home',
  components:{
       Landingpage , Projects 
  },
}

</script>

<style lang="scss" scoped>
     .project-wrapper{
          background:  #0b3b44 ;
          position: relative;
          padding: 30px 0px;
     }
</style>
