<template>
  <div
    :id="groupId + '-' + item.id"
    class="accordion-item"
    :class="{ 'is-active': item.active }"
  >
    <dt class="accordion-item-title">
      <button
        @click="toggle"
        class="w-full px-3 py-4 text-left transition-colors duration-300 bg-transparent border-transparent hover:bg-blue-600 hover:text-white"
      >
        <h4 class="accordion-item-title-text">{{ item.title }}</h4>
        <span class="accordion-item-trigger-icon"></span>
      </button>
    </dt>
    <transition
      name="accordion-item"
      @enter="startTransition"
      @after-enter="endTransition"
      @before-leave="startTransition"
      @after-leave="endTransition"
    >
      <div class="pl-5">
        <dd v-if="item.active" class="accordion-item-details">
          <div v-html="item.details" class="px-3 py-4"></div>
        </dd>
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

<style lang="scss" scoped></style>
