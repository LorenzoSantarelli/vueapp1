<template>

<div>

<h1>Crea una prenotazione</h1>
<br>
<br>   

<div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Numero di giocatori</label>
    <br>
    <input class="form-check-input" type="radio" name="flexRadioDefault" style="margin-left: 2px" v-model="newBooking.players" v-bind:value="2">
    <label style="margin-left: 23px">2 Giocatori</label>
    <br>
    <input class="form-check-input" type="radio" name="flexRadioDefault" style="margin-left: 2px" v-model="newBooking.players" v-bind:value="4">
    <label style="margin-left: 23px">4 Giocatori</label>
 </div>
<div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Inserisci data e ora</label>
    <datetime type="datetime" placeholder="Inizio" style="margin-bottom: 5px"  v-model="newBooking.start"></datetime>
    <datetime type="datetime" placeholder="Fine"  v-model="newBooking.end"></datetime>
</div>
<div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
    <textarea class="form-control" placeholder="Options" style="width:45%" v-model="newBooking.options"></textarea>
</div>
<div class="mb-3">
    <button class="btn btn-outline-primary btn-details" style="width: 45%" v-on:click="createBooking()">Vai</button>
</div>

</div>

</template>

<script>
import createBooking from './createBooking.js';
export default createBooking;
</script>