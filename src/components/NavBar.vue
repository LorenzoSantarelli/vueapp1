<!--Creazione del template-->

<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav" style="width: 100%;">
        <li class="nav-item margin-left liWidth">
          <a class="nav-link active" aria-current="page" v-on:click="home()" style="float : left;"> Home </a>
        </li>
        <li class="nav-item dropdown" style="float: left; width: 115px">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Account
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown" style="width: 180px">
            <li>
          <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="black" width="18" height="18" viewBox="0 0 24 24" style="float : left; margin-top:16px">
                    <path
                        d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z" />
                </svg> -->
            <a class="dropdown-item" v-on:click="reindirizza()" style="float : left"><nobr> {{ stato }} </nobr></a>
            </li>
            <li><hr class="dropdown-divider"></li>
            <li>
            <a class="dropdown-item" v-on:click="access()"> {{ accedi }} </a>
            </li>
          </ul>
        </li>
        <li class="nav-item margin-left liWidth">
          <a class="nav-link active" v-if="auth === true" v-on:click="create()" style="float : left"> Prenota </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>




<!-- <template>
    <nav class="navbar fixed-top navbar-dark bg-primary">
        <div class="container-fluid">
            <button class="btn btn-danger logout" v-if="auth === true" v-on:click="logout()">
                Logout
            </button>
            <button class="btn btn-secondary logout accedi" v-if="auth === false" v-on:click="access()">
                Accedi
            </button>
            <button class="btn btn-secondary user-info create" v-if="auth === true" v-on:click="create()">
                Crea 
            </button>
            <button class="btn btn-primary user-info" v-on:click="reindirizza()">
                {{ stato }}
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="18" height="18" viewBox="0 0 24 24">
                    <path
                        d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z" />
                </svg>
            </button>
        </div>
    </nav>
</template> -->


<script>
// Import del file UserService
import UserService from "../Services/UserService.js";
// Dichiarazione del nome del componente e delle variabili
export default {
  name: "NavBar",
  data() {
    return {
      stato: "Registrati",
      accedi: "Logout",
      auth: false,
      asd: false,
    };
  },

  methods: {
    // Metodo di reindirizzamento
    reindirizza() {
      if (this.stato == "Registrati") {
        this.$router.replace({ name: "register" });
      } else {
        this.$router.replace({ name: "account" });
      }
    },
    // Metodo di aggiornamento della variabile stato 
    reLoad() {
      if (typeof localStorage.user == "string") {
        var nome = JSON.parse(localStorage.user);
        if (localStorage.token) {
          this.stato = nome.fullname;
          this.auth = true;
        }
      } else {
        if (!localStorage.token) {
          this.stato = "Registrati";
          UserService.logout();
          this.accedi = "Accedi";
          this.asd = false;       
        }
      }
    },
    // Metodo che reindirizza alla pagina di Login
    access() {
              if(this.asd == true){
              this.$router.replace({ name: "login" });
              }
    else{
          UserService.logout();
    //     this.accedi = "accedi";
    //     this.asd = false;        
        this.$router.replace({ name: "login" });
      }
    },
    // Metodo di logout e reindirizzamento al Login
    home(){
      this.$router.replace({name: "home"})
    },
    // Metodo che reindirizza alla pagina di creazione 
    create(){
      this.$router.replace({ name: "newBooking" });
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