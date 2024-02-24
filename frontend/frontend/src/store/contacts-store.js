import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

const BACKEND_URL = "http://localhost:8080";

export const useContactStore = defineStore("contacts", () => {
  const contacts = ref([]);
  const isCreating = ref(false);
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

  function resetContactForm() {
    Object.keys(newContact.value).forEach((key) => {
      newContact.value[key] = null;
    });
  }

  function createContact() {
    isCreating.value = true;

    return axios
      .post(BACKEND_URL + "/contact", newContact.value)
      .then((contact) => {
        contacts.value.push(contact);
        setTimeout(() => {}, 1000);
        return Promise.resolve();
        // TODO add error/success toast
      })
      .catch(() => {
        return Promise.reject();
      })
      .finally(() => {
        resetContactForm();
        isCreating.value = false;
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
