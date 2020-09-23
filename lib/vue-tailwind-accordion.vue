<template>
  <div class="accordion box" role="presentation">
    <accordion-item
      v-for="(item, id) in reformatData"
      :multiple="multiple"
      :item="item"
      :groupId="groupId"
      :key="id"
    >
    </accordion-item>
  </div>
</template>

<script>
import AccordionItem from './accordion-item'
export default {
  name: 'VueTailwindAccordion',
  components: {
    AccordionItem,
  },
  props: {
    content: {
      type: Array,
      required: true,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      groupId: null,
      reformatData: [],
    }
  },
  created() {
    let original = this.content
    let reformat = []
    original.forEach((element, i) => {
      let format = {
        id: 0,
        active: false,
        title: '',
        content: '',
      }
      format.id = i + 1
      format.title = element.title
      format.content = element.content
      if (i === 0) {
        format.active = true
      }
      reformat.push(format)
    })
    this.reformatData = reformat
  },
  computed: {
    accordionClasses: function () {
      return {
        'is-closed': !this.isOpen,
        'is-primary': this.isOpen,
        'is-dark': !this.isOpen,
      }
    },
  },
  methods: {
    toggleAccordion: function () {
      this.isOpen = !this.isOpen
    },
  },
  mounted() {
    this.groupId = this.$el.id
  },
}
</script>

<style lang="scss">
@import './assets/style.scss';
</style>
