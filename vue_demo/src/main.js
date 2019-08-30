// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import VueAxios  from 'vue-axios'
// import VueResource from 'vue-resource'
import VueRouter from "vue-router";
// import VueVideoPlayer from 'vue-video-player'

// require videojs style
import 'video.js/dist/video-js.css'
// import 'vue-video-player/src/custom-theme.css'

import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(VueRouter);
Vue.use(iView);

// Vue.use(VueVideoPlayer, /* {
//   options: global default options,
//   events: global videojs events
// } */)

Vue.config.productionTip = false
Vue.use(VueAxios,axios)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
