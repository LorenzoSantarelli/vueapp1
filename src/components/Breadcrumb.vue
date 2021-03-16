<!--<template>
  <b-breadcrumb :items="items" v-on:click="route()"></b-breadcrumb>
</template>
-->
<template>
  <b-breadcrumb>
    <b-breadcrumb-item href="#home">
      <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
      Home
    </b-breadcrumb-item>
    <b-breadcrumb-item href="#foo">Foo</b-breadcrumb-item>
    <b-breadcrumb-item href="#bar">Bar</b-breadcrumb-item>
    <b-breadcrumb-item active>Baz</b-breadcrumb-item>
  </b-breadcrumb>
</template>

<script>
  export default {
    data() {
      return {
        i: 0,
        isActive: true,
        items: [
          {
            text: 'Home',
            to: { name: 'home' },
            disabled: false
          },
          {
            text: 'Prenotazioni',
            to: { name: 'booking' },
            disabled: false
          },
          {
            text: 'Nuova Prenotazione',
            to: { name: 'newBooking' },
            disabled: false
          }
        ]
      }
    },
    methods: {
        route(){
            for(this.i = 0; this.i < this.items.length; this.i++){
                if(this.$route.currentRoute == this.items[this.i]){
                    this.items[this.i].disabled = true;
                }
            }
        }
    }
  }
</script>