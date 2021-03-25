<template>
<div>
  <h1>Prenotazioni padel</h1>
  <br>
  <br>
  <h4>Benvenuto nel sito di prenotazione per il padel</h4>

  <div>
    <b-button @click="makeToast()">Show Toast</b-button>
    <b-button @click="makeToast(true)">Show Toast (appended)</b-button>
  </div>

</div>
</template>

<script>
import home from './home.js';
export default home;
</script>
