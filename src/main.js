import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faMoon,
    faArrowLeftLong,
    faTriangleExclamation,
    faVideo,
    faClock,
    faWifiStrong,
    faRepeat,
} from "@fortawesome/free-solid-svg-icons";

library.add(faMoon, faArrowLeftLong, faTriangleExclamation, faVideo, faClock, faWifiStrong, faRepeat);



createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
