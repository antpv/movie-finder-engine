<template>
  <el-dialog :model-value="visible" title="Add movie">
    <el-form :model="form">
      <el-form-item label="Title" :label-width="'100px'">
        <el-input v-model="form.Title" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Director" :label-width="'100px'">
        <el-input v-model="form.Director" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Year" :label-width="'100px'">
        <el-input v-model="form.Year" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="emitVisible(false)">Cancel</el-button>
        <el-button
          type="primary"
          :disabled="!isValidForm"
          @click="confirm"
        >
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { useStore } from '~/store/search'
const emit = defineEmits(['visible'])
const emitVisible = value => emit('visible', value)

const props = defineProps({
  visible: {
    type: Boolean,
    required: true
  }
})
const initialForm = {
  Title: '',
  Director: '',
  Year: ''
}
const form = reactive({ ...initialForm })
const isValidForm = computed({
  get() {
    return Boolean(form.Title.length && form.Director.length && form.Year.length)
  }
})
const store = useStore()
const confirm = () => {
  store.addUserItem({ ...form, imdbID: Date.now().toString() })
  for (const prop in initialForm) {
    form[prop] = initialForm[prop]
  }
  emitVisible(false)
}
</script>
