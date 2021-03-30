// Import di axios
import axios from 'axios';
import Config from './Config.js'

export default {
    // Dichiarazione del metodo asincrono getBoking
    // che prende come parametri page (che indica la pagina corrente) e pageSize(il numero di elementi in una pagina)
    // viene effettuata la chiamata all'api e vengono passati il bearer token e i parametri
    async getBooking(page, pageSize) {
        let token = localStorage.getItem("token");
        const config = {
            headers: {Authorization: `Bearer ${token}`},
            params: {page: page, pageSize: pageSize}
        };
        let res = await axios.get(Config.url + 'Booking', config);
        return res;
    },

    // Dichiarazione del metodo asincrono bookingDetails usato per visualizzare i dettagli di un singolo record
    async bookingDetail(bookingId){
        let res = await axios.get(Config.url + 'Booking/' + bookingId, Config.config);
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
        }
        let res = await axios.post(Config.url + 'Booking/', obj, Config.config);
        console.log(res.data);
        return res.data;
    }
}