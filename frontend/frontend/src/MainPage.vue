<template>
  <div id="app">
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
        @click="contactStore.createContact()"
        :disabled="vuelidate.$invalid"
        >Create
      </BButton>
    </BCard>

    <BTable
      striped
      :items="contactStore.contacts"
      :fields="['name', 'secretName', 'phoneNumber']"
      :busy="contactStore.isFetching"
    >
      <template #table-busy>
        <div class="text-center my-2">
          <BSpinner class="align-middle"></BSpinner>
        </div>
      </template>
    </BTable>
  </div>
</template>

<script setup>
import Input from "@/components/Input.vue";
import { BButton, BCard, BTable, BSpinner } from "bootstrap-vue";
import { onBeforeMount } from "vue";
import { useContactStore } from "@/store/contacts-store.js";
import { useVuelidate } from "@vuelidate/core";

const contactStore = useContactStore();
const vuelidate = useVuelidate();

onBeforeMount(() => {
  contactStore.fetchAll();
});
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;

  .inputs-container {
    display: flex;
    flex-grow: 1;
    column-gap: 3rem;
    padding: 2rem;
  }

  .disabled {
    cursor: not-allowed;
  }
}
</style>
