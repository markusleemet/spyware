<template>
  <BCard
    header="Add new contact"
    bg-variant="light"
    text-variant="dark"
    body-class="align-items-center d-flex flex-column"
    class="mb-5 align-self-stretch"
  >
    <div class="inputs-container">
      <Input placeholder="Name" field="name" label="Enter name *" required />
      <Input
        placeholder="Secret name"
        field="secretName"
        label="Enter secret name *"
        required
      />
      <Input
        placeholder="Phone number"
        field="phoneNumber"
        label="Enter phone number"
      />
    </div>
    <BButton
      variant="success"
      size="lg"
      @click="createContact"
      :disabled="vuelidate.$invalid"
      class="d-flex align-items-center"
    >
      <bSpinner v-if="contactStore.isCreating" type="grow" class="mr-2" small />
      <span>Create</span>
    </BButton>
  </BCard>
</template>

<script setup>
import Input from "@/components/contact-input.vue";
import { BButton, BCard, BSpinner } from "bootstrap-vue";
import { useContactStore } from "@/store/contacts-store.js";
import { useVuelidate } from "@vuelidate/core";

const contactStore = useContactStore();
const vuelidate = useVuelidate();

function createContact() {
  contactStore.createContact().then(() => {
    vuelidate.value.$reset();
  });
}
</script>

<style scoped>
.inputs-container {
  display: grid;
  align-self: stretch;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  align-items: end;
  column-gap: 3rem;
  row-gap: 1rem;
  padding: 2rem;

  @media (max-width: 576px) {
    padding: 0.5rem;
  }
}

.disabled {
  cursor: not-allowed;
}
</style>
