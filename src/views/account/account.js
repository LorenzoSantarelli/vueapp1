export default{

    // Dichiarazione nome e variabili del componente
    name: 'account',
    data(){
        return{
            username: '',
            user: [],
            title: 
            [
                'Nome',
                'Cognome',
                'Email',
                'Telefono'
            ]
        }
    },
    methods: {
        // Metodo di visualizzazione delle informazioni dell'utente
        name(){
            const name = JSON.parse(localStorage.user);
            this.username = name.fullname;
            this.user.push(name.firstName);
            this.user.push(name.lastName);
            this.user.push(name.email);
            this.user.push(name.phoneNumber);
        }
    },
    // Richiamo del metodo name()
    mounted(){
        this.name();
    }
}