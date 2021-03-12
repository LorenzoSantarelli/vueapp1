<template>
<div style="padding-bottom:3%">
  <div> 
<header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
  <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" v-on:click="home()">Prenotazioni Padel</a>
  <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <ul class="navbar-nav px-3">
    <li class="nav-item text-nowrap">
      <a class="nav-link" v-on:click="logout()">Logout</a>
    </li>
  </ul>
</header>
</div>

  <div class="container-fluid">
  <div class="row" style="position: relative;top:5%;bottom:0;">
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse" style="position:fixed; left:0; right:25%">
      <div class="position-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" v-on:click="account()">
              <nobr>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z"/></svg>
                {{ user }}
              </nobr>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-on:click="home()">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"/></svg>
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-on:click="crea()">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/></svg>
              Nuova Prenotazione
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</div>
</div>
</template>

<script>
// Import del file UserService
import UserService from "../Services/UserService.js";
// Dichiarazione del nome del componente e delle variabili
export default {
  name: "Menu",
  data(){
    return{
      user: '',
      name: []
    }
  },
  methods: {
    logout(){
      UserService.logout();
      this.$root.$refs.App.authenticated();
      this.$router.replace({ name: "login" });
    },
    home(){
      this.$router.replace({ name: "home"});
    },
    account(){
      this.$router.replace({ name: "account"});
    },
    crea(){
      this.$router.replace({ name: "newBooking"});
    }
  },
  mounted(){
    this.name = JSON.parse(localStorage.user);
    this.user = this.name.fullname;
  }
}
</script>
<style scoped>
a:hover {
  cursor: pointer;
}
</style>