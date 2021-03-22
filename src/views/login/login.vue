<template>
    <form class="container" autocomplete="off">
        <h2>Login</h2>

        <!-- Form con input di email password e bottone di recupero password e submit -->
        <b-form class="form-floating" style="margin-bottom: 2%">
            <b-form-input type="text" id="floatingInputUser" name="username" v-model="input.username"
                v-bind:class="{'is-invalid': isUser}" placeholder="Username" />
            <label v-if="errors.lenght" for="floatingInputUser">Inserire lo username</label>
            <label for="floatingInputUser" >Username</label>
            <!-- <label class="text-danger" v-if="errors[0] === 'Lo username è obbligatorio'" for="floatingInputUser">{{errors[0]}}</label> -->
        </b-form>
        <b-form class="form-floating">
            <b-form-input id="floatingInputPw" type="password" name="password" v-model="input.password"
                v-bind:class="{'is-invalid': isPw}" placeholder="Password" />
            <label for="floatingInputPw">Password</label>
            <!-- <label class="text-danger" v-if="errors[1] === 'La password è obbligatoria'" for="floatingInputPw">{{errors}}</label> -->
        </b-form>
        <div class="forgot" v-on:click="recover()">
            <span>Hai dimenticato la password?</span>
        </div>
        <br>
        <ul class="text-danger">
            <li v-for="(error, i) in errors" :key="i">
                {{error}}
            </li>
        </ul>
        <button type="button" class="btn btn-primary" v-on:click="login()">
            <div class="spinner-border" role="status" v-if="loading === true">
                <span class="visually-hidden">Loading...</span>
            </div>
            Login
        </button>

        
    </form>

    
</template>

<!-- Import dello script -->
<script>
import login from './login.js';
export default login;
</script>
