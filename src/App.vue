<!--definizione del template -->
<template>
  <div>

    <NavBar v-if="auth === false" :key="componentKey" />

    <Menu v-if="auth === true" />

    <Breadcrumbs v-if="auth === true" class="view" />

    <router-view v-if="auth === false" />

    <router-view v-if="auth === true" class="view" />

    <my-footer />
  </div>
</template>

<script>
//import dei componenti footer e NavBar 
import NavBar from "./components/NavBar.vue";
import MyFooter from "./components/MyFooter.vue";
import Menu from "./components/Menu.vue";
import Vue from 'vue';
import VueBreadcrumbs from 'vue-2-breadcrumbs';
Vue.use(VueBreadcrumbs);

//definizione dei componenti footer e NavBar
export default {
  name: "App",
  components: {
    NavBar,
    Menu,
    "my-footer": MyFooter
  },
  data() {
    return {
      componentKey: 0,
      auth: false
    };
  },
  //metodo per refreshare il componente NavBar 
  methods: {
    forceRerender() {
      this.componentKey += 1;
    },
    authenticated(){
      if(localStorage.token){
        this.auth = true;
      }
      else if(!localStorage.token){
        this.auth = false;
      }
    },
  },
  mounted(){
    this.authenticated();
  },
  //metodo per acquisire il riferimento della root nella quale si trova l'applicazione
  created() {
    this.$root.$refs.App = this;
  },
};
</script>