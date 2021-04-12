<!-- Creazione template della pagina con i dati dell'utente -->
<template>
    <div>
<router-view v-if="$route.name !== 'account'" />

<div v-if="$route.name === 'account'" style="margin-bottom: 100px" >
  <h1>Gestione account di {{username}}</h1>
  <br>
  <br>

<div class="row text-right" style="margin-bottom: 10px">
  <b-link :to="{path:'/gestione-account/modifica'}">
  <button class="btn btn-outline-primary btn-details">Modifica account</button>
  </b-link>
</div>

<hr>

  <div class="row align-items-start">
    <div class="col-sm-3">
      <div class="input-group-text font-weight-bold" style="border: none; background-color: white" id="addon-wrapping">{{title[0]}} :</div>
    </div>
    <div class="col-sm-3">
      <div type="text" class="form-control" style="border: none" aria-label="Name" aria-describedby="addon-wrapping">{{user[0]}}</div>
    </div>
  </div>
  <div class="row align-items-start">
    <div class="col-md-3">
      <div class="input-group-text font-weight-bold" style="border: none; background-color: white" id="addon-wrapping">{{title[1]}} :</div>
    </div>
    <div class="col-sm-3">
      <div type="text" class="form-control" style="border: none" aria-label="lastName" aria-describedby="addon-wrapping">{{user[1]}}</div>
    </div>
  </div>
  <div class="row align-items-start">
    <div class="col-sm-3">
      <div class="input-group-text font-weight-bold" style="border: none; background-color: white" id="addon-wrapping">{{title[2]}} :</div>
    </div>
    <div class="col-sm-3">
      <div type="text" class="form-control" style="border: none" aria-label="Email" aria-describedby="addon-wrapping">{{user[2]}}</div>
    </div>
  </div>
  <div class="row align-items-start">
    <div class="col-sm-3">
      <div class="input-group-text font-weight-bold" style="border: none; background-color: white" id="addon-wrapping">{{title[3]}} :</div>
    </div>
    <div class="col-sm-3">
      <div type="text" class="form-control" style="border: none" aria-label="Phone" aria-describedby="addon-wrapping">{{user[3]}}</div>
    </div>
  </div>

<!-- <div class="mb-3 input-group flex-nowrap">
  <span class="input-group-text font-weight-bold" style="border: none; background-color: white" id="addon-wrapping">{{title[0]}} :</span>
  <div type="text" class="form-control" style="border: none" aria-label="Nome" aria-describedby="addon-wrapping">{{user[0]}}</div>
</div>
<div class="mb-3 input-group flex-nowrap">
  <span class="input-group-text font-weight-bold" style="border: none; background-color: white" id="addon-wrapping">{{title[1]}} :</span>
  <div type="text" class="form-control" style="border: none" aria-label="Cognome" aria-describedby="addon-wrapping">{{user[1]}}</div>
</div>
<div class="mb-3 input-group flex-nowrap">
  <span class="input-group-text font-weight-bold" style="border: none; background-color: white" id="addon-wrapping">{{title[3]}} :</span>
  <div type="text" class="form-control" style="border: none" aria-label="Telefono" aria-describedby="addon-wrapping">{{user[3]}}</div>
</div>
<div class="mb-3 input-group flex-nowrap">
  <span class="input-group-text font-weight-bold" style="border: none; background-color: white" id="addon-wrapping">{{title[2]}} :</span>
  <div type="text" class="form-control" style="border: none" aria-label="Email" aria-describedby="addon-wrapping">{{user[2]}}</div>
</div> -->

<!-- <div class="mb-3 row">
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
  </div>-->
</div>
    </div> 

</template>

<!-- Import del file account.js -->
<script>
import account from './account.js';
export default account;
</script>