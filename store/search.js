import { defineStore } from 'pinia'
import { searchMovie } from '../services/movies'

export const useStore = defineStore('search', {
  state: () => {
    return {
      value: '',
      fetching: false,
      results: [],
      userItems: [],
      totalResults: 0,
      page: 1
    }
  },
  getters: {
    userItemsMatching(state) {
      return state.userItems.filter(item => {
        return item.Title.toLowerCase().includes(state.value.toLowerCase())
      })
    },
    userItemsMatchingsLength() {
      return this.userItemsMatching.length
    },
    userItemsWithSearchResultsCount(state) {
      return state.totalResults + this.userItemsMatchingsLength
    }
  },
  actions: {
    addUserItem(item) {
      this.userItems.push(item)
    },
    async search({ value, page }) {
      this.fetching = true
      const results = await searchMovie(value, page)
      const { Search: items, totalResults } = results
      
      this.page = page
      this.results = items
      this.totalResults = Number(totalResults)
      this.fetching = false
    }
  }
})
