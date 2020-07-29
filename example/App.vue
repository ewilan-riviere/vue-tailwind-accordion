<template>
  <div class="container w-1/2 mx-auto my-5">
    <!-- <tailwind-accordion></tailwind-accordion> -->
    <div>
      <accordion id="accordion-example-1" :content="datas"></accordion>
    </div>
  </div>
</template>

<script>
import accordion from './accordion.vue'
export default {
  components: {
    accordion,
  },
  data() {
    return {
      datas: [
        {
          id: 1,
          active: true,
          title: 'Crushing Spirits',
          details: `Bouh !`,
        },
        {
          id: 2,
          active: false,
          title: 'Soundtracks',
          details: `Bouh?`,
        },
        {
          id: 3,
          active: false,
          title: `The Letter Shaped Like a Man Wearing a Hat`,
          details: `Bouuuh`,
        },
      ],
    }
  },
}
</script>
