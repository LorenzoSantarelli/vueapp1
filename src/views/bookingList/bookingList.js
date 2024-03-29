//import del file di gestione dei servizi di prenotazione
import BookingService from '../../Services/BookingService.js';

//definizione del componente home
export default {
    name: 'bookingList',
    data(){
        return {
            disabledTop: false,
            disabledBottom: false,
            errors: [],
            currentPage: 1,
            pageSize: 2,
            pageCount: 3,
            data: 0,
            loading: false,
            componentKey: 0,
            n: 0
        }
    },
    //viene richiamato il metodo forceRender() che permette alla NavBar di refresharsi
    mounted(){
        this.$root.$refs.App.forceRerender();
        this.forceRerender();
    },
    //viene richiamato il metodo getBooking che permette di selezionare una prenotazione
    created(){
        this.getBookingList();
        this.$root.$refs.bookingList = this;
    },
    methods: {
        forceRerender() {
            this.componentKey += 1;
        },
        check(){
            if(this.currentPage == 1){
                this.disabledTop = true;
            }
            else if(this.currentPage == this.pageCount){
                this.disabledBottom = true;
            }
        },
        //permette all'utente di selezionare una singola prenotazione
        getBookingList(){

            this.disabledTop = false;
            this.disabledBottom = false;
            this.loading = true;

            BookingService.getBooking(this.currentPage, this.pageSize)
            .then(data => {
                this.data = data;
                this.check();
                this.loading = false;
            })
            .catch(error => {
                console.log(error);
                this.errors.push (error.response.data.message);
            })
        },
        //metodo per tornare alla pagina precedente
        previous(){
            if(this.currentPage != 1){
                this.currentPage -= 1;
                console.log("Pagina: " + this.currentPage);
                this.getBookingList();
            }
        },
        //metodo per andare alla pagina successiva
        next(){
            if(this.currentPage < this.pageCount){
                this.currentPage += 1;
                console.log("Pagina: " + this.currentPage);
                this.getBookingList();
            }
        },
        //metodo per andare alla prima pagina
        first(){
            this.currentPage = 1;
            console.log("Pagina: " + this.currentPage);
            this.getBookingList();
        },
        //metodo per andare all'ultima pagina
        last(){
            this.currentPage = this.pageCount;
            console.log("Pagina: " + this.currentPage);
            this.getBookingList();
        },
        //metodo che cambia pagina in base alla selezione dell'utente
        change(pages){
            this.currentPage = pages;
            this.getBookingList();
        },
        //metodo per aprire il dettaglio di una prenotazione
        details(){
            this.$router.replace({name: 'booking'});
        }
}
}