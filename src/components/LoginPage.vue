<template>
  <b-container class="p-5">
    <h1>Employee Management System</h1>
    <b-form @submit.prevent="onSubmit">
      <b-form-input
        class="mb-3"
        v-model="form.username"
        type="email"
        placeholder="Enter email"
        required
      />
      <b-form-input
        class="mb-3"
        v-model="form.password"
        type="password"
        placeholder="Enter password"
        required
      />
      <b-button type="submit" >Login</b-button>
    </b-form>
  </b-container>
</template>

<script>
import apiHelper from '../helper/apiHelper'

export default {
  name: 'LoginPage',
  props: {
  },
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault()
      try {
        let token = await apiHelper().post("/api/login", this.form)
        let accessToken = token.data

        localStorage.setItem('token', accessToken)
        this.$router.push({ name: 'Employee'})
      } catch (error) {
        console.log(error.response.data.message)
      }
    }
  },
}
</script>
