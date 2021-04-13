import UserService from '../../Services/UserService.js';

export default{
    name: 'modifica',
    //Dichiarazione delle variabili
    data(){
        return{
            nome: '',
            cognome: '',
            telefono: '',
            codice: '',
            email: '',
            errors: [],
            loading: false,
            nameErr: false,
            lastnameErr: false,
            phoneErr: false
        }
    },
    mounted(){

        //Assegnazione del valore originale delle informazioni utente
        var user = JSON.parse(localStorage.user);
        this.email = user.email;
        this.nome = user.firstName;
        this.cognome = user.lastName;
        this.telefono = user.phoneNumber;
    },
    methods: {
        updateUser(){

            //Controllo lato client
            this.codice = 0;
            this.nameErr = false;
            this.lastnameErr = false;
            this.phoneErr = false;
            this.errors = [];

            if(!this.nome){
                this.nameErr = true;
                this.errors.push("Il campo del nome è vuoto");
            }

            if(!this.cognome){
                this.lastnameErr = true;
                this.errors.push("Il campo del cognome è vuoto");
            }

            if(!this.telefono){
                this.phoneErr = true;
                this.errors.push("Il campo del telefono è vuoto");
            }
            //Richiamo del metodo edit al quale vengono passati come parametri il nome, il cognome e il numero di telefono e gestione degli errori
            if(this.errors.length == 0){
                this.loading = true;
                UserService.edit(this.nome, this.cognome, this.telefono)
                .then(data => {
                    this.codice = 200;
                    localStorage.setItem('user', JSON.stringify(data));
                    console.log(data);
                    this.loading = false;
                })
                .catch(error => {
                    this.errors.push(error.response.data.message);
                    this.loading = false;
                    this.codice = error.response.data.statusCode;
                    console.log(this.errors);
                })
            }
        }
    }
}