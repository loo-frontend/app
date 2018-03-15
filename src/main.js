import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import { routes } from './routes';

import './assets/css/lib/lobipanel/lobipanel.css'
import './assets/css/separate/vendor/lobipanel.min.css'
import './assets/css/lib/jqueryui/jquery-ui.min.css'
import './assets/css/separate/pages/widgets.min.css'
import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/main.css'

import './assets/js/lib/popper/popper.min.js'
import './assets/js/lib/tether/tether.min.js'
import 'bootstrap/dist/js/bootstrap.js'
import './assets/js/lib/lobipanel/lobipanel.js'
import './assets/js/plugins.js'
import './assets/js/lib/jqueryui/jquery-ui.min.js'
import './assets/js/lib/match-height/jquery.matchHeight.js'
import './assets/js/commons.js'
import './assets/js/app.js'

Vue.use(VueRouter);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const router = new VueRouter({
    routes, 
    mode: 'history'
});

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
