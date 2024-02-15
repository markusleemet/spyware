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
  </div>
</template>

<script setup>
import Input from "@/components/Input.vue";
</script>

<style scoped></style>
