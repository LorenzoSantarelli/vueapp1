<!--<template>
    <form id="register" autocomplete="off">

        <h1>Registrati</h1>

        <div class="form-floating">
            <input class="form-control" type="text" firstName="firstfirstName" v-model="input.firstfirstName" v-bind:class="{'is-invalid': errClass.isFn}" placeholder="Nome" />
            <label for="floatingInputPw">Nome</label>
        </div>

        <div class="form-floating">
            <input class="form-control" type="text" firstName="lastfirstName" v-model="input.lastfirstName" v-bind:class="{'is-invalid': errClass.isLn}" placeholder="Cognome" />
            <label for="floatingInputPw">Cognome</label>
        </div>

        <div class="form-floating">
            <input class="form-control" type="email" firstName="email" v-model="input.email" v-bind:class="{'is-invalid': errClass.isMail}" placeholder="E-Mail" />
            <label for="floatingInputPw">Email</label>
        </div>

        <div class="form-floating">
            <input class="form-control" type="password" firstName="password" v-model="input.password" v-bind:class="{'is-invalid': errClass.isPw}" placeholder="Password" />
            <label for="floatingInputPw">Password</label>
        </div>

        <div class="form-floating">
            <input class="form-control" type="password" firstName="passwordconfirm" v-model="input.confpw" v-bind:class="{'is-invalid': errClass.isPw2}" placeholder="Conferma Password" />
            <label for="floatingInputPw">Conferma Password</label>
        </div>

        <div class="info">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" v-if="icon === true"><path d="M16.143 2l5.857 5.858v8.284l-5.857 5.858h-8.286l-5.857-5.858v-8.284l5.857-5.858h8.286zm.828-2h-9.942l-7.029 7.029v9.941l7.029 7.03h9.941l7.03-7.029v-9.942l-7.029-7.029zm-6.471 6h3l-1 8h-1l-1-8zm1.5 12.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"/></svg>  
          <span id="contr">La password deve essere contenere almeno 6 caratteri inclusi numeri</span>
        </div>

        <br><br>
        <button type="button" class="btn btn-primary register-btn" v-on:click="register()">
            <div class="spinner-border" role="status" v-if="loading === true">
                <span class="visually-hidden">Loading...</span>
            </div>
            Registrati</button>
    </form>
</template>-->

<template>
  <form style="width: 75%; margin: auto; margin-bottom: 110px;">
    <h1>Registrazione</h1>
    <br>
    <br>
    <b-form @submit.stop.prevent="onSubmit" id="register" autocomplete="off">
    <h2>Registrazione Utente</h2>
      <b-form-group id="example-input-group-1" label="Nome" label-for="example-input-1">
        <b-form-input
          id="example-input-1"
          name="example-input-1"
          v-model="$v.form.firstName.$model"
          :state="validateState('firstName')"
          aria-describedby="input-1-live-feedback"
        ></b-form-input>

        <b-form-invalid-feedback
          id="input-1-live-feedback"
        >Devi inserire un nome.</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="example-input-group-2" label="Cognome" label-for="example-input-2">
        <b-form-input
          id="example-input-2"
          name="example-input-2"
          v-model="$v.form.lastName.$model"
          :state="validateState('lastName')"
          aria-describedby="input-2-live-feedback"
        ></b-form-input>

        <b-form-invalid-feedback
          id="input-2-live-feedback"
        >Devi inserire un cognome.</b-form-invalid-feedback>
      </b-form-group>

        <b-form-group id="example-input-group-3" label="Email" label-for="example-input-3">
        <b-form-input
          type="email"
          id="example-input-3"
          name="example-input-3"
          v-model="$v.form.email.$model"
          :state="validateState('email')"
          aria-describedby="input-3-live-feedback"
        ></b-form-input>

        <b-form-invalid-feedback
          id="input-3-live-feedback"
        >{{ mailErr }}</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="example-input-group-4" label="Password" label-for="example-input-4">
        <b-form-input
          type="password"
          id="example-input-4"
          name="example-input-4"
          v-model="$v.form.password.$model"
          :state="validateState('password')"
          aria-describedby="input-4-live-feedback"
        ></b-form-input>

        <b-form-invalid-feedback
          id="input-4-live-feedback"
        >{{ pwErr }}</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="example-input-group-5" label="Conferma Password" label-for="example-input-5">
        <b-form-input
          type="password"
          id="example-input-5"
          name="example-input-5"
          v-model="$v.form.confpw.$model"
          :state="validateState('confpw')"
          aria-describedby="input-5-live-feedback"
        ></b-form-input>

        <b-form-invalid-feedback
          id="input-5-live-feedback"
        >Le password devono coincidere.</b-form-invalid-feedback>
      </b-form-group>

      <span class="text-danger" v-if="errors.length"> {{ errors[0] }} </span>

      <b-button type="submit" class="register-btn" variant="primary">Registrati
          <div class="spinner-border" role="status" v-if="loading === true">
                <span class="visually-hidden">Loading...</span>
            </div>
      </b-button>
    </b-form>
  </form>
</template>

<script>
import register from './register.js';

export default register;
</script>