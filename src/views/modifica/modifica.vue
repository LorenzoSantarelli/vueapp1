<template>
<div>
    <h1>Modifica profilo</h1>
    <br>
    <br>
    <hr>


<div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Nome</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword" v-model="nome">
    </div>
  </div>
<div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Cognome</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword" v-model="cognome">
    </div>
  </div>
<div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input class="form-control" type="text" placeholder="Disabled readonly input" aria-label="Disabled input example" disabled readonly>
    </div>
  </div>
<div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">N. Telefono</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword" v-model="telefono">
    </div>
  </div>

</div>
</template>

<!-- Import dello script -->
<script>
import modifica from './modifica.js';
export default modifica;
</script>