<template>
  <div class="container mx-auto px-5 py-5 justify-center items-center flex flex-col h-screen w-full max-w-screen-sm">
    <div class="flex justify-center mb-4">
      <img src="~/assets/svg/MovieFinder.svg" />
    </div>
    <search />
    <div class="mt-4 screen-full align-center">
      <el-link type="primary" @click="visible = true">Add movie</el-link>
    </div>
    <add-movie
      :visible="visible"
      @close="visible = false"
      @visible="value => visible = value"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
</script>
