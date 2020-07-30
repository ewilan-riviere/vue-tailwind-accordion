<template>
  <div
    :id="groupId + '-' + item.id"
    class="accordion-item"
    :class="{ 'is-active': item.active }"
  >
    <div class="accordion-item-title">
      <button
        @click="toggle"
        class="w-full text-left bg-transparent border-transparent accordion-item-trigger"
      >
        <h4 class="accordion-item-title-text">{{ item.title }}</h4>
        <span
          class="absolute top-0 bottom-0 block m-auto border-b-2 border-r-2 border-gray-800 accordion-item-trigger-icon"
        ></span>
      </button>
    </div>
    <transition
      name="accordion-item"
      @enter="startTransition"
      @after-enter="endTransition"
      @before-leave="startTransition"
      @after-leave="endTransition"
    >
      <div
        v-if="item.active"
        class="overflow-hidden bg-gray-100 accordion-item-details"
      >
        <div v-html="item.content" class="accordion-item-details-inner"></div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ['item', 'multiple', 'groupId'],
  methods: {
    toggle(event) {
      if (this.multiple) this.item.active = !this.item.active
      else {
        this.$parent.$children.forEach((item) => {
          if (
            item.$el.id === event.currentTarget.parentElement.parentElement.id
          )
            item.item.active = !item.item.active
          else item.item.active = false
        })
      }
    },

    startTransition(el) {
      el.style.height = el.scrollHeight + 'px'
    },

    endTransition(el) {
      el.style.height = ''
    },
  },
}
</script>
