<template>
  <div>
    <BFormInput v-model="value" :placeholder="placeholder" :type="type" size="lg" :state="!vuelidate.$invalid"/>
  </div>
</template>

<script setup>
import {useVuelidate} from '@vuelidate/core'

import {ref} from "vue";

const value = ref()

const props = defineProps({
  placeholder: {type: String, required: true},
  type: {type: String, required: true},
  required: {type: Boolean, default: false}
})
const vuelidate = useVuelidate()

</script>


<style scoped>

</style>