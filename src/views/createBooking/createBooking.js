import BookingService from '../../Services/BookingService.js';
import Vue from 'vue';
import{Datetime} from 'vue-datetime'

Vue.extend({template: `<div class="mb-3">
<label for="exampleFormControlTextarea1" class="form-label">Inserisci data e ora</label>
<div class="input-group flex-nowrap">
    <span class="input-group-text" style="height:38px" id="addon-wrapping">Inizio</span>
</div>
</div>`, 
components: {
    datetime: Datetime
}});

export default{
    name: 'createBooking',
    data(){
        return{
            newBooking: {
                players: null,
                start: null,
                end: null,
                options: null,
                courtId: 'C9ED3289-077C-4F3B-95C3-764AB4599E4C'
            },
            errors: []
        }
    },
    methods: {
        create(){

            this.errors = [];

            
            if(this.errors.length == 0){
                
                console.log(this.newBooking);
                BookingService.newBooking(this.newBooking.players, this.newBooking.start, this.newBooking.end, null, this.newBooking.courtId)
                .then(data => {
                this.$set(this, "event", data);
                console.log(this.newBooking);
                })
                .catch(error => {
                this.errors.push(error.response.data.message);
                console.log(this.errors);
                })
            }
            else{
                if(!this.newBooking.players){
                    this.errors.push("Devi inserire il numero di giocatori");
                }
    
                if(!this.newBooking.start || !this.newBooking.end){
                    this.errors.push("Devi inserire un'orario di inizio e uno di fine");
                }
    
                if(this.newBooking.start >= this.newBooking.end){
                    this.errors.push("L'orario inserito non è valido");
                }
    
                if(!this.newBooking.options){
                    this.errors.push("Il campo opzioni è vuoto");
                }
                console.log(this.errors);
            }
        }
    }
}