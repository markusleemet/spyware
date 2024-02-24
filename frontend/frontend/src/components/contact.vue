<template>
  <div class="contact-container">
    <div class="contact-item">
      <BIconPersonCircle />
      <span>{{ contact.name }}</span>
    </div>
    <div class="contact-item">
      <BIconTelephoneFill />
      <span>{{ contact.secretName }}</span>
    </div>
    <span class="contact-item">
      <BIconSafeFill />
      <span>{{ contact.phoneNumber }}</span>
    </span>
  </div>
</template>

<script setup>
import {
  BIconPersonCircle,
  BIconTelephoneFill,
  BIconSafeFill,
} from "bootstrap-vue";

const props = defineProps({ contact: { type: Object, required: true } });
</script>

<style scoped>
.contact-container {
  display: flex;
  align-items: center;
  column-gap: 2rem;

  .contact-item {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
  }
}
</style>
