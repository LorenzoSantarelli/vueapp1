import UserService from '../../Services/UserService.js';

export default{
    name: 'modifica',
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

        var user = JSON.parse(localStorage.user);
        // this.userInfo.push(this.name.firstName);
        // this.userInfo.push(this.name.lastName);
        // this.userInfo.push(this.name.phoneNumber);

        this.email = user.email;
        this.nome = user.firstName;
        this.cognome = user.lastName;
        this.telefono = user.phoneNumber;
    },
    methods: {
        updateUser(){

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

            if(this.errors.length == 0){
                this.loading = true;
                UserService.edit(this.nome, this.cognome, this.telefono)
                .then(data => {
                    this.$set(this, "event", data);
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