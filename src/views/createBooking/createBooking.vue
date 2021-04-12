<template>

<form style="margin-bottom:100px">
    <h1>Crea una prenotazione</h1>
    <br>
    

<div v-if="codice === 201" class="alert alert-success" role="alert">
  Elementi salvati
</div>

<div v-if="errors.length" class="alert alert-danger" role="alert">
  <div v-for="(error,i ) in errors" :key="i" >
    {{error}}
  </div>
</div>

<br>

    <div class="row mb-3">
      <div class="col">
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
      <div class="col">
          <div class="form-check" v-for="(items, idx) in newBooking.options" :key="idx">
            <input class="form-check-input" type="checkbox" v-model="items.enabled" id="flexCheckDefault">
              <label class="form-check-label" for="flexCheckDefault">
                {{items.intro}}
              </label>
            </div>
        <!-- <b-form-group label="Using options array:" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
        id="checkbox-group-1"
        v-model="newBooking.options.intro"
        :options="newBooking.options"
        :aria-describedby="ariaDescribedby"
        name="flavour-1"
        ></b-form-checkbox-group>
        </b-form-group> -->
      </div>
    </div>
  <div class="row mb-3">
    <div class="col">
        <label for="exampleFormControlTextarea1" class="form-label">Inserisci data e ora</label>
            <br>    
            <label>Inizio:</label>
            <div class="input-group flex-nowrap text-center">
                <span class="input-group-text text-center" style="height:38px; width: 60px;" id="addon-wrapping"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"/></svg>
                </span>
                <datetime class="form-control" input-style="border: none ; width:102%; margin-left: -2%; height: 36px; margin-top: -6px;" type="datetime" style="margin-bottom: 5px"  v-model="newBooking.start"></datetime>
            </div>
    </div>
    <div class="col" style="padding-top:31px">
                <label>Fine:</label>
            <div class="input-group flex-nowrap text-center">
                <span class="input-group-text text-center" style="height:38px; width: 60px;" id="addon-wrapping"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"/></svg>
                </span>
                <datetime class="form-control" input-style="border: none ; width:102%; margin-left: -2%; height: 36px; margin-top: -6px;" type="datetime" style="margin-bottom: 5px"  v-model="newBooking.end"></datetime>
           </div>
    </div>
</div>
  <!-- <div class="mb-3 ">
    <label for="exampleFormControlTextarea1" class="form-label">Inserisci una nota</label>
    <textarea class="form-control" rows="3" v-model="newBooking.options"></textarea>
  </div> -->
  <div class="row text-center">
  <button class="btn btn-outline-primary btn-details" type="button" style="width: 15%; margin: auto; margin-top: 25px" v-on:click="create()">
    <div class="spinner-border" role="status" v-if="loading === true">
                <span class="visually-hidden">Loading...</span>
            </div>
    Salva</button>
  </div>  
</form>



</template>

<script>
import createBooking from './createBooking.js';
export default createBooking;
</script>