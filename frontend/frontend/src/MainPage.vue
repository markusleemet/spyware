<template>
  <div id="app">
    <Input
      placeholder="Nimi"
      type="text"
      description="Pärisnimi"
      id="name"
      invalid-feedback="See ei ole pärisnimi"
      label="Sisesta pärisnimi"
      required
      valid-feedback="See on pärisnimi"
    />
    <div class="d-flex flex-column">
      <contact
        :contact="contact"
        v-for="contact in contactStore.contacts"
        :key="contact.id"
      />
    </div>
  </div>
</template>

<script setup>
import Input from "@/components/Input.vue";
import { onBeforeMount } from "vue";
import { useCounterStore } from "@/store/contacts-store.js";
import Contact from "@/components/contact.vue";

const contactStore = useCounterStore();

onBeforeMount(() => {
  contactStore.fetchAll();
});
</script>

<style scoped></style>
