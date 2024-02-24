<template>
  <BToast
    v-model="contactStore.showSuccessToast"
    variant="success"
    title="Success"
  >
    New contact was successfully added
  </BToast>
  <BToast v-model="contactStore.showErrorToast" variant="danger" title="Error">
    Something went wrong
  </BToast>
</template>

<script setup>
import { useContactStore } from "@/store/contacts-store.js";

const contactStore = useContactStore();
</script>
