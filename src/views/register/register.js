import UserService from '../../Services/UserService.js'

// export default {
//     name: 'register',
//     data(){
//         return{
//             icon: false,
//             loading: false,
//             input:
//             {
//                 firstName: "",
//                 lastName: "",
//                 email: "",
//                 password: "",
//                 confpw: ""
//             },
//             errors:[],
//             errClass: {
//                 isFn: false,
//                 isLn: false,
//                 isMail: false,
//                 isPw: false,
//                 isPw2: false
//             }
//         }
//     },
//     mounted(){
//         this.$root.$refs.App.forceRerender();
//     },
//     methods: {
//         validEmail: function (email) {
//             var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//             return re.test(email);
//         },
//         register(){

//             this.errors = [];
//             this.icon = false;
//             this.errClass.isFn = false;
//             this.errClass.isLn = false;
//             this.errClass.isMail = false;
//             this.errClass.isPw = false;
//             this.errClass.isPw2 = false;

//             //Controllo Nome
//             if(!this.input.firstName){
//                 this.errors.push("Il nome è un campo obbligatorio");
//                 this.errClass.isFn = true;                
//             }
//             //Controllo Cognome
//             if(!this.input.lastName){
//                 this.errors.push("Il cognome è un campo obbligatorio");
//                 this.errClass.isLn = true;
//             }
//             //Controllo Email e validità Email 
//             if(!this.input.email){
//                 this.errors.push("L'email è un campo obbligatorio");
//                 this.errClass.isMail = true;
//             }
//             else if(!this.validEmail(this.input.email)){
//                 this.errors.push("L'email inserita non è valida");
//                 this.errClass.isMail = true;
//             }
//             //Controllo Password
//             if(!this.input.password){
//                 this.errors.push("La password è un campo obbligatorio");
//                 this.errClass.isPw = true;
//             }
//             //Controllo lunghezza Password
//             if(this.input.password.length < 6){
//                 this.icon = true;
//                 document.getElementById("contr").style.color = "rgba(147, 32, 42)";
//                 this.errClass.isPw = true;
//             }
//             //Controllo Password di conferma 
//             if(!this.input.confpw){
//                 this.errors.push("Devi confermare la password inserita");
//                 this.icon = true;
//                 document.getElementById("contr").style.color = "rgba(147, 32, 42)";
//                 this.errClass.isPw2 = true;
//             }
//             //Confronto delle password
//             if(this.input.confpw != this.input.password){
//                 this.errors.push("Le password non coincidono");
//                 this.icon = true;
//                 document.getElementById("contr").style.color = "rgba(147, 32, 42)";
//                 this.errClass.isPw = true;
//                 this.errClass.isPw2 = true;
//             }

//             if(this.errors.length == 0){
//                 this.loading = true;
//                 UserService.signUp(this.input.email, this.input.password, this.input.firstName, this.input.lastName)
//                 .then(data => {
//                     console.log(data);
//                     this.$set(this, "event", data);
//                     this.loading = false;
//                     this.$router.replace({ name: 'login' });
//                 })
//                 .catch(error =>{
//                     this.loading = true;
//                     console.log(error);
//                     this.errors.push(error.response.data.message);
//                     this.errClass[0,1,2,3,4] = true;
//                     this.loading = false;
//                 })
//             }
//             console.log(this.errors);
//         }
//     }
// }


import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: 'register',
  mixins: [validationMixin],
  data() {
    return {
      loading: false,
          form:
          {
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              confpw: ""
          },
          errors: [],
          pwErr: "",
          mailErr: ""
    };
  },
  validations: {
    form: {
      firstName: {
        required
      },
      lastName: {
        required
      },
      email: {
        required
      },
      password: {
        required,
        minLength: minLength(6)
      },
      confpw: {
        required,
        minLength: minLength(6)
      },
    }
  },
  mounted(){
    this.$root.$refs.App.forceRerender();
  },
  methods: {
    signUp(){
      this.loading = true;
      UserService.signUp(this.form.email, this.form.password, this.form.firstName, this.form.lastName)
      .then(data => {
        console.log(data);
        this.$set(this, "event", data);
        this.loading = false;
        this.$router.replace({ name: 'home' });
      })
      .catch(error =>{
        this.loading = true;
        this.errors.push(error.response.data.message);
        this.loading = false;
      })
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    onSubmit() {
      this.$v.form.$touch();
      if(!this.validEmail(this.form.email)){
        this.mailErr = "L'email inserita non è valida";
      }
      if(this.input.confpw != this.input.password){
        this.errors.push("Le password non coincidono");
      }
      if (this.$v.form.$anyError) {
        if(this.form.password.length < 6){
          this.pwErr = "Devi inserire una password di almeno 6 caratteri.";
        }
        else{
        this.mailErr = "Devi inserire una email valida.";
        this.pwErr = "Devi inserire una password valida.";
        }
        return;
      }

      this.signUp();
    }
  }
};
