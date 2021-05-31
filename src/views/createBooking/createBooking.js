//Import dei servizi
import BookingService from '../../Services/BookingService.js';
import Vue from 'vue';
import { Datetime } from 'vue-datetime'

//Creazione del template per il componente vue-datetime che è stato importato
Vue.extend({
    template: `<div class="mb-3">
<label for="exampleFormControlTextarea1" class="form-label">Inserisci data e ora</label>
<div class="input-group flex-nowrap">
    <span class="input-group-text" style="height:38px" id="addon-wrapping">Inizio</span>
</div>
</div>`,
    components: {
        datetime: Datetime
    }
});

export default {
    name: 'createBooking',
    //Dichiarazione delle variabili
    data() {
        return {
            newBooking: {
                players: null,
                start: null,
                end: null,
                voucher: null,
                courtId: 'C9ED3289-077C-4F3B-95C3-764AB4599E4C',
                userId: '',
                options: []
            },
            i: 0,
            occupiedDates: [],
            date: "2021-05-26T00%3A00%3A00.000Z",
            errors: [],
            loading: false,
            codice: ''
        }
    },
    //Richiamo del metodo proceList al caricamento della pagina
    mounted(){
        BookingService.priceList()
        .then(data => {
            this.newBooking.options = data;
        })
        .catch(error => {
            this.errors.push(error.message);
            console.log(this.errors);
        })
    },
    methods: {
        // date => newBooking.start
        dateChange(){
            this.occupiedDates = [];
            BookingService.bookingCalendar(this.date, this.newBooking.courtId)
            .then(data => {
                console.log(data);
                this.occupiedDates.push(data);
                for(this.i = 0; this.i <= this.occupiedDates.length; this.i++){
                    if(this.date == this.occupiedDates[this.i]){
                        this.errors.push("L'orario selezionato non è disponibile");
                    }
                }
            })
            .catch(error => {
                this.errors.push(error.message);
                console.log(this.errors);
            })
        },
        //Metodo di creazione della prenotazione
        create() {

            this.errors = [];
            
            //Controllo lato client
                if(!this.newBooking.players){
                    this.errors.push("Devi inserire il numero di giocatori");
                }
    
                if(!this.newBooking.start || !this.newBooking.end){
                    this.errors.push("Devi inserire un'orario di inizio e uno di fine");
                }
    
                if(this.newBooking.start >= this.newBooking.end){
                    this.errors.push("L'orario inserito non è valido");
                }
            
            //Richiamo del metodo newBooking con assegnazioni e gestione degli errori
                if(this.errors.length == 0){
                    this.loading = true;
                    console.log(this.newBooking);
                    BookingService.newBooking(this.newBooking.players, this.newBooking.start, this.newBooking.end,this.newBooking.voucher, this.newBooking.options, this.newBooking.courtId)
                    .then(data => {
                    this.codice = 201;
                    console.log(data);
                    this.loading = false;
                    })
                    .catch(error => {
                    this.errors.push(error.response.data.message);
                    console.log(this.errors);
                    this.loading = false;
                    })
                }
        }
    }
}