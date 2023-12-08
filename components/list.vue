<template>
  <div class="divide-y divide-slate-200 w-full">
    <div
      v-for="result in list"
      @click="showDetails(result.imdbID)"
      :key="result.imdbID"
      class="flex items-start mb-2 cursor-pointer group block rounded-lg p-4 bg-white ring-1 ring-slate-900/5 shadow-lg"
    >
      <div class="font-medium mr-4 w-20">
        <img :src="result.Poster" class="rounded" />
      </div>
      <div>
        <div class="font-medium mb-2">
          {{ result.Title }}
        </div>
        <div class="mb-2">
          {{ result.Director }}
        </div>
        <div class="font-medium text-xs text-slate-500">
          {{ result.Year }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from '~/store/search'
const store = useStore()
const props = defineProps({
  list: {
    type: Array,
    required: true
  }
})
const router = useRouter()
const showDetails = imdbID => {
  router.push({ name: 'movie-movie', params: { movie: imdbID }, query: { search: store.value }})
}
</script>
