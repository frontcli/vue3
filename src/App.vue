<template>
  <div>{{ store.counter }}</div>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { useStore } from '@/store'
const store = useStore()
const txt = ref('hello world')
</script>

<style lang="stylus" scoped>

</style>