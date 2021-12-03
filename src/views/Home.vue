<template>
       <Landingpage/>
       <div class="project-wrapper">
             <Projects/>
       </div>
       <div class="overview">
            <Overview class="over"/>
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
}

</script>

<style lang="scss" scoped>
     .project-wrapper{
          background:  #0b3b44 ;
          padding: 40px 0px;
     }

     .overview{
          padding:  40px 0px;
          background:  #0b3b44 ;

          .over{
               margin: 0px auto;
          }
     }
</style>
