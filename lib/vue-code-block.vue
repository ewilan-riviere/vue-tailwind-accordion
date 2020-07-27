<template>
  <div style="position: relative;">
    <div v-if="notReachable" class="not-reachable"></div>
    <div v-if="hasHead" :class="['code-heading', colorClass]">
      <span v-if="path">
        <span class="expand">·</span><i>{{ path }}</i>
      </span>
    </div>
    <slot></slot>
    <div
      v-if="copiable && notReachableConsequences"
      v-clipboard:copy="content"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError"
      class="copy-it"
      :class="{ 'forward-head': hasHead }"
    >
      <span>
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
        >
          <path
            d="m4 6.75c0-2.619 2.131-4.75 4.75-4.75h9.133c-.329-1.151-1.378-2-2.633-2h-11.5c-1.517 0-2.75 1.233-2.75 2.75v15.5c0 1.517 1.233 2.75 2.75 2.75h.25z"
          />
          <path
            d="m20.25 4h-11.5c-1.517 0-2.75 1.233-2.75 2.75v14.5c0 1.517 1.233 2.75 2.75 2.75h11.5c1.517 0 2.75-1.233 2.75-2.75v-14.5c0-1.517-1.233-2.75-2.75-2.75zm-2 17h-7.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h7.5c.414 0 .75.336.75.75s-.336.75-.75.75zm0-4h-7.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h7.5c.414 0 .75.336.75.75s-.336.75-.75.75zm0-3.5h-7.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h7.5c.414 0 .75.336.75.75s-.336.75-.75.75zm0-4h-7.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h7.5c.414 0 .75.336.75.75s-.336.75-.75.75z"
          />
        </svg>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CodeHeading',
  props: {
    type: {
      type: String,
      default: '',
    },
    path: {
      type: String,
      default: '',
    },
    copiable: {
      type: Boolean,
      default: true,
    },
    hasHead: {
      type: Boolean,
      default: true,
    },
    notReachable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      content: '',
      notReachableConsequences: true,
    }
  },
  computed: {
    colorClass() {
      return this.type ? `code-heading__${this.type}` : 'code-heading__default'
    },
  },
  mounted() {
    if (Object.keys(this.$slots).length !== 0) {
      this.getSlotContent(this.$slots.default[0].elm)
    }
    if (this.notReachable) {
      this.notReachableConsequences = false
    }
  },
  methods: {
    getSlotContent(element) {
      const content = element.innerText || element.textContent
      this.content = content
    },
    onCopy: function (e) {
      // this.$toasted.show('Sucessfully copied!')
      console.log(e.text)

      this.$toasted.show('Copied to the clipboard!', {
        theme: 'bubble',
        position: 'bottom-right',
        duration: 5000,
      })
    },
    // eslint-disable-next-line no-unused-vars
    onError: function (e) {
      alert('Failed to copy texts')
    },
  },
}
</script>

<style lang="stylus">
.not-reachable {
  position: absolute;
  z-index: 4;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0
}
.copy-it {
    position: absolute;
    display: flex;
    top: 0rem;
    right: 0;
    color: white;
    z-index: 3;
    height: 3rem;
    width: 3rem;
    transition: background-color 0.3s;
    cursor: pointer;
    border-top-right-radius: 0.3rem;
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
      margin: auto;
      svg {
        fill: white;
        transition: fill 0.3s;
      }
    }
    &:hover {
        background-color: rgba(0, 0, 0, .5);
        svg {
          fill: lightgray !important;
        }
    }
}
.code-heading {
    position: relative;
    z-index: 3;
    width: 100%;
    height: 45px;
    line-height: 40px;
    font-weight: bold;
    font-size: 12px;
    margin-bottom: -20px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    text-align: left;
    padding: 0 20px;
    box-sizing: border-box;
    color: white;

    .expand {
        padding: 0 0.5rem;
    }

    &__bad {
        background-color: #cc0000;

        &::before {
            content: "BAD";
        }
    }

    &__good {
    background-color: #3eaf7c;

        &::before {
            content: "GOOD";
        }
    }

    &__nginx {
        background-color: #269539;

        &::before {
            content: "NGINX";
        }
    }

    &__json {
        background-color: #000000;

        &::before {
            content: "JSON";
        }
    }

    &__js {
        color: #000000;
        background-color: #F7DF1E;

        &::before {
            content: "JS";
        }
    }

    &__env {
        background-color: #000000;

        &::before {
            content: "DOTENV";
        }
    }

    &__sh {
        background-color: #000000;

        &::before {
            content: "SH";
        }
    }

    &__apache {
        background-color: #D22128;

        &::before {
            content: "APACHE";
        }
    }

    &__ini {
        background-color: #000000;

        &::before {
            content: "INI";
        }
    }

    &__output {
        background-color: #000000;

        &::before {
            content: "Terminal output";
        }
    }

    &__mysql {
        background-color: #4479A1;

        &::before {
            content: "MySQL";
        }
    }

    &__psa {
        background-color: #012456;

        &::before {
            content: "PowerShell Admin";
        }
    }

    &__ps {
        background-color: #012456;

        &::before {
            content: "PowerShell";
        }
    }

    &__php {
        background-color: #777BB4;

        &::before {
            content: "PHP";
        }
    }

    &__default {
        background-color: #4e6e8e;
    }
}
</style>
