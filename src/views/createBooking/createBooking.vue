<template>

<div class="container">
<div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
    <div class="col"><input class="form-check-input" type="radio" name="flexRadioDefault" v-model="newBooking.players" v-bind:value="2">
            2 Giocatori
    </div>
    <div class="col"><input class="form-check-input" type="radio" name="flexRadioDefault" v-model="newBooking.players" v-bind:value="4">
            4 Giocatori
    </div>
    <div class="col"><datetime type="datetime" placeholder="Inizio" v-model="newBooking.start"></datetime>
    </div>
    <div class="col"><datetime type="datetime" placeholder="Fine" v-model="newBooking.end"></datetime>
    </div>
</div>
<div class="row"><div style="margin-top: 15px; width: 70%; margin: auto;"><textarea class="form-control" placeholder="Options" v-model="newBooking.options"></textarea></div></div>
<div class="row"><div><button class="btn btn-outline-primary btn-details" style="margin-top: 15px; width: 45%" v-on:click="createBooking()">Vai</button></div></div>
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