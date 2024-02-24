<template>
  <BFormGroup
    :id="`${field}-wrapper`"
    :label="label"
    :label-for="field"
    :state="!vuelidate.$invalid"
  >
    <BFormInput
      v-model="contactStore.newContact[field]"
      :id="field"
      :placeholder="placeholder"
      size="lg"
      :state="!vuelidate.$invalid"
    />
  </BFormGroup>
</template>

<script setup>
import { useVuelidate } from "@vuelidate/core";
import { BFormGroup, BFormInput } from "bootstrap-vue";
import { useContactStore } from "@/store/contacts-store.js";
import { requiredIf } from "@vuelidate/validators";

const contactStore = useContactStore();

const props = defineProps({
  placeholder: { type: String, required: true },
  required: { type: Boolean, default: false },
  label: { type: String, required: true },
  field: { type: String, required: true },
});

const vuelidate = useVuelidate(
  { [props.field]: { requiredIf: requiredIf(props.required) } },
  contactStore.newContact
);
</script>
