<template>
  <div class="flex items-center mb-5 w-full">
    <el-input
      v-model="value"
      size="large"
      placeholder="Movie title"
      class="mr-4 w-full max-w-screen-sm"
    />
    <el-button
      size="large"
      class="inline-flex items-center px-3"
      type="primary"
      :disabled="!value.length || store.fetching"
      @click="$router.push({
        name: 'search-search',
        params: { search: encodeURIComponent(value) },
        query: { page: 1 }
      })"
    >
      Search
    </el-button>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useStore } from '~/store/search'

const store = useStore()
const route = useRoute()
const initialSearchValue = route.params.search ? decodeURIComponent(route.params.search) : ''

store.value = initialSearchValue

let { value } = storeToRefs(store)
</script>
