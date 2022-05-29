import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faVideo,
    faClock,
    faWifiStrong,
    faRepeat,
    faComment,
    faEnvelope
} from "@fortawesome/free-solid-svg-icons";

library.add(faVideo, faClock, faWifiStrong, faRepeat, faComment, faEnvelope);



createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
