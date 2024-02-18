import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useCounterStore = defineStore("contacts", () => {
  const contacts = ref([]);

  function fetchAll() {
    axios.get("http://localhost:8080/contact").then(({ data }) => {
      contacts.value = data;
    });
  }

  return { contacts, fetchAll };
});
