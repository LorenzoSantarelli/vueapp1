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
            userInfo: [],
            name: [],
            errors: [],
            loading: false,
            nameErr: false,
            lastnameErr: false,
            phoneErr: false
        }
    },
    mounted(){

        this.name = JSON.parse(localStorage.user);
        this.userInfo.push(this.name.firstName);
        this.userInfo.push(this.name.lastName);
        this.userInfo.push(this.name.phone);

        this.email = this.name.email;
        
        this.nome = this.userInfo[0];
        this.cognome = this.userInfo[1];
        this.telefono = this.userInfo[2];
    },
    methods: {
        updateUser(){

            this.loading = true;
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

            this.loading = false;
            if(this.errors.length == 0){
                this.loading = true;
                UserService.edit(this.nome, this.cognome, this.telefono)
                .then(data => {
                    this.$set(this, "event", data);
                    console.log(data);
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