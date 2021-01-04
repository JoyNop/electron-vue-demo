<!--
 * @Author: HanRui(JoyNop)
 * @Date: 2021-01-04 14:41:01
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-01-04 14:54:16
 * @Description: file content
 * @FilePath: /electron-vue-demo/src/views/Home.vue
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>By JoyNop</div>

    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  }
})
</script>
