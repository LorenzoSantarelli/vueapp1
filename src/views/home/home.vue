<!-- definizione del template -->
<template>
<<<<<<< HEAD
    <div class="container-fluid">
        <div style="text-align:center;" v-if="loading === true">
=======
<div class="container" v-if="loading === false">

    <div style="text-align:center;" v-if="loading === true">
>>>>>>> f882b8f66ff5d56afcc15ceb65d712ffaa07daa1
            <div class="spinner-border text-primary m-5" style="width: 3.2rem; height: 3.2rem;" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
    </div>

<div class="row">
    <div class="col-sm-3">
      <nobr>Booking Id</nobr>
    </div>
    <div class="col-sm-9" v-for="item in this.data.data" :key="item.bookingId">
      <div class="row">
        <div class="col-6 col-sm-6">
          {{item.bookingId}}
        </div>
        <div class="col-6 col-sm-6">
          {{item.bookingId}}
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-3">
      <nobr>Codice Prenotazione</nobr>
    </div>
    <div class="col-sm-9" v-for="item in this.data.data" :key="item.bookingId">
      <div class="row">
        <div class="col-6 col-sm-6">
          {{item.code}}
        </div>
        <div class="col-6 col-sm-6">
          {{item.code}}
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-3">
      <nobr>Data</nobr>
    </div>
    <div class="col-sm-9" v-for="item in this.data.data" :key="item.bookingId">
      <div class="row">
        <div class="col-6 col-sm-6">
          {{item.bookingDate | formatDate}}
        </div>
        <div class="col-6 col-sm-6">
          {{item.bookingDate | formatDate}}
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-3">
    </div>
    <div class="col-sm-9" v-for="item in this.data.data" :key="item.bookingId">
      <div class="row">
        <div class="col-6 col-sm-6">
          <router-link :to="{name: 'booking', params: {id: item.bookingId} }">
                    <button class="btn btn-outline-primary btn-details">Dettagli</button>
                    </router-link>
        </div>
        <div class="col-6 col-sm-6">
          <router-link :to="{name: 'booking', params: {id: item.bookingId} }">
                    <button class="btn btn-outline-primary btn-details">Dettagli</button>
                    </router-link>
        </div>
      </div>
    </div>
  </div>

<nav class="pagination-text" aria-label="Page navigation example">
            <span class="text-primary" style="font-weight:700;">Pagina {{currentPage}}</span>

            <!-- definizione degli elementi per mostrare la pagina corrente e di quelli per cambiare pagina -->
            <ul class="pagination justify-content-center">
                <li class="page-item" v-bind:class="{'disabled': disabledTop}">
                    <a class="page-link" aria-label="First" v-on:click="first()">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item" v-bind:class="{'disabled': disabledTop}">
                    <a class="page-link" aria-label="Previous" v-on:click="previous()">
                        <span aria-hidden="true">&lt;</span>
                    </a>
                </li>
                <li class="page-item" v-for="pages in pageCount" :key="pages">
                    <a class="page-link" v-if="pages !== data.currentPage" v-on:click="change(pages)">{{pages}}</a>
                    <span class="page-link deactivated" v-if="pages === data.currentPage">{{pages}}</span>
                </li>
                <li class="page-item" v-bind:class="{'disabled': disabledBottom}">
                    <a class="page-link" aria-label="Next" v-on:click="next()">
                        <span aria-hidden="true">&gt;</span>
                    </a>
                </li>
                <li class="page-item" v-bind:class="{'disabled': disabledBottom}">
                    <a class="page-link" aria-label="Last" v-on:click="last()">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
</div>
</template>

<script>
import home from './home.js';
export default home;
</script>