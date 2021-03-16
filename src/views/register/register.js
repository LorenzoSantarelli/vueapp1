import UserService from '../../Services/UserService.js'


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
    this.$root.$refs.Nav.reLoad();
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
