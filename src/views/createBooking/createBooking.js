import BookingService from '../../Services/BookingService.js';
import Vue from 'vue';
import { Datetime } from 'vue-datetime'

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
    data() {
        return {
            newBooking: {
                players: null,
                start: null,
                end: null,
                voucher: null,
                courtId: 'C9ED3289-077C-4F3B-95C3-764AB4599E4C',
                userId: '',
                // selected: [],
                options: [
                { text: 'rackets', value: 'rackets' },
                ]
            },
            errors: [],
            loading: false,
            codice: ''
        }
    },
    mounted(){
        BookingService.priceList()
        .then(data => {
            this.newBooking.options = data;
            console.log(this.newBooking.options);
        })
        .catch(error => {
            this.errors.push(error.message);
            console.log(this.errors);
        })
    },
    methods: {
        create() {
                    console.log(this.newBooking.selected);
            this.errors = [];
            
        
                if(!this.newBooking.players){
                    this.errors.push("Devi inserire il numero di giocatori");
                }
    
                if(!this.newBooking.start || !this.newBooking.end){
                    this.errors.push("Devi inserire un'orario di inizio e uno di fine");
                }
    
                if(this.newBooking.start >= this.newBooking.end){
                    this.errors.push("L'orario inserito non è valido");
                }

                if(this.errors.length == 0){
                    this.loading = true;
                    console.log(this.newBooking);
                    BookingService.newBooking(this.newBooking.players, this.newBooking.start, this.newBooking.end,this.newBooking.voucher, this.newBooking.options, this.newBooking.courtId)
                    .then(data => {
                    this.$set(this, "event", data);
                    this.codice = 201;
                    console.log(this.newBooking);
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