// Import del framework vue e delle varie librerie
import Vue from 'vue';       
import App from './App.vue';  
import router from './router'; 
import axios from 'axios';    
import './style.css'    
import moment from 'moment';    
import { Datetime } from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Vuelidate from 'vuelidate';

// Uso di vuelidate
Vue.use(Vuelidate)

// Uso di date time
Vue.use(Datetime)  

// Uso di Bootstrap Vue
Vue.use(BootstrapVue);


// Setup axios 
axios.defaults.withCredentials = true 
axios.defaults.baseURL = 'https://gabbyblog.herokuapp.com/'

// Metodo di formattazione delle date
Vue.component('datetime', Datetime);
Vue.filter('formatDate', function(value){ 
    if(value){
        return moment(String(value)).format('DD/MM/YYYY hh:mm')
    }
})

// Creazione vue
Vue.config.productionTip = false
Vue.prototype.bus = new Vue()    
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')