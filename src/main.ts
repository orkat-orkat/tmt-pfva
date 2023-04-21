import { createApp } from "vue";
import './style.css'
import App from "./App.vue";
import router from "./router";

//ここから追加
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

//Add all icons to the library so you can use it in your page
library.add(fas, fab)

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



createApp(App)
    .component("FontAwesomeIcon", FontAwesomeIcon)
    .use(router)
    .mount("#app");
