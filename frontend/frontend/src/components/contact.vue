<template>
  <div class="d-flex align-items-center">
    <BIconPersonCircle />
    <span
      >NIMI: <span>{{ contact.name }}</span></span
    >
  </div>
</template>

<script setup>
import { BIconPersonCircle } from "bootstrap-vue";

const props = defineProps({ contact: { type: Object, required: true } });
</script>

<style scoped></style>
