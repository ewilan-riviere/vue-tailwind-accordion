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
  name: 'Accordion',
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
.accordion {
  @apply p-0;

  div:not(:last-child) {
    @apply border-b-2 border-green-300 border-opacity-25;
  }

  div:last-child .accordion-item-details {
    @apply rounded-sm;
  }
}

.accordion-item-trigger,
.accordion-item-details-inner {
  @apply py-3 px-5;
}

.accordion-item-title {
  @apply relative;

  h4 {
    @apply text-xl mb-0 pr-5;
  }
}

.accordion-item-trigger {
}

.accordion-item-trigger-icon {
  $size: 8px;
  right: 1.25rem;
  width: $size;
  height: $size;
  transform: translateY(-$size / 4) rotate(45deg);
  transition: transform 0.2s ease;

  .is-active & {
    transform: translateY($size / 4) rotate(225deg);
  }
}

.accordion-item-details {
}

.accordion-item-enter-active,
.accordion-item-leave-active {
  will-change: height;
  transition: height 0.2s ease;
}
.accordion-item-enter,
.accordion-item-leave-to {
  height: 0 !important;
}
</style>
