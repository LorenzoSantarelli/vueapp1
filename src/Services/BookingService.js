// Import di axios
import axios from 'axios';

export default {
    data(){
        return{
            token: localStorage.getItem("token"),
            config: {
                headers: {Authorization: `Bearer ${token}`}
            },
            baseUrl: "https://paddle.kube.cobaltica.net/api/";
        }
    },
    // Dichiarazione del metodo asincrono getBoking
    // che prende come parametri page (che indica la pagina corrente) e pageSize(il numero di elementi in una pagina)
    // viene effettuata la chiamata all'api e vengono passati il bearer token e i parametri
    async getBooking(page, pageSize) {
        var params = {
            page: page, 
            pageSize: pageSize
        };
        let res = await axios.get('Booking', params, config);
        return res;
    },

    // Dichiarazione del metodo asincrono bookingDetails usato per visualizzare i dettagli di un singolo record
    async bookingDetail(bookingId){
        let res = await axios.get('https://paddle.kube.cobaltica.net/api/Booking/' + bookingId, config);
        return res.data;
    },

    //Dichiarazione del metodo newBooking per la creazione di un nuovo oggetto
    async newBooking(players, start, end, options, courtId){
        var obj = {
            players: players,
            start: start,
            end: end,
            options: options,
            courtId: courtId
        };
        let res = await axios.post('https://paddle.kube.cobaltica.net/api/Booking/', obj, config);
        return res.data;
    }
}