import UserService from '../../Services/UserService.js';

export default{
    name: 'modifica',
    data(){
        return{
            nome: '',
            cognome: '',
            telefono: '',
            errors: '',
            codice: '',
            email: '',
            userInfo: [],
            name: [],
            loading: false,
        }
    },
    mounted(){

        this.name = JSON.parse(localStorage.user);
        this.userInfo.push(this.name.firstName);
        this.userInfo.push(this.name.lastName);
        this.userInfo.push(this.name.phone);

        this.email = this.name.email;
    },
    methods: {
        setData(){
            if(!this.nome){
                this.nome = this.userInfo[0];
            }

            if(!this.cognome){
                this.cognome = this.userInfo[1];
            }

            if(!this.telefono){
                this.telefono = this.userInfo[2];
            }
        },
        updateUser(){
            this.loading = true;
            console.log(this.nome + ' ' + this.cognome + ' ' + this.telefono);

            UserService.edit(this.nome, this.cognome, this.telefono)
                .then(data => {
                    this.$set(this, "event", data);
                    console.log(data);
                })
                .catch(error => {
                    this.errors = error.response.data.message;
                    this.loading = false;
                    this.codice = error.response.data.statusCode;
                    console.log(this.errors);
                })
        }
    }
}