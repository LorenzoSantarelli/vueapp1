import UserService from '../../Services/UserService.js';

export default{
    name: 'modifica',
    data(){
        return{
            nome: '',
            cognome: '',
            telefono: '',
            email: '',
            errors: []
        }
    },
    methods: {
        updateUser(){
            
            



            UserService.edit(this.nome, this.cognome, this.telefono)
                .then(data => {
                    this.$set(this, "event", data);

                })
                .catch(error => {
                    this.errors.push(error.response.data.message);
                })
        }
    }
}