<!-- definizione del template -->
<template>
  <div>
    <router-view v-if="$route.name !== 'bookingList'" />

    <div v-if="$route.name === 'bookingList'" :key="componentKey">
      <h1>Elenco prenotazioni</h1>
      <br />
      <br />
      <div class="row text-right" style="margin-bottom: 10px">
        <b-link :to="{ path: '/booking/new' }">
          <button class="btn btn-outline-primary btn-details">
            Crea prenotazione
          </button>
        </b-link>
      </div>

      <div style="text-align: center" v-if="loading === true">
        <div class="table-responsive">
          <table class="table table-md">
            <thead>
              <tr>
                <th>
                  <nobr style="margin-left:-8%">Booking Id</nobr>
                  <nobr style="margin-left:20%">Codice Prenotazione</nobr>
                  <nobr style="margin-left:20%">Data</nobr>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <svg
                    role="img"
                    width="100%"
                    height="55"
                    aria-labelledby="loading-aria"
                    viewBox="0 0 1160 55"
                    preserveAspectRatio="none"
                  >
                    <title id="loading-aria">Loading...</title>
                    <rect
                      x="0"
                      y="0"
                      width="100%"
                      height="100%"
                      clip-path="url(#clip-path)"
                      style="fill: url('#fill')"
                    ></rect>
                    <defs>
                      <clipPath id="clip-path">
                        <rect
                          x="80"
                          y="10"
                          rx="3"
                          ry="3"
                          width="320"
                          height="15"
                        />
                        <rect
                          x="113"
                          y="117"
                          rx="3"
                          ry="3"
                          width="320"
                          height="15"
                        />
                        <rect
                          x="590"
                          y="10"
                          rx="3"
                          ry="3"
                          width="80"
                          height="15"
                        />
                        <rect
                          x="790"
                          y="10"
                          rx="3"
                          ry="3"
                          width="180"
                          height="15"
                        />
                      </clipPath>
                      <linearGradient id="fill">
                        <stop
                          offset="0.599964"
                          stop-color="#f3f3f3"
                          stop-opacity="1"
                        >
                          <animate
                            attributeName="offset"
                            values="-2; -2; 1"
                            keyTimes="0; 0.25; 1"
                            dur="2s"
                            repeatCount="indefinite"
                          ></animate>
                        </stop>
                        <stop
                          offset="1.59996"
                          stop-color="#ecebeb"
                          stop-opacity="1"
                        >
                          <animate
                            attributeName="offset"
                            values="-1; -1; 2"
                            keyTimes="0; 0.25; 1"
                            dur="2s"
                            repeatCount="indefinite"
                          ></animate>
                        </stop>
                        <stop
                          offset="2.59996"
                          stop-color="#f3f3f3"
                          stop-opacity="1"
                        >
                          <animate
                            attributeName="offset"
                            values="0; 0; 3"
                            keyTimes="0; 0.25; 1"
                            dur="2s"
                            repeatCount="indefinite"
                          ></animate>
                        </stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </td>
              </tr>
              <tr>
                <td>
                  <svg
                    role="img"
                    width="100%"
                    height="55"
                    aria-labelledby="loading-aria"
                    viewBox="0 0 1160 55"
                    preserveAspectRatio="none"
                  >
                    <title id="loading-aria">Loading...</title>
                    <rect
                      x="0"
                      y="0"
                      width="100%"
                      height="100%"
                      clip-path="url(#clip-path)"
                      style="fill: url('#fill')"
                    ></rect>
                    <defs>
                      <clipPath id="clip-path">
                        <rect
                          x="80"
                          y="10"
                          rx="3"
                          ry="3"
                          width="320"
                          height="15"
                        />
                        <rect
                          x="113"
                          y="117"
                          rx="3"
                          ry="3"
                          width="320"
                          height="15"
                        />
                        <rect
                          x="590"
                          y="10"
                          rx="3"
                          ry="3"
                          width="80"
                          height="15"
                        />
                        <rect
                          x="790"
                          y="10"
                          rx="3"
                          ry="3"
                          width="180"
                          height="15"
                        />
                      </clipPath>
                      <linearGradient id="fill">
                        <stop
                          offset="0.599964"
                          stop-color="#f3f3f3"
                          stop-opacity="1"
                        >
                          <animate
                            attributeName="offset"
                            values="-2; -2; 1"
                            keyTimes="0; 0.25; 1"
                            dur="2s"
                            repeatCount="indefinite"
                          ></animate>
                        </stop>
                        <stop
                          offset="1.59996"
                          stop-color="#ecebeb"
                          stop-opacity="1"
                        >
                          <animate
                            attributeName="offset"
                            values="-1; -1; 2"
                            keyTimes="0; 0.25; 1"
                            dur="2s"
                            repeatCount="indefinite"
                          ></animate>
                        </stop>
                        <stop
                          offset="2.59996"
                          stop-color="#f3f3f3"
                          stop-opacity="1"
                        >
                          <animate
                            attributeName="offset"
                            values="0; 0; 3"
                            keyTimes="0; 0.25; 1"
                            dur="2s"
                            repeatCount="indefinite"
                          ></animate>
                        </stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div style="text-align: center" v-if="loading === false">
        <div class="table-responsive">
          <table class="table table-md">
            <thead>
              <tr>
                <th><nobr>Booking Id</nobr></th>
                <th><nobr>Codice Prenotazione</nobr></th>
                <th class=""><nobr>Data</nobr></th>
                <th></th>
              </tr>
            </thead>
            <tbody v-for="item in this.data.data" :key="item.bookingId">
              <tr>
                <td>{{ item.bookingId }}</td>
                <td>{{ item.code }}</td>
                <td>{{ item.bookingDate | formatDate }}</td>
                <td>
                  <router-link
                    :to="{ name: 'booking', params: { id: item.bookingId } }"
                    class="btn btn-outline-primary btn-details"
                  >
                    Dettagli
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <nav class="pagination-text" aria-label="Page navigation example">
        <span class="text-primary" style="font-weight: 700"
          >Pagina {{ currentPage }}</span
        >

        <!-- definizione degli elementi per mostrare la pagina corrente e di quelli per cambiare pagina -->
        <ul class="pagination justify-content-center">
          <li class="page-item" v-bind:class="{ disabled: disabledTop }">
            <a class="page-link" aria-label="First" v-on:click="first()">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item" v-bind:class="{ disabled: disabledTop }">
            <a class="page-link" aria-label="Previous" v-on:click="previous()">
              <span aria-hidden="true">&lt;</span>
            </a>
          </li>
          <li class="page-item" v-for="pages in pageCount" :key="pages">
            <a
              class="page-link"
              v-if="pages !== data.currentPage"
              v-on:click="change(pages)"
              >{{ pages }}</a
            >
            <span
              class="page-link deactivated"
              v-if="pages === data.currentPage"
              >{{ pages }}</span
            >
          </li>
          <li class="page-item" v-bind:class="{ disabled: disabledBottom }">
            <a class="page-link" aria-label="Next" v-on:click="next()">
              <span aria-hidden="true">&gt;</span>
            </a>
          </li>
          <li class="page-item" v-bind:class="{ disabled: disabledBottom }">
            <a class="page-link" aria-label="Last" v-on:click="last()">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import bookingList from "./bookingList.js";
export default bookingList;
</script>