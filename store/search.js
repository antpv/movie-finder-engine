import { defineStore } from 'pinia'

export const useStore = defineStore('search', {
  state: () => {
    return {
      value: 'value'
    }
  }
})
