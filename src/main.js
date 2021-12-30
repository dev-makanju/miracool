import { createApp } from 'vue'
import './registerServiceWorker'
import router from './router'
import VueSmoothScroll from 'v-smooth-scroll'
import VueLazyLoad from 'vue3-lazyload'
import emailjs from 'emailjs-com';
import  scrollAnimation from './directives/scrollanimation'
import 'animate.css';

import App from './App.vue'


//vue-app/src/main.js
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();

createApp(App).component("font-awesome-icon" , FontAwesomeIcon).directive('scrollanimation' , scrollAnimation).use(VueSmoothScroll , {duration:400} ).use(emailjs).use(VueLazyLoad ).use(router).mount('#app');
