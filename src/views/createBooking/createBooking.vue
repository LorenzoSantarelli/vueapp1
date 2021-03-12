<template>

<div class="container">
  <!-- Stack the columns on mobile by making one full-width and the other half-width -->
  <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
  <div class="row">
    <div class="col-6 col-md-4"><input class="form-check-input" type="radio" name="flexRadioDefault" v-model="newBooking.players" v-bind:value="2">
            2 Giocatori
        <br>
        <input class="form-check-input" type="radio" name="flexRadioDefault" v-model="newBooking.players" v-bind:value="4">
            4 Giocatori</div>
    <div class="col-6 col-md-4">
        <datetime type="datetime" placeholder="Inizio" v-model="newBooking.start"></datetime>
        <datetime type="datetime" placeholder="Fine" style="margin-top: 5px" v-model="newBooking.end"></datetime></div>
  </div>

<div class="row">
    <div class="col-md-8">
        <textarea class="form-control" placeholder="Options" v-model="newBooking.options"></textarea>
    </div>
  </div>

<div class="row">
    <div class="col-md-8"><button class="btn btn-outline-primary btn-details" style="margin-top: 15px; width: 45%" v-on:click="createBooking()">Vai</button>
  </div>
  </div>
</div>


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