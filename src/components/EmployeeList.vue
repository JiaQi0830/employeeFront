<template>
  <b-container class="p-5">
    <b-table striped hover :items="items"></b-table>
  </b-container>
</template>

<script>
import apiHelper from '../helper/apiHelper'

export default {
  name: 'EmployeeList',
  data() {
    return {
      items: []
    }
  },
  async mounted() {
    console.log(await apiHelper(true).get("/api/employee"))
    // console.log(this.items)
  }
}
</script>
