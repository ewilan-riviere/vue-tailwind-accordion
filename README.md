# DEPRECATED

# **Vue Tailwind Accordion**

[![](https://img.shields.io/npm/v/vue-tailwind-accordion.svg?style=flat-square&color=cb3837&logo=npm&logoColor=ffffff)](https://www.npmjs.com/package/vue-tailwind-accordion)
[![](https://img.shields.io/github/license/ewilan-riviere/vuepress-theme-useweb.svg?style=flat-square&color=f05032&logo=git&logoColor=ffffff)](https://github.com/ewilan-riviere/dependencies-badges/blob/master/LICENSE)

[![node.js](https://img.shields.io/static/v1?label=Node.js&message=v11.15&color=339933&style=flat-square&logo=node.js&logoColor=ffffff)](https://nodejs.org/en/)
[![vue.js](https://img.shields.io/static/v1?label=Vue.js&message=v2.6&color=4FC08D&style=flat-square&logo=vue.js&logoColor=ffffff)](https://vuejs.org/)
[![tailwindcss](https://img.shields.io/static/v1?label=Tailwind%20CSS&message=v1.6&color=38B2AC&style=flat-square&logo=vue.js&logoColor=ffffff)](https://tailwindcss.com/)

Tailwind Accordion for Vue.js, based on [**Vue.js Accordion Component**](https://codepen.io/anzk/pen/qBEqXGZ) by Anzhelika Kovalchuk

![example](public/example.png)

## **Documentation**

Install it with Yarn or NPM

```bash
yarn add -D vue-tailwind-accordion
```

**OR**

```bash
npm i vue-tailwind-accordion --save-dev
```

Import it, ES6 way, in `main.js` / `app.js` file

```js
import VueTailwindAccordion from 'vue-tailwind-accordion'

Vue.use(VueTailwindAccordion)
```

Use it in a `.vue` file

```vue
<template>
  <div class="container w-1/2 mx-auto my-5">
    <vue-tailwind-accordion :content="data"></vue-tailwind-accordion>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          title: 'Tailwind CSS is awesome!',
          content:
            'Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.',
        },
        {
          title:
            'Vue.js too!',
          content:
            'Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.',
        },
        {
          title: 'Download VueTailwindAccordion on NPM now!',
          content:
            'Relied upon by more than 11 million developers worldwide, npm is committed to making JavaScript development elegant, productive, and safe. The free npm Registry has become the center of JavaScript code sharing, and with more than one million packages, the largest software registry in the world. Our other tools and services take the Registry, and the work you do around it, to the next level. ',
        },
      ],
    }
  },
}
</script>
```

## **License**

[**MIT**](https://github.com/ewilan-riviere/vue-tailwind-accordion/blob/master/LICENSE)
