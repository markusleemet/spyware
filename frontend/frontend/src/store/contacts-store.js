import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

const BACKEND_URL = "http://localhost:8080";

export const useContactStore = defineStore("contacts", () => {
  const contacts = ref([]);

  const isCreating = ref(true);
  const isFetching = ref(true);

  const newContact = ref({
    name: null,
    secretName: null,
    phoneNumber: null,
  });

  function fetchAll() {
    axios
      .get(BACKEND_URL + "/contact")
      .then(({ data }) => {
        contacts.value = data;
      })
      .finally(() => {
        isFetching.value = false;
      });
  }

  function createContact() {
    isCreating.value = true;

    axios.post(BACKEND_URL + "/contact", newContact.value).then((contact) => {
      contacts.value.push(contact);

      // TODO add error/success toast
      newContact.value.name = null;
      newContact.value.secretName = null;
      newContact.value.phone = null;
    });
  }

  return {
    contacts,
    fetchAll,
    createContact,
    isCreating,
    isFetching,
    newContact,
  };
});
