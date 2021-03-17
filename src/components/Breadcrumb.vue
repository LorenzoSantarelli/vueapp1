<!--<template>
  <b-breadcrumb  :items="items" v-on:click="slice()"></b-breadcrumb>
</template>-->

<template>
  <b-breadcrumb>
    <b-breadcrumb-item v-bind:class="{ disabled: dis.home }" :to="{name: 'home'}">Home</b-breadcrumb-item>
    <b-breadcrumb-item v-bind:class="{ disabled: dis.list }" v-if="$route.name === 'bookingList'" :to="{name: 'bookingList'}">Prenotazioni</b-breadcrumb-item>
    <b-breadcrumb-item v-bind:class="{ disabled: dis.new }" v-if="$route.name === 'newBooking'" :to="{name: 'newBooking'}">Nuova Prenotazione</b-breadcrumb-item>
    <b-breadcrumb-item v-bind:class="{ disabled: dis.detail }" v-if="$route.name === 'booking'" :to="{name: 'booking'}">Dettaglio Prenotazione</b-breadcrumb-item>
  </b-breadcrumb>
</template>

<script>
  export default {
    data() {
      return {
        dis: {
          home: false,
          list: false,
          new: false,
          detail: false
        }
      }
    },
    methods: {
      check(){

        this.dis.home = false;
        this.dis.list = false;
        this.dis.new = false;
        this.dis.detail = false;


        if(this.$route.name == 'home'){
          this.dis.home = true;
        }
        if(this.$route.name == 'bookingList'){
          this.dis.list = true;
        }
        if(this.$route.name == 'newBooking'){
          this.dis.new = true;
        }
        if(this.$route.name == 'booking'){
          this.dis.detail = true;
        }
      }
    },
    created() {
    this.$root.$refs.Breadcrumb = this;
  }
  }
</script>