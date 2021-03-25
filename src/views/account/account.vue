<!-- Creazione template della pagina con i dati dell'utente -->
<template>
    <div>
<router-view v-if="$route.name !== 'account'" />

<div v-if="$route.name === 'account'" >
  <h1>Gestione account di {{username}}</h1>
  <br>
  <br>

<div class="row text-right" style="margin-bottom: 10px">
  <b-link :to="{path:'/gestione-account/modifica'}">
  <button class="btn btn-outline-primary btn-details">Modifica account</button>
  </b-link>
</div>

<hr>
<div class="mb-3 row">
    <label for="inputNome" class="col-sm-2 col-form-label">{{title[0]}}</label>
    <div class="col-sm-4">
      <div type="text" class="form-control" id="inputNome">{{user[0]}}</div>
    </div>
    <label for="inputCognome" class="col-sm-2 col-form-label" >{{title[1]}}</label>
    <div class="col-sm-4">
      <div type="text" class="form-control" id="inputCognome">{{user[1]}}</div>
    </div>
  </div>
<div class="mb-3 row">
    <label for="inputTelefono" class="col-sm-2 col-form-label">{{title[3]}}</label>
    <div class="col-sm-4">
      <div type="number" class="form-control" id="inputTelefono">{{user[3]}}</div>
    </div>
  </div>
<div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">{{title[2]}}</label>
    <div class="col-sm-10">
      <div class="form-control" type="text" id="staticEmail">{{user[2]}}</div>
    </div>
  </div>
</div>
    </div>

</template>

<!-- Import del file account.js -->
<script>
import account from './account.js';
export default account;
</script>