<template>
  <BInputGroup prepend="&#x1F50E">
    <BFormInput v-model="contactStore.searchValue" />
    <template #append>
      <BDropdown :text="contactStore.searchType" variant="outline-dark">
        <BDropdownItem
          v-for="field in Object.keys(contactStore.newContact)"
          :key="field"
          @click="contactStore.searchType = field"
          >{{ field }}</BDropdownItem
        >
      </BDropdown>
    </template>
  </BInputGroup>
</template>

<script setup>
import { BInputGroup, BFormInput, BDropdown } from "bootstrap-vue";
import { useContactStore } from "@/store/contacts-store.js";

const contactStore = useContactStore();
</script>