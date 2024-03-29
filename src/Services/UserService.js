import axios from 'axios'
import Config from './Config.js'
//definizione della login
export default {
    async login(email, password) {
        var obj = {
            email: email,
            password: password
        };
        //chiamata post contenente l'email e la password
        let res = await axios.post(Config.url + "Users/login", obj);
        console.log(res);
        //salvataggio sul local storage del Token e dello user
        localStorage.setItem('token', res.headers['x-token']);
        localStorage.setItem('user', JSON.stringify(res.data));
        return res.data;
    },
    //definizione del logout
    logout() {
        localStorage.clear();
    },
    //definizione della registrazione
    async signUp(email, password, firstName, lastName) {
        var obj = {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        };
        //chiamata post per effettuare la registrazione contenente tutti i dati dell'utente
        let res = await axios.post(Config.url + "Users/sign-up", obj);
        return res.data;
    },
    // Modifica del nome, del cognome e del numero di telefono
    async edit(firstName, lastName, phoneNumber) {
        var obj = {
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber
        };
        let res = await axios.patch(Config.url + "Users/updateuser", obj, Config.config);
        return res.data;
    }
}