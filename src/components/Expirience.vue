<template>
   <div class="section">
      <h1>Skill & Experience</h1>
      <div v-scrollanimation class="underline"/>
      <div class="section-main">
         <div class="skill-section">
            <h4>My Advantages</h4>
            <div class="separate"/>
            <div class="skill-wrap">
               <div v-for="(skill , index) in skills" :key="index" class="skill-wrapper">
                  <img v-lazy="require(`@/assets/icons/${skill.img}`)">
                  <p>{{ skill.score }}%</p>
               </div>
            </div>
            <div class="flex year-exp">
               <div>
                  <h1 v-scrollanimation class="h-years">2+</h1>
                  <p>YEARS OF EXPERIENCE</p>
               </div> 
               <div>
                  <h1 v-scrollanimation class="h-years">12+</h1>
                  <p>PROJECTS COMPLETED</p>
               </div>

            </div>
         </div>
         <div class="flex custom-gap">
            <div class="box-background">
               <div class="box-wrapper">
                  <div class="box"/>
                  <div class="box"/>
               </div>
               <div class="line-height"/>
            </div>
            <div class="area">
               <div class="content-area">
                  <div class="flex">
                     <p class="table-1">2022</p><p class="table">&nbsp;-&nbsp;</p><p class="table">Present</p>
                  </div>
                  <h1>Frontend Engineer</h1>
                  <div class="flex space">
                     <p class="table">Company</p><p class="table">&nbsp;-&nbsp;&nbsp;&nbsp;</p><p class="table">Alumunite Africa</p>
                  </div>
                  <div class="flex space">
                     <p class="table">Job type</p><p class="table">&nbsp;-&nbsp;&nbsp;&nbsp;</p><p class="table">Remote</p>
                  </div>
               </div>
               <div class="content-area second">
                  <div class="flex">
                     <p class="table-1">2023 March</p><p class="table">&nbsp;-&nbsp;</p><p class="table">2023</p>
                  </div>
                  <h1>Frontend Engineer</h1>
                  <div class="flex space">
                     <p class="table">Company</p><p class="table">&nbsp;-&nbsp;&nbsp;&nbsp;</p><p class="table">Kompletecare</p>
                  </div>
                  <div class="flex space">
                     <p class="table">Job type</p><p class="table">&nbsp;-&nbsp;&nbsp;&nbsp;</p><p class="table">Remote</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   export default {
      name:'Expirience',
      data(){
         return{
            skills: [
               {
                  img:'html.png',
                  score:'92'
               },
               {
                  img:'javascript.svg',
                  score:'90'
               },
               {
                  img:'vue.svg',
                  score:'92'
               },
               {
                  img:'nextjs-icon.png',
                  score:'75'
               },
               {
                  img:'nuxt-js-icon.png',
                  score:'92'
               },
               {
                  img:'react-js-icon.png',
                  score:'85'
               }

            ]
         }
      }
   }
</script>

<style lang="scss" scoped>
   .h-years {
      &.before-enter{
            opacity: 0;
            transform: scale(1.6) ;
            transition: .5s ease-in-out all; 
      }

      &.enter{
            opacity: 1;
            transform: scale(1) ;
      }
   }

   .year-exp{
      gap: 1rem;
      
      div {
         margin-top: 2rem;
         h1 {
            font-size: 60px;
         }

         p{
            font-size: 10px;
         }
      } 
   }

   .skill-section {
      color: #225157;
      padding-top: 1rem;
      margin-bottom: 1rem;
   }

   .separate {
      margin-top: 1rem;
   }

   .section {
      height: 100%;
      width: 80%;
      margin: 0px auto;

      @media (min-width: 800px) {
         min-height: 80vh;
      }

      h1 {
         color: #225157;
         margin-bottom: 5px;
      }

      .section-main {
         display: flex;
         justify-content: space-between;
         flex-direction: column;
         gap: 4rem;

         @media (min-width: 800px) {
            flex-direction: row;
         }
      }
   }

   .skill-wrap {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
   }

   .skill-wrapper {
      padding: 1rem;
      border: 1px solid #225157;
      border-radius: 40px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;

      img {

         width: 40px;
         height: 40px;
      }

      p{
         color: #225157;
         font-weight: 600;
      }

      &:hover {
         box-shadow: 0px 3px 5px rgba(0, 0, 0, .3);
         transform: scale(1.01);
      }
   }

   .space {
      margin-top: 1rem;
   }

   .table {
      color: #215057ab;
      font-size: 13px;
   }

   .table-1{
      font-size: 13px;
      color: #21505775;
   }

   .custom-gap {
      gap: 1.5rem;
   }

   .second{
      transform: translateY(105px);
      @media (max-width: 472px) {
         transform: translateY(150px);
      }
   }

   .area{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
   }

   .content-area {
      h1 {
         color: #225157;
      }
   }

   .box-background {
      position: relative;
      width: 40px;
      display: flex;
   }

   .line-height {
      min-height: 400px;
      width: 2px;
      background: #21505775;
      left: 50%;
      position: absolute;
   }
   
   .box-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 40px;
      min-height: 190px;
   }

   .box {
      height: 15px;
      width: 15px;
      border-radius: 50%;
      background: #225157;
   }
</style>