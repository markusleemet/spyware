<template>
  <BFormGroup
    :id="`${field}-wrapper`"
    :label="label"
    :label-for="field"
    :state="isFieldInvalid"
    :invalid-feedback="errorMessage"
  >
    <BFormInput
      v-model="contactStore.newContact[field]"
      :id="field"
      :placeholder="placeholder"
      size="lg"
      :state="isFieldInvalid"
      @blur="vuelidate.$touch()"
    />
  </BFormGroup>
</template>

<script setup>
import { useVuelidate } from "@vuelidate/core";
import { BFormGroup, BFormInput } from "bootstrap-vue";
import { useContactStore } from "@/store/contacts-store.js";
import { helpers, requiredIf } from "@vuelidate/validators";
import { computed } from "vue";

const contactStore = useContactStore();

const props = defineProps({
  placeholder: { type: String, required: true },
  required: { type: Boolean, default: false },
  label: { type: String, required: true },
  field: { type: String, required: true },
});

const errorMessage = computed(() => {
  return vuelidate.value.$errors?.[0]?.$message;
});

const vuelidate = useVuelidate(
  {
    [props.field]: {
      requiredIf: helpers.withMessage(
        "Field is required",
        requiredIf(props.required)
      ),
      ...(props.field === "phoneNumber"
        ? {
            validPhoneNumber: helpers.withMessage(
              "Not a valid phone number",
              helpers.regex(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)
            ),
          }
        : {}),
    },
  },
  contactStore.newContact
);

const isFieldInvalid = computed(() => {
  return vuelidate.value.$dirty ? !vuelidate.value.$invalid : null;
});
</script>

<style scoped>
:deep(.invalid-feedback) {
  position: absolute;
}
</style>
