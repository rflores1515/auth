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
          <b-alert :show="showAlert" variant="danger">{{this.error}}</b-alert>
        </b-form>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default { 
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      user: {},
      showAlert: false,
      error: ''
    };
  },
  methods: {
    ...mapActions(["signInAction"]),
    onSubmit(event) {
      event.preventDefault();
      this.login();
    },
    login() {
      this.signInAction({email: this.form.email,password: this.form.password});
    }
  },
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    }
  }
};
</script>