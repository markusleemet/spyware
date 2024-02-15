<template>
  <BFormGroup
    :id="`${id}-wrapper`"
    :description="description"
    :label="label"
    :label-for="id"
    :valid-feedback="validFeedback"
    :invalid-feedback="invalidFeedback"
    :state="!vuelidate.$invalid"
  >
    <BFormInput
      v-model="value"
      :id="id"
      :placeholder="placeholder"
      :type="type"
      size="lg"
      :state="!vuelidate.$invalid"
    />
  </BFormGroup>
</template>

<script setup>
import { useVuelidate } from "@vuelidate/core";
import { BFormGroup, BFormInput } from "bootstrap-vue";

import { ref } from "vue";

const value = ref();

const props = defineProps({
  id: { type: String, required: true },
  placeholder: { type: String, required: true },
  type: { type: String, required: true },
  required: { type: Boolean, default: false },
  description: { type: String, required: true },
  label: { type: String, required: true },
  validFeedback: { type: String, required: true },
  invalidFeedback: { type: String, required: true },
});
const vuelidate = useVuelidate();
</script>

<style scoped></style>
