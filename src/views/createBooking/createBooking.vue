<template>

<form >
    <h1>Crea una prenotazione</h1>
    <br>
    <br>
    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Numero di giocatori</label>
        <br>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" v-model="newBooking.players" v-bind:value="2">
            <label class="form-check-label" for="inlineRadio1">2</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" v-model="newBooking.players" v-bind:value="4">
            <label class="form-check-label" for="inlineRadio2">4</label>
        </div>
    </div>
  <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Inserisci data e ora</label>
            <div class="input-group flex-nowrap" style="padding: 0px;">
                <span class="input-group-text dim1" style="height:38px; width: 64px; padding: 10px" id="addon-wrapping">Inizio</span>
                <datetime class="form-control" input-style="border: none ; width:102%; margin-left: -2%; height: 36px; margin-top: -6px;" type="datetime" style="margin-bottom: 5px"  v-model="newBooking.start"></datetime>
            </div>
            <div class="input-group flex-nowrap" style="padding: 0px;">
                <span class="input-group-text dim" style="height:38px; padding: 14px; width: 64px" id="addon-wrapping">Fine</span>
                <datetime class="form-control" input-style="border: none ; width:102%; margin-left: -2%; height: 36px; margin-top: -6px;" type="datetime" style="margin-bottom: 5px"  v-model="newBooking.end"></datetime>
            </div>
  </div>
  <div class="mb-3 ">
    <label for="exampleFormControlTextarea1" class="form-label">Inserisci una nota</label>
    <textarea class="form-control" style="" v-model="newBooking.options"></textarea>
  </div>
  <button class="btn btn-outline-primary btn-details" style="width: 15%" v-on:click="createBooking()">Vai</button>
</form>



</template>

<script>
import createBooking from './createBooking.js';
export default createBooking;
</script>