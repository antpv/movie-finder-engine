<template>
  <div>
    <input v-model="value" />
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useStore } from '~/store/search'

const store = useStore()
const { value } = storeToRefs(store)
</script>
