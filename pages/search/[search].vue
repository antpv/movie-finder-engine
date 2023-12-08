<template>
  <div class="container mx-auto px-5 py-5 justify-start items-start flex flex-col h-screen max-w-screen-sm">
    <div class="flex justify-center mb-4">
      <img
        src="~/assets/svg/MovieFinder.svg"
        @click="$router.push({ path: '/' })"
      />
    </div>
    <search />
    <div class="mb-4 w-full" v-if="store.userItemsMatchingsLength">
      <h1 class="mb-4 text-xl text-slate-600">Locale movies:</h1>
      <list :list="store.userItemsMatching" />
    </div>
    <h1 class="mb-4 text-xl text-slate-600">Search results:</h1>
    <div v-if="store.fetching" class="font-medium divide-slate-200 text-slate-500">Please wait...</div>
    <template v-else>
      <div class="divide-y divide-slate-200 w-full">
        <list :list="store.results" />
      </div>
      <div v-if="store.totalResults > 10" class="mt-4 pb-12 flex justify-center w-full">
        <el-pagination
          layout="prev, pager, next"
          :total="store.totalResults"
          :page-size="10"
          :current-page="store.page"
          @current-change="handlePageChange"
        />
      </div>
    </template>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useStore } from '~/store/search'

const store = useStore()
const route = useRoute()
const router = useRouter()
const initialSearchValue = decodeURIComponent(route.params.search)

store.value = initialSearchValue

let { value } = storeToRefs(store)
const page = route.query.page ? Number(route.query.page) : 1

await store.search({ value: value.value, page })

const handlePageChange = async page => {
  await store.search({ value: value.value, page })
  router.push({ query: { page }})
}
</script>
