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





<!-- <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
    <div class="col text-center"><input class="form-check-input" type="radio" name="flexRadioDefault" v-model="newBooking.players" v-bind:value="2">
            2 Giocatori
    </div>
    <div class="col text-center"><input class="form-check-input" type="radio" name="flexRadioDefault" v-model="newBooking.players" v-bind:value="4">
            4 Giocatori
    </div>
    <div class="col"><datetime type="datetime" placeholder="Inizio" style="width: 145px;margin: auto" v-model="newBooking.start"></datetime>
    </div>
    <div class="col"><datetime type="datetime" placeholder="Fine" style="width: 145px;margin: auto" v-model="newBooking.end"></datetime>
    </div>
</div>
<div class="row" style="margin-top: 15px; margin: auto;"><div><textarea class="form-control" placeholder="Options" v-model="newBooking.options"></textarea></div></div>
<div class="row text-center" style="margin-top: 15px"><div><button class="btn btn-outline-primary btn-details" style="width: 45%" v-on:click="createBooking()">Vai</button></div></div> -->



    <!-- <div class="container">

        <transition name="fadeHeight" mode="out-in">
            <div class="alert alert-danger alert-register" role="alert" v-if="errors.length">
                <ul>
                    <li v-for="error in errors" :key="error">
                        {{error}}
                    </li>
                </ul>
            </div>
        </transition>

        <div class="row">
             <div class="col-sm-4">
                <div class="card">
                    <div class="card-body">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" v-model="newBooking.players" v-bind:value="2">
                            2 Giocatori
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" v-model="newBooking.players" v-bind:value="4">
                            4 Giocatori
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card">
                    <div class="card-body">
                        <datetime type="datetime" placeholder="Inizio" v-model="newBooking.start"></datetime>
                        <hr>
                        <datetime type="datetime" placeholder="Fine" v-model="newBooking.end"></datetime>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card">
                    <div class="card-body">
                        <textarea class="form-control" style="width: 90%; margin: auto" rows="5" cols="50" placeholder="Options" v-model="newBooking.options"></textarea>
                    </div>
                </div>
            </div>
        </div>
        <button class="btn btn-outline-primary btn-details" v-on:click="createBooking()">Vai</button>
    </div> -->
</template>

<script>
import createBooking from './createBooking.js';
export default createBooking;
</script>