<template>
  <Toasts />
  <div id="app">
    <CreationForm />
    <Search class="mb-3" />
    <BTable
      striped
      :items="contactStore.filteredContacts"
      :fields="[
        'name',
        'secretName',
        'phoneNumber',
        { key: 'action', label: '' },
      ]"
      :busy="contactStore.isFetching"
    >
      <template #table-busy>
        <div class="text-center my-2">
          <BSpinner class="align-middle"></BSpinner>
        </div>
      </template>
      <template #cell(action)="row">
        <div class="delete-icon-container">
          <BIconTrashFill
            variant="danger"
            font-scale="1.6"
            class="clickable"
            @click="contactStore.deleteContact(row.item.id)"
          />
        </div>
      </template>
    </BTable>
  </div>
</template>

<script setup>
import { BTable, BSpinner, BIconTrashFill } from "bootstrap-vue";
import { onBeforeMount } from "vue";
import { useContactStore } from "@/store/contacts-store.js";
import Toasts from "@/components/toasts.vue";
import CreationForm from "@/components/creation-form.vue";
import Search from "@/components/search.vue";

const contactStore = useContactStore();

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
  padding: 3rem;

  @media (max-width: 576px) {
    padding: 0.5rem;
  }

  .delete-icon-container {
    display: flex;
    justify-content: end;
    align-items: center;
  }

  .clickable {
    cursor: pointer;
  }
}
</style>
