<template>
  <div class="employeePage">
    <employee-list/>
  </div>
</template>

<script>
import EmployeeList from '@/components/EmployeeList.vue'

export default {
  name: 'Employee',
  components: {
    EmployeeList
  },
}
</script>
