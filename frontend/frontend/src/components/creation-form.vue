<template>
  <BCard
      header="Add new contact"
      bg-variant="dark"
      text-variant="white"
      body-class="align-items-center d-flex flex-column"
      class="my-5"
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
      <bSpinner
          v-if="contactStore.isCreating"
          type="grow"
          class="mr-2"
          small
      />
      <span>Create</span>
    </BButton>
  </BCard>
</template>

<script setup>

import Input from "@/components/Input.vue";
import {BButton, BCard, BSpinner} from "bootstrap-vue";
import {useContactStore} from "@/store/contacts-store.js";
import {useVuelidate} from "@vuelidate/core";

const contactStore = useContactStore();
const vuelidate = useVuelidate();

function createContact() {
  contactStore.createContact().then(() => {
    vuelidate.value.$reset();
  });
}

</script>



<style scoped>

</style>