<template>
    <div style="width: 50%; height: 500px ;margin:auto; margin-top: 100px" class="table-responsive">
        <table class="table table-light">
            <tbody>
                <tr>
                    <td style="width: 100%">
                        <div style="margin-top: 10px; width: 50%; float: left">
                        <label>Insersci il numero di giocatori</label>
                        <br>
                        <input class="form-check-input" type="radio" name="flexRadioDefault" v-model="newBooking.players" v-bind:value="2">
                            2 Giocatori
                        <br>
                        <input class="form-check-input" type="radio" name="flexRadioDefault" v-model="newBooking.players" v-bind:value="4">
                            4 Giocatori
                        </div>
                        <div style="width: 30%; float: left; margin-top: 10px;">
                        <label>Inserisci data e ora</label>
                        <datetime type="datetime" placeholder="Inizio" v-model="newBooking.start"></datetime>
                        <hr>
                        <datetime type="datetime" placeholder="Fine" v-model="newBooking.end"></datetime>
                        </div>
                    </td>
                </tr>
                <table class="table table-light" style="width:100%">
                <tbody>
                <tr>
                    <br>
                    <textarea class="form-control" placeholder="Options" style="width: 90%; margin: auto" v-model="newBooking.options"></textarea>
                </tr>
                <tr >
                    <button class="btn btn-outline-primary btn-details" style="margin-top: 15px; width: 45%" v-on:click="createBooking()">Vai</button>
                <br>
                <br>
                </tr>
                </tbody>
                </table>
            </tbody>
        </table>
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
                        <textarea class="form-control" rows="5" cols="50" placeholder="Options" v-model="newBooking.options"></textarea>
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