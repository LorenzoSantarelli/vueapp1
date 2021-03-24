<template>
<div>
    <h1>Modifica profilo</h1>
    <br>
    <br>

<div class="mb-3 row">
    <label for="inputNome" class="col-sm-2 col-form-label">Nome</label>
    <div class="col-sm-4">
      <input type="text" class="form-control" id="inputNome" v-model="nome">
    </div>
    <label for="inputCognome" class="col-sm-2 col-form-label" >Cognome</label>
    <div class="col-sm-4">
      <input type="text" class="form-control" id="inputCognome" v-model="cognome">
    </div>
  </div>
<div class="mb-3 row">
    <label for="inputTelefono" class="col-sm-2 col-form-label">Telefono</label>
    <div class="col-sm-4">
      <input type="number" class="form-control" id="inputTelefono" v-model="telefono">
    </div>
  </div>
<div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <div class="form-control" type="text" aria-label="Disabled input example"  disabled readonly>{{email}}</div>
    </div>
  </div>
<div class="row">
<button class="btn btn-outline-primary btn-details" type="button" style="width: 15%; margin: 25px auto" v-on:click="updateUser()">Salva</button>
</div>
</div>
</template>

<!-- Import dello script -->
<script>
import modifica from './modifica.js';
export default modifica;
</script>