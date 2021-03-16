<!--definizione del template -->
<template>
  <div id="app">

    <NavBar v-if="auth === false" :key="componentKey" />

    <Menu v-if="auth === true" />

    <Breadcrumb v-if="auth === true" class="breadcrumb" :key="componentKey" />

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
import Breadcrumb from "./components/Breadcrumb.vue";

//definizione dei componenti footer e NavBar
export default {
  name: "App",
  components: {
    NavBar,
    Menu,
    "my-footer": MyFooter,
    Breadcrumb
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