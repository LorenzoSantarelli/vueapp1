<template>
<div>
    <h1>Modifica profilo</h1>
    <br>
    

<div v-if="codice === 200" class="alert alert-success" role="alert">
  Elementi salvati
</div>

<div v-if="errors.length" class="alert alert-danger" role="alert">
  <div v-for="(error, i) in errors" :key="i">
  {{error}}
  </div>
</div>

<br>

    <div class="mb-3 row">
        <label for="inputName" class="col-sm-1 col-form-label">Nome</label>
        <div class="col-sm-5">
        <input type="text" class="form-control" id="inputNome" v-model="nome" v-bind:class="{'is-invalid': nameErr}">
        </div>
        <label for="inputLastName" class="col-sm-1 col-form-label" >Cognome</label>
        <div class="col-sm-5">
        <input type="text" class="form-control" id="inputCognome" v-model="cognome" v-bind:class="{'is-invalid': lastnameErr}">
        </div>
    </div>
    <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-1 col-form-label">Telefono</label>
        <div class="col-sm-5">
        <input type="number" class="form-control" id="inputTelefono" v-model="telefono" v-bind:class="{'is-invalid': phoneErr}">
        </div>
    </div>
    <div class="mb-3 row">
        <label for="staticEmail" class="col-sm-1 col-form-label">Email</label>
        <div class="col-sm-11">
        <input class="form-control" type="text" aria-label="Disabled input example" v-bind:value="email" disabled readonly>
        </div>
    </div>
    <div class="row">
    <button class="btn btn-outline-primary btn-details" v-on:click="updateUser()" type="button" style="width: 15%; margin: 25px auto" >
      <div class="spinner-border" role="status" v-if="loading === true">
                <span class="visually-hidden">Loading...</span>
            </div>
      Salva</button>
    </div>

</div>
</template>

<!-- Import dello script -->
<script>
import modifica from './modifica.js';
export default modifica;
</script>