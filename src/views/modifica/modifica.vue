<template>
<div>
    <h1>Modifica profilo</h1>
    <br>
    <br>

<div v-if="codice === 200" class="alert alert-success" role="alert">
  Elementi salvati
</div>

<div v-else class="alert alert-danger" role="alert">
  Salvataggio non effettuato
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
    <div class="mb-3 row">
        <label for="staticEmail" class="col-sm-1 col-form-label">Email</label>
        <div class="col-sm-11">
        <input class="form-control" type="text" aria-label="Disabled input example" v-bind:value="email" disabled readonly>
        </div>
    </div>
    <div class="row">
    <button class="btn btn-outline-primary btn-details" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" style="width: 15%; margin: 25px auto" v-on:click="setData()">Salva</button>
    </div>


  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalLabel">Attenzione!</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Stai per modificare i dati di questo account.<br>
        Le seguenti informazioni saranno salvate:<br>
        <strong>Nome:</strong> {{nome}}.<br>
        <strong>Cognome:</strong> {{cognome}}.<br>
        <strong>Numero di telefono:</strong> {{telefono}}.<br>
        <small>Clicca su conferma o chiudi questo pop-up per modificare le informazioni.</small>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Chiudi</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" v-on:click="updateUser()">Conferma</button>
      </div>
    </div>
  </div>
</div>



</div>
</template>

<!-- Import dello script -->
<script>
import modifica from './modifica.js';
export default modifica;
</script>