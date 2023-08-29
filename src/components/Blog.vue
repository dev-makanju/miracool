<template>
   <Carousel v-bind="settings" :breakpoints="breakpoints">
      <Slide v-for="(project , index) in projects" :key="index">
         <div class="carousel__item">
            <Slider :project="project"/>
         </div>
      </Slide>

      <template #addons>
         <Navigation />
      </template>
   </Carousel>
</template>

<script>
   import 'vue3-carousel/dist/carousel.css';
   import { Carousel, Slide,  Navigation } from 'vue3-carousel';
   import Slider from '../components/Slider.vue'

   export default {
      name:'Blog.vue',
      components: {
         Carousel,
         Slide,
         Slider,
         Navigation,
      },
      data(){
         return {
            projects:[
               {
                     projectName:'Vue Made Easy: Introduction.',
                     photoName:'crs',
                     link:'https://dev.to/miracool/vue-made-easy-introduction-1dec',
               },
               {
                     projectName:'Part 2: Understanding Vuex: A State Management Library.',
                     photoName:'crs', 
                     link:'https://dev.to/miracool/part-2-understanding-vuex-a-state-management-library-5fop'
               },
               {
                     projectName:'Part 3(a): How to Build a Self-Contained Component',
                     photoName:'crs',
                     link:'https://dev.to/miracool/part-3a-how-to-build-a-self-contained-component-2i7i'
               },
               {
                     projectName:'Part 4 (a): Project: How to Build a To-do App with Vue.Js',
                     photoName:'crs',
                     link:'https://dev.to/miracool/part-4-a-project-how-to-build-a-mini-app-with-vuejs-3nc2',
               },
               {
                     projectName:'Part 4 (b): How to Build a To-Do App with Vue Js: Creating Reusable UI',
                     photoName:'crs',
                     link:'https://dev.to/miracool/part-4-b-how-to-build-a-to-do-app-with-vue-js-creating-reusable-ui-5en8'
               },
            ],
            settings: {
               itemsToShow: 1,
               snapAlign: 'center',
            },
            breakpoints: {
               // 700px and up
               700: {
               itemsToShow: 3.5,
               snapAlign: 'center',
               },
               // 1024 and up
               1024: {
               itemsToShow: 5,
               snapAlign: 'start',
               },
            },
         }
      },
      methods: {
         
      }
   }
</script>

<style lang="scss" scoped>
.carousel__item {
  min-height: 300px;
  width: 100%;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, .3);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

</style>