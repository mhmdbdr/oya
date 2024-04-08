import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from 'split-type';
import basebtn from './components/ui/baseButton.vue'
import baseCard from './components/ui/baseCard.vue'
import baseSlide from './components/ui/baseSlide.vue'

import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLightbulb, faSun, faCommentDots, faPenNib, faServer, faMobileScreenButton,faCopyright, faAnglesRight, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
import { faWordpressSimple, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

// gsap-start

gsap.registerPlugin(ScrollTrigger); 



// gsap-end

library.add(faLightbulb, faSun, faCommentDots, faWordpressSimple, faPenNib, faServer, faMobileScreenButton, faCopyright, faAnglesRight, faTwitter, faFacebook, faInstagram, faQuoteRight)

const app = createApp(App)
app.config.globalProperties.$gsap = gsap;
app.config.globalProperties.$ScrollTrigger = ScrollTrigger;
app.config.globalProperties.$SplitType = SplitType;
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('base-button', basebtn)
app.component('base-card', baseCard)
app.component('base-slide', baseSlide)
app.use(router)
app.use(store)

app.mount('#app')
