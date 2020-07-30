<template>
  <div class="container w-1/2 mx-auto my-5">
    <tailwind-accordion :content="data"></tailwind-accordion>
  </div>
</template>

<script>
import fakeData from './assets/data'
export default {
  computed: {
    data() {
      return fakeData
    },
  },
}
</script>
