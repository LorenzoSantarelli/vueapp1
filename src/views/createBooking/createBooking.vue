<!-- Creazione del template per il form di creazione delle prenotazioni -->
<template>
  <form style="margin-bottom: 100px">
    <h1>Crea una prenotazione</h1>
    <br />

    <div v-if="codice === 201" class="alert alert-success" role="alert">
      Elementi salvati
    </div>

    <div v-if="errors.length" class="alert alert-danger" role="alert">
      <div v-for="(error, i) in errors" :key="i">
        {{ error }}
      </div>
    </div>

    <br />

    <div class="row mb-3">
      <div class="col">
        <label for="exampleFormControlInput1" class="form-label"
          >Numero di giocatori</label
        >
        <br />
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            v-model="newBooking.players"
            v-bind:value="2"
          />
          <label class="form-check-label" for="inlineRadio1">2</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            v-model="newBooking.players"
            v-bind:value="4"
          />
          <label class="form-check-label" for="inlineRadio2">4</label>
        </div>
      </div>
      <div class="col">
        <div class="form-check" v-for="(items, idx) in newBooking.options" :key="idx">
          <label class="form-check-label" for="flexCheckDefault">
          <input class="form-check-input" type="checkbox" v-model="items.defaultState" id="flexCheckDefault">
            {{ items.intro }}.
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" v-b-tooltip.hover.right="items.name" variant="outline-light">
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z"/></svg>
            
            </label>
            <small v-if="items.defaultState === true" style="margin-left:25px;">Prezzo aggiuntivo: {{ items.price }}€.</small>
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <div class="btn-group">
        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
          Data
        </button>
      <ul class="dropdown-menu dropdown-menu-lg-end">
      <li v-for="(dates, i) in totalDates" :key="i"><button class="dropdown-item" type="button">{{dates}}</button></li>
      </ul>
      </div>
      <table class="table table-md">
        
      </table>
    </div>
    <!-- <div class="row mb-3">
      <div class="col">
        <label for="exampleFormControlTextarea1" class="form-label"
          >Inserisci data e ora</label
        >
        <br /> -->
        <!-- <label>Inizio:</label>
        <div class="input-group flex-nowrap text-center">
          <span
            class="input-group-text text-center"
            style="height: 38px; width: 60px"
            id="addon-wrapping"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"
              />
            </svg>
          </span>
          <datetime
            class="form-control"
            input-style="border: none ; width:102%; margin-left: -2%; height: 36px; margin-top: -6px;"
            type="datetime"
            style="margin-bottom: 5px"
            v-model="newBooking.start"
          ></datetime>
        </div>
      </div>
      <div class="col" style="padding-top: 31px">
        <label>Fine:</label>
        <div class="input-group flex-nowrap text-center">
          <span
            class="input-group-text text-center"
            style="height: 38px; width: 60px"
            id="addon-wrapping"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"
              />
            </svg>
          </span>
          <datetime
            class="form-control"
            input-style="border: none ; width:102%; margin-left: -2%; height: 36px; margin-top: -6px;"
            type="datetime"
            style="margin-bottom: 5px"
            v-model="newBooking.end"
          ></datetime>
        </div>
      </div>
    </div> -->
    <div class="row text-center">
      <button
        class="btn btn-outline-primary btn-details"
        type="button"
        style="width: 15%; margin: auto; margin-top: 25px"
        v-on:click="create()"
      >
        <div class="spinner-border" role="status" v-if="loading === true">
          <span class="visually-hidden">Loading...</span>
        </div>
        Salva
      </button>
    </div>
  </form>
</template>

<script>
import createBooking from "./createBooking.js";
export default createBooking;
</script>