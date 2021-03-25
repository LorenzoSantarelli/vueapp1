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
    <label for="inputNome" class="col-sm-2 col-form-label font-weight-bold">{{title[0]}}</label>
    <div class="col-sm-4">
      <div type="text" class="" id="inputNome" style="margin-top:7px">{{user[0]}}</div>
    </div>
    <label for="inputCognome" class="col-sm-2 col-form-label font-weight-bold" >{{title[1]}}</label>
    <div class="col-sm-4">
      <div type="text" class="" id="inputCognome" style="margin-top:7px">{{user[1]}}</div>
    </div>
  </div>
<div class="mb-3 row">
    <label for="inputTelefono" class="col-sm-2 col-form-label font-weight-bold">{{title[3]}}</label>
    <div class="col-sm-4">
      <div type="number" class="" id="inputTelefono" style="margin-top:7px">{{user[3]}}</div>
    </div>
  </div>
<div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label font-weight-bold">{{title[2]}}</label>
    <div class="col-sm-10">
      <div class="" type="text" id="staticEmail" style="margin-top:7px">{{user[2]}}</div>
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