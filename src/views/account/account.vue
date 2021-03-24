<!-- Creazione template della pagina con i dati dell'utente -->
<template>
    <div>
  <h1>Gestione account di {{username}}</h1>
  <hr>
<div class="row row-cols-1 row-cols-sm-2 row-cols-md-2">
  <div class="col-md-1"><li>{{title[0]}}: </li></div>
  <div class="col"><li> {{user[0]}}</li></div>
</div>
<div class="row row-cols-1 row-cols-sm-2 row-cols-md-">
  <div class="col-md-1"><li>{{title[1]}}: </li></div>
  <div class="col"><li> {{user[1]}}</li></div>
</div>
<div class="row row-cols-1 row-cols-sm-2 row-cols-md-">
  <div class="col-md-1"><li>{{title[2]}}: </li></div>
  <div class="col"><li> {{user[2]}}</li></div>
</div>
<div class="row row-cols-1 row-cols-sm-2 row-cols-md-">
  <div class="col-md-1"><li>{{title[3]}}: </li></div>
  <div class="col"><li> {{user[3]}}</li></div>
</div>
</div>
</template>

<!-- Import del file account.js -->
<script>
import account from './account.js';
export default account;
</script>