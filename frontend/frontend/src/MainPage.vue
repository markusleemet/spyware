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
        <div class="d-flex justify-content-end">
          <BIconTrashFill
            variant="danger"
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
import Search from "@/components/Search.vue";

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

  .clickable {
    cursor: pointer;
  }

  .table {
    :deep(th:nth-of-type(4)9) {
      div {
        display: none;
      }
    }
  }
}
</style>
