import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {MotionPlugin} from '@vueuse/motion'

library.add(faCodeCompare, faArrowUpRightFromSquare, faSpinner);

createApp(App).use(MotionPlugin).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

