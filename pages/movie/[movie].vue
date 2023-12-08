<template>
  <div class="container mx-auto px-5 py-5 justify-start items-start flex flex-col h-screen max-w-screen-sm">
    <div class="flex justify-center mb-4">
      <img
        src="~/assets/svg/MovieFinder.svg"
        @click="$router.push({ path: '/' })"
      />
    </div>
    <search />
    <div v-if="fetching" class="font-medium divide-slate-200 text-slate-500">Please wait...</div>
    <div v-else class="w-full">
      <div class="flex items-start w-full">
          <div class="font-medium mr-4 w-44">
            <img :src="movie.Poster" class="rounded" />
          </div>
          <div>
            <h1 class="text-xl text-slate-600 mb-4">{{ movie.Title }}</h1>
            <div class="mb-2">
              <span class="text-slate-500">Director:</span>
              {{ movie.Director }}
            </div>
            <div class="font-medium">
              <span class="text-slate-500">Year:</span>
              {{ movie.Year }}
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { getDetalisatedMovie } from '../services/movies'
import { useStore } from '~/store/search'

const store = useStore()
let fetching = true

const route = useRoute()
const imdbID = decodeURIComponent(route.params.movie)
const localMovie = store.userItems.find(item => item.imdbID === imdbID)
const movie = localMovie ? localMovie : await getDetalisatedMovie(imdbID)

fetching = false
</script>
