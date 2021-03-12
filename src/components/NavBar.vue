<!--Creazione del template-->

<template>
<div style="padding-bottom:3%"> 
<header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
  <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#" v-on:click="home()">Prenotazioni Padel</a>
  <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <ul class="navbar-nav px-3">
    <li class="nav-item text-nowrap">
      <a class="nav-link" v-on:click="reindirizza()">{{ stato }}</a>
    </li>
  </ul>
</header>
</div>
</template>


<script>
// Import del file UserService
import UserService from "../Services/UserService.js";
// Dichiarazione del nome del componente e delle variabili
export default {
  name: "NavBar",
  data() {
    return {
      stato: "Registrati",
      auth: false,
    };
  },

  methods: {
    logout(){
      UserService.logout();
      this.$router.replace({ name: "login" });
    },
    home(){
      this.$router.replace({ name: "home"});
    },
    reindirizza() {
      if (this.stato == "Registrati") {
        this.$router.replace({ name: "register" });
      } else {
        this.$router.replace({ name: "login" });
      }
    },
    // Metodo di aggiornamento della variabile stato 
    reLoad() {
      if(this.$route.currentRoute.name == "login"){
        this.stato = "Registrati";
      }
      else if(this.$route.currentRoute.name == "register"){
        this.stato = "Accedi";
      }
    }
  },
  // Al mount del componente si richiama il metodo di reload
  mounted() {
    this.reLoad();
  },
};
</script>
<style scoped>
a:hover {
  cursor: pointer;
}
</style>