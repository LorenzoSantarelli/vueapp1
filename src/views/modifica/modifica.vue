<template>
<div>
    <h1>Modifica profilo</h1>
    <br>
    <br>

<div class="mb-3 row">
    <label for="staticEmail" class="col-sm-1 col-form-label">Email</label>
    <div class="col-sm-11">
      <input class="form-control" type="text" aria-label="Disabled input example" value="email" disabled readonly>
    </div>
  </div>
<div class="mb-3 row">
    <label for="inputPassword" class="col-sm-1 col-form-label">Nome</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" id="inputPassword" v-model="nome">
    </div>
    <label for="inputPassword" class="col-sm-1 col-form-label" >Cognome</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" id="inputPassword" v-model="cognome">
    </div>
  </div>
<div class="mb-3 row">
    <label for="inputPassword" class="col-sm-1 col-form-label">Telefono</label>
    <div class="col-sm-5">
      <input type="number" class="form-control" id="inputPassword" v-model="telefono">
    </div>
  </div>
<div class="row">
<button class="btn btn-outline-primary btn-details" type="button" style="width: 15%; margin: 25px auto" v-on:click="create()">Salva</button>
</div>
</div>
</template>

<!-- Import dello script -->
<script>
import modifica from './modifica.js';
export default modifica;
</script>