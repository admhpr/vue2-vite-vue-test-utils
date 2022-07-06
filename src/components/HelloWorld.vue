<template>
  <div class="hello-world">
    <h1>{{ msg }}</h1>
    <button @click="onClick">
      SHOW TECH STACK
    </button>
    <ul v-if="showTechStack">
      <li v-for="item in techStack" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
defineProps({
  msg: {
    type: String,
    default: 'Hello World',
  },
})
const helloworldRef = ref<HTMLElement | null>(null)
const techStack: string[] = ['Vue 2', 'Vite', 'Vitest', 'Typescript']
const showTechStack = ref(false)

function onClick() {
  showTechStack.value = !showTechStack.value
  console.log('SHOW TECH STACK VALUE AFTER CLICK', showTechStack.value)
}
</script>

<style>
.hello-world {
  display: flex;
  flex-direction: column;
  align-items: center;
}
a {
  color: #42b983;
}
</style>
