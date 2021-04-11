<template>
  <div
    class="container wh-100 d-flex align-items-center justify-content-center"
  >
    <b-card-group deck class="w-50">
      <b-card header="Rudys app">
        <b-form @submit="onSubmit">
          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
            class="justify-left"
          >
          </b-form-group>
          <b-form-input
            id="input-1"
            type="email"
            v-model="form.email"
            placeholder="Enter email"
            required
          ></b-form-input>
          <b-form-group
            id="input-group-2"
            label="Password"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.password"
              placeholder="Enter password"
              type="password"
              required
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">LOGIN</b-button>
          <b-button @click="current()">Current</b-button>
        </b-form>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import AuthService from '@/mixins/Authservice.js'

export default {
  mixins: [AuthService],  
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      user: {},
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.login(this.form.email, this.form.password);
    },
    login(email, password) {
       AuthService.methods.Login(email, password).then(response => {
           this.user = response.user;
       }, err => {
           alert(err.message);
       });
    },
    current() {
        //console.log(firebase.auth().currentUser);
    }
  },
};
</script>